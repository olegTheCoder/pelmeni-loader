import React, { useEffect, useRef } from 'react';
import type { PelmeniLoaderProps } from '../types';
import { lighten, darken } from '../utils/color';

export const PelmeniLoader: React.FC<PelmeniLoaderProps> = ({
  size = 200,
  color = '#64748b',
  speed = 1,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (speed === 1 || !svgRef.current) return;
    const svg = svgRef.current;
    const animEls = svg.querySelectorAll('animate, animateTransform');
    animEls.forEach((el) => {
      const origDur = parseFloat(el.getAttribute('dur') || '1');
      if (!isNaN(origDur)) {
        el.setAttribute('dur', `${origDur / speed}s`);
      }
    });
  }, [speed]);

  const potBody = color;
  const rimLight = lighten(color, 0.4);
  const rimDark = darken(color, 0.15);
  const rimWhite = lighten(color, 0.7);
  const gradTop = lighten(color, 0.55);
  const gradMid = lighten(color, 0.15);
  const gradBottom = darken(color, 0.3);
  const shadowColor = darken(color, 0.75);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -30 300 260"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      <defs>
        <radialGradient id={`potBottom-${potBody.replace('#', '')}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={gradTop} />
          <stop offset="65%" stopColor={gradMid} />
          <stop offset="100%" stopColor={gradBottom} />
        </radialGradient>
        <linearGradient id={`potRim-${potBody.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={rimLight} />
          <stop offset="50%" stopColor={rimWhite} />
          <stop offset="100%" stopColor={rimDark} />
        </linearGradient>

        <g id="pelmen">
          <ellipse cx="0" cy="8" rx="14" ry="10" fill={shadowColor} opacity="0.3" />

          <g>
            <animateTransform attributeName="transform" type="scale"
              values="1,1; 0.85,1; 1,1" keyTimes="0;0.5;1"
              calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              dur="1.8s" repeatCount="indefinite" />
            <ellipse cx="0" cy="0" rx="16" ry="0.5" fill="none" stroke="#d8cec4" strokeWidth="6">
              <animate attributeName="ry" values="3; 0.5; 3" keyTimes="0;0.5;1"
                calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                dur="1.8s" repeatCount="indefinite" />
            </ellipse>
          </g>

          <circle cx="0" cy="0" r="13" fill="#d8cec4" />

          <g>
            <animateTransform attributeName="transform" type="scale"
              values="1,1; 0.85,1; 1,1" keyTimes="0;0.5;1"
              calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              dur="1.8s" repeatCount="indefinite" />
            <ellipse cx="0" cy="0" rx="16" ry="0.5" fill="none" stroke="#d8cec4" strokeWidth="6">
              <animate attributeName="ry" values="3; 0.5; 3" keyTimes="0;0.5;1"
                calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                dur="1.8s" repeatCount="indefinite" />
            </ellipse>
          </g>
        </g>
      </defs>

      <circle cx="102" cy="104" r="92" fill="#000000" opacity="0.1" />
      <path d="M 10 70 C -15 70, -15 130, 10 130" fill="none" stroke={`url(#potRim-${potBody.replace('#', '')})`} strokeWidth="8" strokeLinecap="round" />
      <path d="M 190 70 C 215 70, 215 130, 190 130" fill="none" stroke={`url(#potRim-${potBody.replace('#', '')})`} strokeWidth="8" strokeLinecap="round" />
      <circle cx="100" cy="100" r="92" fill={potBody} />
      <circle cx="100" cy="100" r="90" fill={`url(#potBottom-${potBody.replace('#', '')})`} stroke={`url(#potRim-${potBody.replace('#', '')})`} strokeWidth="5" />

      <circle cx="100" cy="100" r="20" fill="none" stroke="#ffffff" strokeWidth="4" opacity="0">
        <animate attributeName="opacity" values="0; 0.15; 0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="r" values="20; 85" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="20" fill="#ffffff" opacity="0">
        <animate attributeName="opacity" values="0; 0.1; 0" dur="2.5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="r" values="20; 80" dur="2.5s" begin="1s" repeatCount="indefinite" />
      </circle>

      <g>
        <animate attributeName="opacity" values="0.4; 1; 0.4" keyTimes="0; 0.25; 0.5" dur="2.4s" begin="0s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0; -1.5,1; 1,-1.5; 0,0" dur="1.1s" repeatCount="indefinite" />
        <g transform="translate(100, 43)">
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-10; 10; -10" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" />
            <use href="#pelmen" transform="rotate(15)" />
          </g>
        </g>
      </g>

      <g>
        <animate attributeName="opacity" values="0.4; 1; 0.4" keyTimes="0; 0.25; 0.5" dur="2.4s" begin="0.4s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0; 1,-1; -1.5,1; 0,0" dur="1.3s" repeatCount="indefinite" />
        <g transform="translate(148, 70)">
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-12; 8; -12" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" />
            <use href="#pelmen" transform="rotate(85)" />
          </g>
        </g>
      </g>

      <g>
        <animate attributeName="opacity" values="0.4; 1; 0.4" keyTimes="0; 0.25; 0.5" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0; -2,-1; 1,1.5; 0,0" dur="1.2s" repeatCount="indefinite" />
        <g transform="translate(148, 130)">
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-8; 12; -8" dur="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" />
            <use href="#pelmen" transform="rotate(145)" />
          </g>
        </g>
      </g>

      <g>
        <animate attributeName="opacity" values="0.4; 1; 0.4" keyTimes="0; 0.25; 0.5" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0; 1,-2; -2,1; 0,0" dur="1.4s" repeatCount="indefinite" />
        <g transform="translate(100, 157)">
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-15; 10; -15" dur="2.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" />
            <use href="#pelmen" transform="rotate(210)" />
          </g>
        </g>
      </g>

      <g>
        <animate attributeName="opacity" values="0.4; 1; 0.4" keyTimes="0; 0.25; 0.5" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0; 1.5,1; -1,-1.5; 0,0" dur="1.0s" repeatCount="indefinite" />
        <g transform="translate(52, 130)">
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-7; 13; -7" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" />
            <use href="#pelmen" transform="rotate(-65)" />
          </g>
        </g>
      </g>

      <g>
        <animate attributeName="opacity" values="0.4; 1; 0.4" keyTimes="0; 0.25; 0.5" dur="2.4s" begin="2.0s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0; -1,1.5; 1.5,-1; 0,0" dur="1.5s" repeatCount="indefinite" />
        <g transform="translate(52, 70)">
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-10; 14; -10" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" />
            <use href="#pelmen" transform="rotate(-15)" />
          </g>
        </g>
      </g>

      <g fill="none" stroke="#ffffff" strokeWidth="1.5">
        <circle cx="100" cy="100" r="0" opacity="0">
          <animate attributeName="r" values="0; 8; 12" dur="1s" begin="0s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8; 0.5; 0" dur="1s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="95" r="0" opacity="0">
          <animate attributeName="r" values="0; 6; 9" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7; 0.4; 0" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="125" cy="110" r="0" opacity="0">
          <animate attributeName="r" values="0; 7; 10" dur="0.9s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9; 0.5; 0" dur="0.9s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="95" cy="130" r="0" opacity="0">
          <animate attributeName="r" values="0; 9; 14" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6; 0.3; 0" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="70" r="0" opacity="0">
          <animate attributeName="r" values="0; 5; 8" dur="1.1s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8; 0.4; 0" dur="1.1s" begin="0.8s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};
