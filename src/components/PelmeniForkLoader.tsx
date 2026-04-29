import React from 'react';
import type { PelmeniForkLoaderProps } from '../types';
import { lighten, darken } from '../utils/color';

export const PelmeniForkLoader: React.FC<PelmeniForkLoaderProps> = ({
  size = 200,
  accent = '#1e3799',
  forkColor: forkColorProp,
  plateColor = '#fefefe',
  pelmeniColor = '#d1d5db',
  backgroundColor = '#efebe7',
  speed = 1,
}) => {
  const forkColor = forkColorProp ?? darken(accent, 0.4);
  const pelmeniStroke = darken(pelmeniColor, 0.5);
  const plateShadow = darken(backgroundColor, 0.3);
  const goldRing = lighten(accent, 0.6);
  const lightRing = lighten(accent, 0.8);
  const dur = 4.5 / speed;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      <defs>
        <style>{`
          @keyframes pelmeni-fork-bounce {
            0% { transform: translate(250px, 250px) rotate(0deg); animation-timing-function: linear; }
            10% { transform: translate(175px, 155px) rotate(45deg); animation-timing-function: linear; }
            23% { transform: translate(325px, 175px) rotate(110deg); animation-timing-function: linear; }
            38% { transform: translate(315px, 335px) rotate(190deg); animation-timing-function: linear; }
            55% { transform: translate(155px, 305px) rotate(270deg); animation-timing-function: linear; }
            80% { transform: translate(250px, 250px) rotate(360deg); animation-timing-function: ease-out; }
            100% { transform: translate(250px, 250px) rotate(360deg); }
          }
          @keyframes pelmeni-fork-stab {
            0%, 3% { transform: translate(250px, 260px) scale(0.9); }
            15%, 90% { transform: translate(250px, 190px) scale(1.15); animation-timing-function: ease-in; }
            100% { transform: translate(250px, 260px) scale(0.9); }
          }
        `}</style>

        <filter id="pf-plate-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="4" dy="12" stdDeviation="10" floodOpacity="0.15"/>
        </filter>
        <filter id="pf-fork-shadow" x="-50%" y="-20%" width="200%" height="150%">
          <feDropShadow dx="0" dy="25" stdDeviation="8" floodOpacity="0.25"/>
        </filter>

        <radialGradient id="pf-plate-inner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={lighten(plateColor, 0.05)}/>
          <stop offset="85%" stopColor={plateColor}/>
          <stop offset="100%" stopColor={darken(plateColor, 0.08)}/>
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill={backgroundColor} />

      <circle cx="250" cy="250" r="190" fill={plateColor} filter="url(#pf-plate-shadow)"/>
      <circle cx="250" cy="250" r="172" fill="none" stroke={accent} strokeWidth="8"/>
      <circle cx="250" cy="250" r="162" fill="none" stroke={goldRing} strokeWidth="3"/>
      <circle cx="250" cy="250" r="185" fill="none" stroke={lightRing} strokeWidth="2"/>
      <circle cx="250" cy="250" r="140" fill="url(#pf-plate-inner)" stroke="#dcdde1" strokeWidth="2"/>

      <g style={{ animation: `pelmeni-fork-bounce ${dur}s infinite`, transformOrigin: '0 0' }}>
        <ellipse cx="0" cy="12" rx="26" ry="18" fill={plateShadow} opacity="0.3"/>
        <path d="M -8 -22 C 20 -25, 36 -5, 30 15 C 20 32, -15 32, -26 18 C -36 5, -30 -18, -8 -22 Z" fill={pelmeniColor}/>
        <g fill="none" stroke={pelmeniStroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M -6 -23 C -30 -22, -38 2, -22 19" />
          <path d="M -14 -22 C -28 -5, -24 14, 2 16 C 22 16, 30 2, 28 -8 C 26 -20, 10 -18, 10 -18" />
          <path d="M -6 -23 C 18 -27, 36 -10, 36 5 C 36 12, 32 18, 24 22" />
          <path d="M -22 19 C -10 32, 12 32, 24 22" />
          <path d="M -8 -2 Q 0 10, 1 10 Q 5 10, 12 -5" />
        </g>
      </g>

      <g filter="url(#pf-fork-shadow)" style={{ animation: `pelmeni-fork-stab ${dur}s infinite` }}>
        <path d="M -6 -140 
                 A 6 6 0 0 1 6 -140 
                 L 6 -50 
                 C 6 -35, 14 -33, 14 -20
                 L 14 -3 
                 A 2.5 2.5 0 0 1 9 -3 
                 L 9 -18 
                 A 1.5 1.5 0 0 0 6 -18 
                 L 6 -3 
                 A 2.5 2.5 0 0 1 1 -3 
                 L 1 -18 
                 A 1.5 1.5 0 0 0 -2 -18 
                 L -2 -3 
                 A 2.5 2.5 0 0 1 -7 -3 
                 L -7 -18 
                 A 1.5 1.5 0 0 0 -10 -18 
                 L -10 -3 
                 A 2.5 2.5 0 0 1 -15 -3 
                 L -15 -20 
                 C -15 -33, -6 -35, -6 -50 
                 Z" 
              fill={forkColor} stroke={forkColor} strokeWidth="1"/>
      </g>
    </svg>
  );
};
