# Pelmeni Loader

A collection of unique React SVG loading animations featuring russian dumplings. Customize size, color, and speed.

[![Storybook](https://img.shields.io/badge/Storybook-Playground-ff4785?logo=storybook)](https://olegthecoder.github.io/pelmeni-loader)

## PelmeniLoader — boiling pelmeni in a pot

<img src="https://raw.githubusercontent.com/olegTheCoder/pelmeni-loader/main/docs/pelmeni-loader.gif" alt="Pelmeni Loader animation" style="max-width: 300px; width: 100%; height: auto; display: block; margin: 0 auto;">

### Install

```bash
npm install @olegthecoder/pelmeni-loader
```

### Usage

```tsx
import { PelmeniLoader } from '@olegthecoder/pelmeni-loader';

function App() {
  return <PelmeniLoader />;
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `200` | Width and height in pixels |
| `color` | `string` | `'#64748b'` | Pot color (any hex color) |
| `speed` | `number` | `1` | Animation speed multiplier |
| `dimStrength` | `number` | `0.28` | How much pelmeni darken (0=no dim, 0.28=default, 1=fully dark) |

### Examples

```tsx
<PelmeniLoader size={150} color="#e74c3c" speed={0.7} />
```

---

## PelmeniForkLoader — pelmeni on a plate with a fork

<img src="https://raw.githubusercontent.com/olegTheCoder/pelmeni-loader/main/docs/pelmeni-fork-loader.gif" alt="Pelmeni Fork Loader animation" style="max-width: 300px; width: 100%; height: auto; display: block; margin: 0 auto;">

A pelmeni bounces across a plate while a fork elegantly stabs at it. Perfect for dining-related loading states.

### Usage

```tsx
import { PelmeniForkLoader } from '@olegthecoder/pelmeni-loader';

function App() {
  return <PelmeniForkLoader />;
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `200` | Width and height in pixels |
| `accent` | `string` | `'#1e3799'` | Accent color for decorative rings |
| `forkColor` | `string` | derived from accent | Fork color |
| `plateColor` | `string` | `'#fefefe'` | Plate surface color |
| `pelmeniColor` | `string` | `'#d1d5db'` | Pelmeni dough fill color |
| `backgroundColor` | `string` | `'#efebe7'` | Background (tabletop) color |
| `speed` | `number` | `1` | Animation speed multiplier |

### Examples

```tsx
<PelmeniForkLoader accent="#e74c3c" plateColor="#fff5e6" />
<PelmeniForkLoader accent="#2d6a4f" forkColor="#1b4332" />
<PelmeniForkLoader size={150} speed={0.7} />
```

---

## Run Demo Locally

```bash
git clone https://github.com/olegTheCoder/pelmeni-loader.git
cd pelmeni-loader
npm install
cd example
npm install
npm run dev
```

## Inspiration

<img src="https://raw.githubusercontent.com/olegTheCoder/pelmeni-loader/main/docs/pelmen_inspiration.gif" width="320" alt="Inspiration - boiling pelmeni" />

## License

MIT
