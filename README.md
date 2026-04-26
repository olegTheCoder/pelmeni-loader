# 🥟 Pelmeni Loader

A unique React SVG loading animation featuring boiling pelmeni in a pot. Customize size, color, and speed.

[![Storybook](https://img.shields.io/badge/Storybook-Playground-ff4785?logo=storybook)](https://olegthecoder.github.io/pelmeni-loader)

<img src="https://raw.githubusercontent.com/olegTheCoder/pelmeni-loader/main/docs/pelmeni-loader.gif" alt="Pelmeni Loader animation" style="max-width: 300px; width: 100%; height: auto; display: block; margin: 0 auto;">

## Install

```bash
npm install @olegthecoder/pelmeni-loader
```

## Usage

```tsx
import { PelmeniLoader } from '@olegthecoder/pelmeni-loader';

function App() {
  return <PelmeniLoader />;
}
```

## Props

| Prop    | Type     | Default      | Description                |
|---------|----------|--------------|----------------------------|
| `size`  | `number` | `200`        | Width and height in pixels |
| `color` | `string` | `'#64748b'`  | Pot color (any hex color)  |
| `speed` | `number` | `1`          | Animation speed multiplier |

## Examples

### Different sizes

```tsx
<PelmeniLoader size={80} />
<PelmeniLoader size={200} />
<PelmeniLoader size={300} />
```

### Different colors

```tsx
<PelmeniLoader color="#e74c3c" />   {/* red pot */}
<PelmeniLoader color="#2ecc71" />   {/* green pot */}
<PelmeniLoader color="#3498db" />   {/* blue pot */}
```

### Different speeds

```tsx
<PelmeniLoader speed={0.5} />  {/* half speed */}
<PelmeniLoader speed={1} />    {/* normal speed */}
<PelmeniLoader speed={2} />    {/* double speed */}
<PelmeniLoader speed={3} />    {/* triple speed */}
```

### Combined

```tsx
<PelmeniLoader size={150} color="#e74c3c" speed={0.7} />
```

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
