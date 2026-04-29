import React from 'react';
import { PelmeniLoader, PelmeniForkLoader } from '@olegthecoder/pelmeni-loader';

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
          A collection of React SVG loading animations featuring russian dumplings.
          Customize size, color, and speed via props.
        </p>
      </section>

      <section style={{ ...section, background: '#16213e' }}>
        <h2 style={heading}>PelmeniLoader — sizes</h2>
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

      <section style={{ ...section, background: '#16213e' }}>
        <h2 style={heading}>PelmeniForkLoader — sizes</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniForkLoader size={100} />
            <span style={label}>size=100</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={180} />
            <span style={label}>size=180 (default)</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={260} />
            <span style={label}>size=260</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={340} />
            <span style={label}>size=340</span>
          </div>
        </div>
      </section>

      <section style={section}>
        <h2 style={heading}>PelmeniForkLoader — accent colors</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniForkLoader size={140} accent="#1e3799" />
            <span style={label}>blue (default)</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={140} accent="#e74c3c" />
            <span style={label}>red</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={140} accent="#2ecc71" />
            <span style={label}>green</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={140} accent="#f39c12" />
            <span style={label}>orange</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={140} accent="#9b59b6" />
            <span style={label}>purple</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={140} accent="#c44569" />
            <span style={label}>pink</span>
          </div>
        </div>
      </section>

      <section style={{ ...section, background: '#16213e' }}>
        <h2 style={heading}>PelmeniForkLoader — color schemes</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniForkLoader size={150} accent="#e74c3c" plateColor="#fff5e6" pelmeniColor="#f5cba7" backgroundColor="#fdf2e9" />
            <span style={label}>warm</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={150} accent="#bb86fc" plateColor="#2d2d2d" pelmeniColor="#4a4a4a" backgroundColor="#1a1a1a" />
            <span style={label}>dark</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={150} accent="#2d6a4f" plateColor="#f0f7f4" pelmeniColor="#b7b7a4" backgroundColor="#e9ece9" />
            <span style={label}>nature</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={150} accent="#0a4c7f" plateColor="#e8f4f8" pelmeniColor="#a8d0e6" backgroundColor="#d4e6f1" />
            <span style={label}>ocean</span>
          </div>
        </div>
      </section>

      <section style={section}>
        <h2 style={heading}>PelmeniForkLoader — speeds</h2>
        <div style={grid}>
          <div style={card}>
            <PelmeniForkLoader size={160} speed={0.5} />
            <span style={label}>speed=0.5</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={160} speed={1} />
            <span style={label}>speed=1 (default)</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={160} speed={2} />
            <span style={label}>speed=2</span>
          </div>
          <div style={card}>
            <PelmeniForkLoader size={160} speed={3} />
            <span style={label}>speed=3</span>
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
