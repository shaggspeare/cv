# Slava Stetsenko — CV site

A single-page CV site built with Next.js 16 (App Router), React 19 and TypeScript.

## Run it

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (the page is prerendered as static content)
npm start
```

Deploys to Vercel as-is: import the folder as a project, no settings needed.

## Where things are

```
src/app/layout.tsx        html shell, metadata, Google Fonts, the pre-paint motion flag
src/app/page.tsx          page wrapper; composes the sections in order
src/app/globals.css       base styles and the whole motion layer (everything under `.js`)
src/components/           one component per section:
  Nav, Hero, Stats, WebProjects, Apps, AiEnablement, IosToolkit, Path, Contact
src/components/Motion.tsx client component: reveals, counters, nav indicator, tilt, magnetic buttons
public/assets/            portrait, app icons, project screenshots, stack icons
```

## How the motion works

- `layout.tsx` runs a tiny inline script that adds `class="js"` to `<html>` before first
  paint, unless the visitor prefers reduced motion. All animation CSS is scoped under `.js`,
  so without it the page is fully visible and static.
- Reveal targets carry `data-r` (`up` or `pop`) and a `--d` delay in their inline style.
  Headlines are pre-split into `.w > .wi` spans for the word-mask reveal. To animate a new
  element, add `data-r="up"` and optionally `style={{ '--d': '120ms' }}`.
- `Motion.tsx` adds the `in` class as elements scroll into view and handles the rest.

## Editing content

Copy lives directly in the section components as JSX. Styles are inline, matching the design
canvas they came from. Stack icons are from Simple Icons (CC0), recoloured white.

## Notes

- Fonts load from Google Fonts with a `<link>` in `layout.tsx`. Switching to `next/font/google`
  is a drop-in improvement if you want them self-hosted.
- Images use plain `<img>` to keep the layout identical to the design. `next/image` would add
  resizing and lazy loading.
- The Blaze Studio card has no year, and AWS uses a generic cloud outline as its icon.
