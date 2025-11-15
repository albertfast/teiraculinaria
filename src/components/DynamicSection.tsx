import React from 'react';
import type { Card } from '../types';
import CardView from './CardView';

export default function DynamicSection({ cards }: { cards: Card[] }) {
  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
      {cards.map(c => (
        <CardView card={c} key={c.id} />
      ))}
    </div>
  );
}
