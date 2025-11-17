import { defaultSiteContent } from './defaultContent';
import { SiteContent } from './siteContentTypes';

const STORAGE_KEY = 'siteContent';
const GITHUB_CREDS_KEY = 'gh-creds';
const SITE_CONTENT_EVENT = 'siteContentUpdated';

const rawBase = String((import.meta as any).env.BASE_URL ?? '/');
const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
const SITE_CONTENT_URL = `${basePath}content/siteContent.json`;

export interface GitHubCredentials {
  owner: string;
  repo: string;
  branch?: string;
  token: string;
}

const toJSON = (value: string | null) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const getStoredSiteContent = (): SiteContent | null => {
  if (typeof window === 'undefined') return null;
  return toJSON(window.localStorage.getItem(STORAGE_KEY));
};

export const saveSiteContentLocally = (content: SiteContent) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
};

export const dispatchSiteContentEvent = (content: SiteContent) => {
  if (typeof window === 'undefined') return;
  try {
    const event = new CustomEvent(SITE_CONTENT_EVENT, { detail: { content } });
    window.dispatchEvent(event);
  } catch (err) {
    console.warn('siteContentUpdated event could not be dispatched', err);
  }
};

export const fetchSiteContentFromRemote = async (): Promise<SiteContent | null> => {
  try {
    const response = await fetch(`${SITE_CONTENT_URL}?ts=${Date.now()}`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch site content (${response.status})`);
    }
    const data = (await response.json()) as SiteContent;
    saveSiteContentLocally(data);
    return data;
  } catch (error) {
    console.warn('Could not load remote site content:', error);
    return null;
  }
};

export const loadSiteContent = async (options: { refresh?: boolean } = {}): Promise<SiteContent> => {
  if (!options.refresh) {
    const stored = getStoredSiteContent();
    if (stored) return stored;
  }

  const remote = await fetchSiteContentFromRemote();
  if (remote) return remote;

  saveSiteContentLocally(defaultSiteContent);
  return defaultSiteContent;
};

export const getStoredGitHubCreds = (): GitHubCredentials | null => {
  if (typeof window === 'undefined') return null;
  const parsed = toJSON(window.localStorage.getItem(GITHUB_CREDS_KEY));
  if (!parsed || !parsed.owner || !parsed.repo || !parsed.token) return null;
  return {
    owner: parsed.owner,
    repo: parsed.repo,
    branch: parsed.branch || 'main',
    token: parsed.token,
  };
};

const githubApi = 'https://api.github.com';

const base64Encode = (value: string) => {
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return window.btoa(unescape(encodeURIComponent(value)));
  }
  const globalBuffer = (globalThis as any)?.Buffer;
  if (globalBuffer) {
    return globalBuffer.from(value, 'utf-8').toString('base64');
  }
  throw new Error('No base64 encoder available in this environment');
};

const upsertFile = async (
  path: string,
  fileContent: string,
  creds: GitHubCredentials,
  message: string
) => {
  const endpoint = `${githubApi}/repos/${creds.owner}/${creds.repo}/contents/${path}`;
  const headers = {
    Authorization: `Bearer ${creds.token}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  };

  let sha: string | undefined;
  try {
    const getResponse = await fetch(`${endpoint}?ref=${creds.branch || 'main'}`, {
      headers,
    });
    if (getResponse.ok) {
      const existing = await getResponse.json();
      sha = existing.sha;
    }
  } catch (err) {
    console.warn(`Could not fetch existing file ${path}`, err);
  }

  const body = {
    message,
    content: base64Encode(fileContent),
    branch: creds.branch || 'main',
    ...(sha ? { sha } : {}),
  };

  const response = await fetch(endpoint, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`GitHub update failed for ${path}: ${response.status} ${details}`);
  }
};

export const publishSiteContentToGitHub = async (
  content: SiteContent,
  creds: GitHubCredentials,
  message: string = 'content: update site content'
) => {
  const payload = JSON.stringify(content, null, 2);
  const targets = ['public/content/siteContent.json', 'docs/content/siteContent.json'];
  for (const target of targets) {
    await upsertFile(target, payload, creds, message);
  }
};

export const ensureSiteContentFile = () => defaultSiteContent;
