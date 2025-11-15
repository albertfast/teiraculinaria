import React from 'react';
import type { Card } from '../types';
import { withBase } from '../lib/paths';

interface CardViewProps { card: Card; key?: string }

export default function CardView({ card }: CardViewProps) {
  const imgSrc = card.image_url
    ? (/^https?:\/\//i.test(card.image_url) ? card.image_url : withBase(card.image_url))
    : undefined;

  return (
    <div style={{ position: 'relative' }}>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={card.image_alt || ''}
          style={{ width: '100%', display: 'block', borderRadius: 12 }}
        />
      )}
      {(card.title || card.subtitle || card.body) && (
        <div
          style={{
            position: 'absolute',
            left: `${card.x ?? 0}%`,
            top: `${card.y ?? 0}%`,
            width: `${card.width_pct ?? 100}%`,
            transform: 'translate(0, 0)',
            color: card.text_color || '#eae6d6',
            fontFamily: card.font_family || 'serif',
            fontWeight: card.font_weight || '400',
            fontSize: (card.font_size ?? 16) + 'px',
            textAlign: (card.text_align as any) || 'left',
            textShadow: '0 2px 14px rgba(0,0,0,.35)'
          }}
        >
          {card.title && <h3 style={{ margin: 0 }}>{card.title}</h3>}
          {card.subtitle && <div style={{ opacity: .9 }}>{card.subtitle}</div>}
          {card.body && <p style={{ marginTop: 6 }}>{card.body}</p>}
        </div>
      )}
    </div>
  );
}
