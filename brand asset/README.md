# American Dream Real Estate LLC — Brand Kit

This folder is a complete, drop-in brand kit for **American Dream Real Estate LLC**. It contains everything Claude Code needs to build a coherent, on-brand website: design tokens, fonts, a star+house logo system, a waving-flag hero animation, and a working reference homepage.

---

## What's in here

```
american-dream-brand/
├── CLAUDE.md                    Claude Code's instructions — read first
├── brand-guidelines.md          Full human-readable brand documentation
├── README.md                    This file
├── assets/
│   ├── logo-primary.svg         Stacked: star+house mark + wordmark + tagline
│   ├── logo-horizontal.svg      Mark + wordmark side by side (use in navbar)
│   ├── logo-mark.svg            Icon only — star above gabled house with flag stripes (favicon, social)
│   └── logo-monochrome.svg      Single-color, for dark backgrounds & print
├── styles/
│   ├── brand.css                Design tokens, typography classes, components
│   ├── typography.css           Google Fonts imports
│   └── animations.css           The waving-flag hero animation
└── examples/
    ├── animated-background.html Standalone demo of the waving-flag hero
    └── landing-preview.html     Full reference homepage
```

---

## Quick preview (no setup required)

The two HTML files in `/examples/` are **fully self-contained** — all CSS, all SVGs, all fonts are inlined. Just **double-click them** to open in your browser. They will work no matter where they live on your computer.

> **About the previous "white background" you saw:** That happened because the HTML demo was looking for `../styles/brand.css` and `../styles/animations.css` in folders next to it, and those folders weren't in your Downloads directory. The demos now have all their styles built in, so this won't happen again. The CSS files in `/styles/` and the SVGs in `/assets/` are still there as separate files — those are what your real website project will reference.

`landing-preview.html` is your full visual reference: navbar, waving-flag hero, listings grid, about section, contact form, footer.
`animated-background.html` is a smaller demo focused just on the flag animation.

---

## Using this kit with Claude Code in VS Code

### 1. Drop this whole folder into your project

Inside your website project folder (the one connected to your Cloudflare domain), put this entire `american-dream-brand/` folder at the root. Or, if you prefer, copy its contents into matching folders in your project structure.

### 2. Promote `CLAUDE.md` to the project root

Claude Code automatically reads `CLAUDE.md` from the project root for project-wide instructions. So either:

- **Move** `american-dream-brand/CLAUDE.md` to your project root, OR
- **Copy** its contents into an existing `CLAUDE.md` at your project root

This is the single most important step — `CLAUDE.md` tells Claude Code the brand rules so it doesn't go rogue with fonts, colors, or layouts.

### 3. Open VS Code and start Claude Code

```bash
cd ~/your-website-project
code .
```

Then run Claude Code from the terminal or extension. It will pick up `CLAUDE.md` automatically.

### 4. Try a first prompt

Once Claude Code is running, try something like:

> "Read CLAUDE.md and brand-guidelines.md. Then build me a homepage that matches `examples/landing-preview.html`. Use the waving-flag hero. Output to `index.html`. Use external CSS imports referencing `/styles/brand.css`, `/styles/typography.css`, and `/styles/animations.css`."

Or:

> "Build me an About page using the brand kit. Two-column layout, photo on the left, story on the right. Use the parchment background and our brand fonts. Save to `about.html`."

Claude Code should obey the brand rules in `CLAUDE.md` and produce on-brand output.

---

## Design system at a glance

**Colors**
- Old Glory Red `#B22234` — accents, CTAs, error states only
- Old Glory Navy `#3C3B6E` — primary buttons, headings, the star and house silhouette in the logo, canton in the flag hero
- Pure White `#FFFFFF` — cards, button text, the door and windows knocked out of the logo's house
- Parchment `#F5F1E8` — default page background
- Slate `#4A4A4A` — body copy
- Charcoal `#1A1A1A` — footer, strong emphasis
- Antique Gold `#C9A961` — premium listings, gilt accents (sparingly)

**Fonts** (loaded from Google Fonts)
- **IM Fell English** — display, headings, logo wordmark (Declaration broadside feel)
- **EB Garamond** — body copy
- **Libre Franklin** — UI labels, buttons, navigation

**Logo**
A 5-pointed navy star floats above a navy gabled house silhouette. Three small red flag stripes inside the gable. Clean white door and two flanking windows. Geometric, balanced, and readable from a favicon up to a billboard.

**Animation**
A slowly waving full American flag fills the hero — 13 stripes, canton with 50 stars. CSS-only billow animation on a 14-second cycle. Diagonal shadow ripples drift across to suggest fabric folds in the wind. Respects `prefers-reduced-motion`.

---

## Cloudflare deployment notes

Since your domain lives on Cloudflare, **Cloudflare Pages** is the easiest deploy path:

1. Push your project (with this brand kit included) to a GitHub repo.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo, set the build output directory (usually `/` for vanilla HTML or `dist`/`out` for a framework).
4. Cloudflare will auto-deploy on every push, and you can connect your custom domain in the project settings.

---

## Optimization tips for production

1. **Self-host the fonts.** The `typography.css` file currently imports from Google Fonts. For best performance and privacy, download the woff2 files (from [google-webfonts-helper](https://gwfh.mranftl.com/fonts) or fonts.bunny.net) and replace the imports with `@font-face` rules. Instructions are in `typography.css`.

2. **Inline critical CSS.** For the homepage, inline the contents of `brand.css` and the hero portion of `animations.css` in a `<style>` tag in `<head>`. Cuts first-paint time noticeably.

3. **Minify before deploy.** Cloudflare Pages can do this automatically; or run a build step with esbuild/lightning-css.

4. **Add a favicon.** Use `logo-mark.svg` and convert it to `.ico` and `.png` favicons via [realfavicongenerator.net](https://realfavicongenerator.net).

---

## Brand kit version

v2.1 — Star+house mark + waving-flag hero
American Dream Real Estate LLC
Houston, Texas
