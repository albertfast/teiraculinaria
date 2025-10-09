# Teira Culinaria - AI Coding Agent Instructions

## Project Overview
This is a React-based portfolio website for a culinary artist. It features interactive visual effects, animations, and a responsive design that showcases culinary artistry through multiple pages and components.

## Architecture & Structure

### Core Technologies
- **Frontend**: React 19, TypeScript, Vite
- **Routing**: react-router-dom
- **Animations**: Three.js, GSAP, OGL (WebGL)
- **Deployment**: GitHub Pages (from `/docs` directory)

### Key Components
- **Visual Effects**: The application uses several custom WebGL components for visual effects:
  - `LiquidEther.tsx`: Fluid simulation background effect using Three.js
  - `Ballpit.tsx`: Interactive 3D bubble/ball physics simulation
  - `LightBallpit.tsx`: Lightweight version for mobile devices
  - `LightRays.tsx`: Visual light beam effects

- **Page Structure**:
  - `App.tsx`: Main router and layout container
  - `/pages/*.tsx`: Page-level components (e.g., `AboutPage.tsx`, `MenuPage.tsx`)
  - `/components/*.tsx`: Reusable UI components (e.g., `Header.tsx`, `Footer.tsx`)

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Building & Deployment
- The app is configured to build to `/docs` for GitHub Pages hosting:
```bash
# Build for production
npm run build
```
- Deployment happens by committing the `docs/` directory to the main branch

### PDF Content Extraction
The site includes functionality to extract content from PDFs:
```bash
# Extract content from PDF files
npm run extract:pdf
```

## Project Conventions

### Routing
- Uses `react-router-dom` with basename configuration for GitHub Pages compatibility
- Routes are defined in `App.tsx` with proper nesting

### Responsive Design
- Mobile detection in page components (see `AboutPage.tsx`):
  ```tsx
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  ```
- Different components are rendered based on device capabilities (e.g., `LightBallpit` vs `Ballpit`)

### WebGL Components
- WebGL components accept configuration options via props
- Always provide fallbacks or lightweight alternatives for mobile devices
- Performance optimization is crucial for these components

### Asset Management
- Images are stored in `/imggallery` directory
- Static assets are placed in `/public` directory

## Environment & Configuration
- The app uses Vite's environment variable handling
- Configure API keys (e.g., `GEMINI_API_KEY`) in `.env.local` file (not committed to repo)
- Different base URLs for development (`/`) and production (`/teiraculinaria/`)

## Common Tasks
- **Adding a new page**: Create component in `/pages`, add route in `App.tsx`
- **Adding new visual effects**: Consider both high-end and mobile performance
- **Updating content**: Most text content is defined directly in components