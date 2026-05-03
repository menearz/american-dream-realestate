# American Dream Real Estate LLC — Brand & Build Instructions

This file tells Claude Code how to build the website. Read this before generating any pages, components, or styles.

## Brand identity at a glance

**Company:** American Dream Real Estate LLC
**Tone:** Modern patriotic luxury. Refined, not loud. Think a curated Federal-style townhouse — historic bones, contemporary execution.
**Audience:** Homebuyers, sellers, and investors who respond to American heritage and craftsmanship as quality signals.

## Build rules (non-negotiable)

1. **Always import `/styles/brand.css` first** in every page. Other stylesheets override it; nothing else defines the design tokens.
2. **Use CSS variables for every color, font, and spacing value.** Never hardcode `#B22234` — always `var(--color-flag-red)`. This is how the brand stays consistent if it gets retuned later.
3. **Typography is strict.** Display headings use `var(--font-display)` (IM Fell English). Body copy uses `var(--font-body)` (EB Garamond). UI labels and buttons use `var(--font-ui)` (Libre Franklin). Do not introduce other fonts.
4. **Red and navy are accents, not foundations.** Backgrounds should be parchment (`--color-parchment`) or white. Use red and navy for emphasis, CTAs, and the animated flag hero only.
5. **The waving-flag hero is opt-in.** Include it on the homepage hero only, not every page. Use the `ad-flag-hero` class structure from `/styles/animations.css`.
6. **All text feels printed, not handwritten.** No script fonts. No cursive. The Declaration broadside aesthetic is achieved through IM Fell English (a digital revival of 1670s John Fell type) — readable, characterful, and historically grounded.
7. **Logos live in `/assets/`.** Use the SVG versions, never raster. Pick the variant that fits the context (see `brand-guidelines.md`).

## File structure of this brand kit

```
/american-dream-brand/
├── CLAUDE.md                    ← you are here
├── brand-guidelines.md          ← full brand documentation
├── README.md                    ← setup instructions
├── /assets/
│   ├── logo-primary.svg         ← stacked: star+house mark + wordmark + tagline
│   ├── logo-horizontal.svg      ← horizontal lockup (default for navbar)
│   ├── logo-mark.svg            ← icon only — star above house with flag stripes (favicons, social avatars)
│   └── logo-monochrome.svg      ← single-color (stamps, embossing, dark bg)
├── /styles/
│   ├── brand.css                ← design tokens (import first, always)
│   ├── typography.css           ← font imports + heading scale
│   └── animations.css           ← waving-flag hero animation
└── /examples/
    ├── animated-background.html ← standalone waving-flag hero demo
    └── landing-preview.html     ← reference homepage built with the kit
```

The two HTML files in `/examples/` are intentionally **self-contained** — all CSS and SVGs are inlined so they work even if you double-click them from your Downloads folder. Your real website should use the external CSS files in `/styles/` and external logos in `/assets/`.

## The logo mark

The mark is a 5-pointed navy star floating above a navy gabled house silhouette. Three small red flag stripes sit inside the upper portion of the gable. The house has a white door and two flanking windows, knocked out from the navy fill. Clean, geometric, immediately readable as both "house" and "American" without literal flag iconography.

Use it as the brand's visual anchor. On the website:
- **Navbar:** `/assets/logo-horizontal.svg` (mark on the left, wordmark on the right)
- **Footer:** `/assets/logo-monochrome.svg` (white version on the dark footer)
- **Favicon, social avatar:** `/assets/logo-mark.svg` (star + house, no text)
- **Hero or major brand moments:** `/assets/logo-primary.svg` (stacked, full)

## When generating new pages

- Start from `/examples/landing-preview.html` as the structural reference
- Use semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- Mobile-first responsive: design for 375px, scale up
- Accessible: WCAG AA contrast minimum, semantic landmarks, focus states visible
- The site is hosted via Cloudflare — favor static HTML/CSS or framework output that deploys cleanly to Cloudflare Pages

## Using the waving-flag hero

The hero is a slowly waving American flag that fills the section. To add it:

```html
<section class="ad-flag-hero">
  <div class="ad-flag-hero__flag"></div>
  <div class="ad-flag-hero__canton">
    <!-- 50-star SVG goes here — see examples/animated-background.html -->
    <svg viewBox="0 0 60 32" preserveAspectRatio="xMidYMid meet">
      ...
    </svg>
  </div>
  <div class="ad-flag-hero__ripple"></div>
  <div class="ad-flag-hero__vignette"></div>
  <div class="ad-flag-hero__content">
    <h1 class="display">Your headline</h1>
    <p class="lede">Your subhead</p>
  </div>
</section>
```

Make sure `/styles/animations.css` is loaded. The animation respects `prefers-reduced-motion` automatically.

## When generating components

- **Buttons:** use `.btn-primary` (navy fill) for the dominant CTA, `.btn-accent` (red fill) for the most aspirational CTA, `.btn-ghost` (transparent on dark) when sitting over the flag hero
- **Property cards:** parchment background, navy border-top accent (4px), display font for address, body for description
- **Forms:** minimal, generous whitespace, navy focus rings — never red (red is reserved for errors and the flag)

## Things to NEVER do

- Don't replace the star+house mark with stock real estate clipart. The custom SVG is the brand.
- Don't combine red and navy in the same text element (use one or the other).
- Don't use emoji in body copy or headings. Save them for incidental UI if at all.
- Don't introduce purple, teal, orange, or any color outside the documented palette.
- Don't auto-translate the Declaration script feel into actual cursive — the user explicitly wants PRINT.
- Don't put body content on top of the flag hero — only headline + subhead + CTAs.

## Stack assumptions

- Domain: registered via Cloudflare
- Recommended deployment: Cloudflare Pages
- Frontend: vanilla HTML/CSS/JS is fine, or a static framework (Astro, 11ty, Next.js static export)
- No backend needed for v1 — contact form can use Cloudflare Workers or a simple Formspree/Netlify Forms integration

## Quick start for Claude Code

When asked to build a page:

1. Read `brand-guidelines.md` for any nuance not in this file
2. Open `/examples/landing-preview.html` to see the target visual style
3. Import `/styles/brand.css`, `/styles/typography.css`, and `/styles/animations.css` (if hero needed)
4. Use logos from `/assets/` — `logo-horizontal.svg` for navbar, `logo-monochrome.svg` for the dark footer
5. Write copy in a confident, slightly formal voice — short sentences, period at the end, no marketing fluff
