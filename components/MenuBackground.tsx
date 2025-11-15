import React, { Suspense, useEffect, useState } from 'react';
import './LightRays.css';

const LightRaysLazy = React.lazy(() => import('./LightRays'));

const useBackgroundEnabled = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const isReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    setEnabled(!isReduced && !isMobile);
  }, []);
  return enabled;
};

const MenuBackground: React.FC = () => {
  const enabled = useBackgroundEnabled();
  return (
    <div className="menu-rays-wrap" aria-hidden>
      {enabled ? (
        <Suspense fallback={null}>
          <LightRaysLazy
            raysOrigin="top-center"
            raysColor="#f6d2a8" /* warm amber glow */
            raysSpeed={1.1}
            lightSpread={0.85}
            rayLength={1.15}
            followMouse={true}
            mouseInfluence={0.05}
            noiseAmount={0.05}
            distortion={0.02}
            className="menu-rays"
          />
        </Suspense>
      ) : (
        <div className="menu-bg-fallback" />
      )}
      <div className="menu-bg-overlay" />
    </div>
  );
};

export default MenuBackground;
