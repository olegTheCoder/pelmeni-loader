# Pelmeni Loader

A collection of unique React SVG loading animations featuring russian dumplings.

[![Storybook](https://img.shields.io/badge/Storybook-Playground-ff4785?logo=storybook)](https://olegthecoder.github.io/pelmeni-loader)

```bash
npm install @olegthecoder/pelmeni-loader
```

---

## PelmeniLoader

Boiling pelmeni in a pot with steam and bubbles.

<img src="https://raw.githubusercontent.com/olegTheCoder/pelmeni-loader/main/docs/pelmeni-loader.gif" alt="Pelmeni Loader" style="max-width: 300px;">

```tsx
import { PelmeniLoader } from '@olegthecoder/pelmeni-loader';

<PelmeniLoader />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `200` | Width and height in pixels |
| `color` | `string` | `'#64748b'` | Pot color |
| `speed` | `number` | `1` | Animation speed multiplier |
| `dimStrength` | `number` | `0.28` | Pelmeni darkening (0=none, 1=full) |

### Options

```tsx
// Size
<PelmeniLoader size={80} />
<PelmeniLoader size={300} />

// Color
<PelmeniLoader color="#e74c3c" />
<PelmeniLoader color="#3498db" />
<PelmeniLoader color="#2ecc71" />

// Speed
<PelmeniLoader speed={0.5} />
<PelmeniLoader speed={2} />
<PelmeniLoader speed={3} />

// Dimming
<PelmeniLoader dimStrength={0} />
<PelmeniLoader dimStrength={0.6} />

// Combined
<PelmeniLoader size={150} color="#e74c3c" speed={0.7} />
```

---

## PelmeniForkLoader

A pelmeni bounces across a plate while a fork stabs at it.

<img src="https://raw.githubusercontent.com/olegTheCoder/pelmeni-loader/main/docs/pelmeni-fork-loader.gif" alt="Pelmeni Fork Loader" style="max-width: 300px;">

```tsx
import { PelmeniForkLoader } from '@olegthecoder/pelmeni-loader';

<PelmeniForkLoader />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `200` | Width and height in pixels |
| `accent` | `string` | `'#1e3799'` | Accent color for rings and elements |
| `forkColor` | `string` | derived from accent | Fork color |
| `plateColor` | `string` | `'#fefefe'` | Plate surface color |
| `pelmeniColor` | `string` | `'#d1d5db'` | Pelmeni dough color |
| `backgroundColor` | `string` | `'#efebe7'` | Tabletop color |
| `speed` | `number` | `1` | Animation speed multiplier |

### Options

```tsx
// Size
<PelmeniForkLoader size={100} />
<PelmeniForkLoader size={400} />

// Accent color
<PelmeniForkLoader accent="#e74c3c" />
<PelmeniForkLoader accent="#2ecc71" />

// Custom fork
<PelmeniForkLoader accent="#2d6a4f" forkColor="#1b4332" />

// Full color schemes
<PelmeniForkLoader
  accent="#c44569"
  plateColor="#fff5e6"
  pelmeniColor="#f5cba7"
  backgroundColor="#fdf2e9"
/>

<PelmeniForkLoader
  accent="#bb86fc"
  plateColor="#2d2d2d"
  pelmeniColor="#4a4a4a"
  backgroundColor="#1a1a1a"
/>

// Speed
<PelmeniForkLoader speed={0.5} />
<PelmeniForkLoader speed={2} />

// Combined
<PelmeniForkLoader size={180} accent="#e74c3c" speed={0.7} />
```

---

## Local Demo

```bash
git clone https://github.com/olegTheCoder/pelmeni-loader.git
cd pelmeni-loader
npm install
cd example
npm install
npm run dev
```

## Inspiration

<img src="https://raw.githubusercontent.com/olegTheCoder/pelmeni-loader/main/docs/pelmen_inspiration.gif" width="320" alt="Inspiration" />

## License

MIT
