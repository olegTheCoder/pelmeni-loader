import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { mkdirSync, rmSync, existsSync, writeFileSync } from 'fs';

const frames = 24;
const dur = 4.5;
const dir = '/tmp/pelmeni-fork-frames';
const html = `
<!DOCTYPE html>
<html><body style="margin:0;background:#1a1a1a;display:flex;align-items:center;justify-content:center;height:100vh">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="300" height="300">
  <defs>
    <style>
      @keyframes pf-b { 0%{transform:translate(250px,250px)rotate(0deg);animation-timing-function:linear} 10%{transform:translate(175px,155px)rotate(45deg);animation-timing-function:linear} 23%{transform:translate(325px,175px)rotate(110deg);animation-timing-function:linear} 38%{transform:translate(315px,335px)rotate(190deg);animation-timing-function:linear} 55%{transform:translate(155px,305px)rotate(270deg);animation-timing-function:linear} 80%{transform:translate(250px,250px)rotate(360deg);animation-timing-function:ease-out} 100%{transform:translate(250px,250px)rotate(360deg)} }
      @keyframes pf-s { 0%,3%{transform:translate(250px,260px)scale(0.9)} 15%,90%{transform:translate(250px,190px)scale(1.15);animation-timing-function:ease-in} 100%{transform:translate(250px,260px)scale(0.9)} }
    </style>
    <filter id="ps"><feDropShadow dx="4" dy="12" stdDeviation="10" flood-opacity="0.15"/></filter>
    <filter id="fs"><feDropShadow dx="0" dy="25" stdDeviation="8" flood-opacity="0.25"/></filter>
    <radialGradient id="pi" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffffff"/><stop offset="85%" stop-color="#fefefe"/><stop offset="100%" stop-color="#e9ecef"/></radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#efebe7"/>
  <circle cx="250" cy="250" r="190" fill="#fefefe" filter="url(#ps)"/>
  <circle cx="250" cy="250" r="172" fill="none" stroke="#1e3799" stroke-width="8"/>
  <circle cx="250" cy="250" r="162" fill="none" stroke="#d4a373" stroke-width="3"/>
  <circle cx="250" cy="250" r="185" fill="none" stroke="#e0e0e0" stroke-width="2"/>
  <circle cx="250" cy="250" r="140" fill="url(#pi)" stroke="#dcdde1" stroke-width="2"/>
  <g id="pelm" style="animation:pf-b ${dur}s infinite;transform-origin:0 0">
    <ellipse cx="0" cy="12" rx="26" ry="18" fill="#d4c5a9" opacity="0.3"/>
    <path d="M-8-22C20-25 36-5 30 15 20 32-15 32-26 18-36 5-30-18-8-22Z" fill="#d1d5db"/>
    <g fill="none" stroke="#4b5563" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M-6-23C-30-22-38 2-22 19"/>
      <path d="M-14-22C-28-5-24 14 2 16 22 16 30 2 28-8 26-20 10-18 10-18"/>
      <path d="M-6-23C18-27 36-10 36 5 36 12 32 18 24 22"/>
      <path d="M-22 19C-10 32 12 32 24 22"/>
      <path d="M-8-2Q0 10 1 10 5 10 12-5"/>
    </g>
  </g>
  <g id="fork" filter="url(#fs)" style="animation:pf-s ${dur}s infinite">
    <path d="M-6-140A6 6 0 0 1 6-140L6-50C6-35 14-33 14-20L14-3A2.5 2.5 0 0 1 9-3L9-18A1.5 1.5 0 0 0 6-18L6-3A2.5 2.5 0 0 1 1-3L1-18A1.5 1.5 0 0 0-2-18L-2-3A2.5 2.5 0 0 1-7-3L-7-18A1.5 1.5 0 0 0-10-18L-10-3A2.5 2.5 0 0 1-15-3L-15-20C-15-33-6-35-6-50Z" fill="#485460" stroke="#485460" stroke-width="1"/>
  </g>
</svg>
</body></html>`;

writeFileSync('/tmp/pelmeni-fork.html', html);
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 500, height: 500 } });
await page.goto('file:///tmp/pelmeni-fork.html');

await page.evaluate(() => {
  const pelm = document.getElementById('pelm');
  const fork = document.getElementById('fork');
  pelm.style.animationPlayState = 'paused';
  fork.style.animationPlayState = 'paused';
  window.__pelm = pelm;
  window.__fork = fork;
});

for (let i = 0; i < frames; i++) {
  const delay = -((i / frames) * dur);
  await page.evaluate((d) => {
    window.__pelm.style.animationDelay = `${d}s`;
    window.__fork.style.animationDelay = `${d}s`;
  }, delay);
  await new Promise(r => setTimeout(r, 50));
  await page.screenshot({ path: `${dir}/frame${String(i).padStart(3, '0')}.png` });
}

await browser.close();

execSync(`ffmpeg -y -framerate 10 -i ${dir}/frame%03d.png -filter_complex "[0:v]split[s0][s1];[s0]palettegen=stats_mode=single[p];[s1][p]paletteuse=new=1" -loop 0 docs/pelmeni-fork-loader.gif`, { stdio: 'inherit' });
rmSync(dir, { recursive: true, force: true });
console.log('GIF created: docs/pelmeni-fork-loader.gif');
