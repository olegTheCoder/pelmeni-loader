import React from 'react';
import { PelmeniLoader } from 'pelmeni-loader';

const section: React.CSSProperties = {
  padding: '40px 20px',
  textAlign: 'center' as const,
};

const grid: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap' as const,
  alignItems: 'center',
};

const card: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
};

const label: React.CSSProperties = {
  fontSize: '14px',
  color: '#94a3b8',
  fontFamily: 'monospace',
};

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '8px',
};

const subtext: React.CSSProperties = {
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '24px',
  maxWidth: '500px',
  margin: '0 auto 24px',
  lineHeight: 1.5,
};

export function App() {
  return (
    <div>
      <section style={section}>
        <h1 style={heading}>🥟 Pelmeni Loader</h1>
        <p style={subtext}>
          A unique SVG loading animation featuring boiling pelmeni in a pot.
          Customize size, color, and speed via props.
        </p>
      </section>

      <section style={{ ...section, background: '#16213e' }}>
        <h2 style={heading}>Different sizes</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniLoader size={80} />
            <span style={label}>size=80</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={120} />
            <span style={label}>size=120</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={200} />
            <span style={label}>size=200 (default)</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={280} />
            <span style={label}>size=280</span>
          </div>
        </div>
      </section>

      <section style={section}>
        <h2 style={heading}>Different colors</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniLoader size={130} color="#64748b" />
            <span style={label}>slate (default)</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={130} color="#e74c3c" />
            <span style={label}>red</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={130} color="#2ecc71" />
            <span style={label}>green</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={130} color="#3498db" />
            <span style={label}>blue</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={130} color="#f39c12" />
            <span style={label}>orange</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={130} color="#9b59b6" />
            <span style={label}>purple</span>
          </div>
        </div>
      </section>

      <section style={{ ...section, background: '#16213e' }}>
        <h2 style={heading}>Different speeds</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniLoader size={150} speed={0.5} />
            <span style={label}>speed=0.5 (slow)</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={150} speed={1} />
            <span style={label}>speed=1 (default)</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={150} speed={2} />
            <span style={label}>speed=2 (fast)</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={150} speed={3} />
            <span style={label}>speed=3 (very fast)</span>
          </div>
        </div>
      </section>

      <section style={section}>
        <h2 style={heading}>Combined</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniLoader size={180} color="#e74c3c" speed={0.7} />
            <span style={label}>red + slow</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={180} color="#2ecc71" speed={2} />
            <span style={label}>green + fast</span>
          </div>
          <div style={card}>
            <PelmeniLoader size={180} color="#3498db" speed={0.3} />
            <span style={label}>blue + very slow</span>
          </div>
        </div>
      </section>

      <section style={{ ...section, padding: '20px', color: '#475569', fontSize: '12px' }}>
        Inspired by{' '}
        <a href="https://github.com/olegTheCoder/pelmeni-loader" style={{ color: '#94a3b8' }}>
          pelmeni-loader
        </a>
      </section>
    </div>
  );
}
