import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PelmeniLoader } from 'pelmeni-loader';
const section = {
    padding: '40px 20px',
    textAlign: 'center',
};
const grid = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    alignItems: 'center',
};
const card = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
};
const label = {
    fontSize: '14px',
    color: '#94a3b8',
    fontFamily: 'monospace',
};
const heading = {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '8px',
};
const subtext = {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '24px',
    maxWidth: '500px',
    margin: '0 auto 24px',
    lineHeight: 1.5,
};
export function App() {
    return (_jsxs("div", { children: [_jsxs("section", { style: section, children: [_jsx("h1", { style: heading, children: "\uD83E\uDD5F Pelmeni Loader" }), _jsx("p", { style: subtext, children: "A unique SVG loading animation featuring boiling pelmeni in a pot. Customize size, color, and speed via props." })] }), _jsxs("section", { style: { ...section, background: '#16213e' }, children: [_jsx("h2", { style: heading, children: "Different sizes" }), _jsxs("div", { style: grid, children: [_jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 80 }), _jsx("span", { style: label, children: "size=80" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 120 }), _jsx("span", { style: label, children: "size=120" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 200 }), _jsx("span", { style: label, children: "size=200 (default)" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 280 }), _jsx("span", { style: label, children: "size=280" })] })] })] }), _jsxs("section", { style: section, children: [_jsx("h2", { style: heading, children: "Different colors" }), _jsxs("div", { style: grid, children: [_jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 130, color: "#64748b" }), _jsx("span", { style: label, children: "slate (default)" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 130, color: "#e74c3c" }), _jsx("span", { style: label, children: "red" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 130, color: "#2ecc71" }), _jsx("span", { style: label, children: "green" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 130, color: "#3498db" }), _jsx("span", { style: label, children: "blue" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 130, color: "#f39c12" }), _jsx("span", { style: label, children: "orange" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 130, color: "#9b59b6" }), _jsx("span", { style: label, children: "purple" })] })] })] }), _jsxs("section", { style: { ...section, background: '#16213e' }, children: [_jsx("h2", { style: heading, children: "Different speeds" }), _jsxs("div", { style: grid, children: [_jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 150, speed: 0.5 }), _jsx("span", { style: label, children: "speed=0.5 (slow)" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 150, speed: 1 }), _jsx("span", { style: label, children: "speed=1 (default)" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 150, speed: 2 }), _jsx("span", { style: label, children: "speed=2 (fast)" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 150, speed: 3 }), _jsx("span", { style: label, children: "speed=3 (very fast)" })] })] })] }), _jsxs("section", { style: section, children: [_jsx("h2", { style: heading, children: "Combined" }), _jsxs("div", { style: grid, children: [_jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 180, color: "#e74c3c", speed: 0.7 }), _jsx("span", { style: label, children: "red + slow" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 180, color: "#2ecc71", speed: 2 }), _jsx("span", { style: label, children: "green + fast" })] }), _jsxs("div", { style: card, children: [_jsx(PelmeniLoader, { size: 180, color: "#3498db", speed: 0.3 }), _jsx("span", { style: label, children: "blue + very slow" })] })] })] }), _jsxs("section", { style: { ...section, padding: '20px', color: '#475569', fontSize: '12px' }, children: ["Inspired by", ' ', _jsx("a", { href: "https://github.com/olegTheCoder/pelmeni-loader", style: { color: '#94a3b8' }, children: "pelmeni-loader" })] })] }));
}
