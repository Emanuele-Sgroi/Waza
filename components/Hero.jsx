import { Gradient } from '../scripts/Gradient';

import React from 'react';

export const Hero = () => {
  // Create your instance
  const gradient = new Gradient();

  // Call `initGradient` with the selector to your canvas
  gradient.initGradient('#gradient-canvas');
  return (
    <div>
      <canvas id='gradient-canvas' data-transition-in />
      Hero
    </div>
  );
};
