# American Dream Real Estate LLC — Brand Guidelines

> *"Life, Liberty, and the pursuit of home."*

---

## 1. Brand essence

American Dream Real Estate is a Texas-based real estate company that helps people achieve the foundational American promise: ownership, stability, and a place to build a life. The brand expresses this through restrained patriotic design — heritage typography, the flag's three colors used with discipline, and the quiet confidence of a Federal-era broadside.

**Brand voice:** Confident. Plainspoken. A little formal. Never folksy, never corporate, never desperate. Write like the document the company is named after — short declarative sentences, weight in every word.

**Three things this brand is:** Honest. Earned. American.
**Three things this brand is not:** Loud. Trendy. Generic.

---

## 2. Color palette

The palette is a flag-accented neutral system. Parchment and white carry most of the surface area; red and navy do the strategic work.

### Primary

| Name | Hex | Use |
|---|---|---|
| Old Glory Red | `#B22234` | CTAs, error states, accent borders, the red stripes in the flag hero |
| Old Glory Navy | `#3C3B6E` | Primary buttons, headlines on parchment, the canton in the flag hero, the logo mark (star and house) |
| Pure White | `#FFFFFF` | Card backgrounds, button text, the white stripes, the door and windows in the logo |

### Neutral (foundation)

| Name | Hex | Use |
|---|---|---|
| Parchment | `#F5F1E8` | Default page background — soft, aged, never stark |
| Stone | `#A8A29A` | Secondary text, dividers, muted UI |
| Slate | `#4A4A4A` | Body copy on parchment |
| Charcoal | `#1A1A1A` | Headlines on white, footer backgrounds |

### Accent

| Name | Hex | Use |
|---|---|---|
| Antique Gold | `#C9A961` | Premium listings (sparingly), gilt accents on signage |

### Color rules

- **Default page background is parchment, not white.** White is for cards and emphasis surfaces.
- **Body copy is slate (`#4A4A4A`), not pure black.** Pure black on parchment looks harsh; slate has the warmth of letterpress ink.
- **Red is rare.** Use it for one CTA per screen, error messages, and the flag stripes. If everything is red, nothing is.
- **Navy is the workhorse.** Default button color, default heading color on parchment.
- **Never put red text on navy or navy text on red.** They're both the brand — but separately.

---

## 3. Typography

Three fonts, each with one job. Loaded from Google Fonts in `/styles/typography.css`.

### Display — IM Fell English
Used for: H1, H2, hero headlines, logo wordmark, large numbers.

A digital revival of the type cut for John Fell's Oxford specimen books in the 1670s — the same lineage of English type that the Declaration's Dunlap broadside was set in. It has the slight irregularity of hand-cut letterpress: this is a feature, not a bug. It's what makes the brand feel printed, not generated.

```css
font-family: 'IM Fell English', 'IM Fell DW Pica', Georgia, serif;
```

### Body — EB Garamond
Used for: paragraphs, descriptions, long-form copy, property details.

A clean, contemporary Garamond. Reads beautifully at 16–20px.

```css
font-family: 'EB Garamond', Garamond, Georgia, serif;
```

### UI — Libre Franklin
Used for: buttons, navigation, labels, small UI text, form inputs.

A modern American grotesque named for Benjamin Franklin (the printer, not the politician).

```css
font-family: 'Libre Franklin', 'Helvetica Neue', sans-serif;
```

### Type scale

| Token | Size (desktop) | Size (mobile) | Family | Weight |
|---|---|---|---|---|
| `--text-display` | 64px | 40px | IM Fell English | 400 |
| `--text-h1` | 48px | 32px | IM Fell English | 400 |
| `--text-h2` | 36px | 28px | IM Fell English | 400 |
| `--text-h3` | 24px | 20px | EB Garamond | 600 |
| `--text-body` | 18px | 16px | EB Garamond | 400 |
| `--text-small` | 14px | 14px | Libre Franklin | 400 |
| `--text-ui` | 15px | 15px | Libre Franklin | 500 |

### Type rules

- **IM Fell never goes below 24px.** Below that, it loses its character.
- **No all-caps body copy.** All-caps is reserved for labels in Libre Franklin with letter-spacing of `0.08em`.
- **Letter-spacing on display headings: `-0.01em`.** Slightly tightened, never expanded.
- **Line-height on body: `1.65`.** Generous breathing room, like a real book.

---

## 4. Logo system

Four variants. The mark is a 5-pointed navy star floating above a navy gabled house silhouette. Inside the gable's upper portion, three small red stripes echo the flag. The house has a clean white door and two flanking windows. Geometric, balanced, and recognizable as both "home" and "American" without resorting to literal flag waving.

### `logo-primary.svg` — stacked
The full lockup with the star+house mark above the "AMERICAN DREAM / REAL ESTATE LLC" wordmark and tagline. Use for the homepage hero (when not over the flag), the footer, and any moment that deserves the full brand statement.

### `logo-horizontal.svg` — lockup
Mark on the left, wordmark on the right. Use for the site navbar, business cards, email signatures.

### `logo-mark.svg` — icon only
The star+house mark with no text. Use for favicons, social avatars, app icons, and any square aspect ratio.

### `logo-monochrome.svg` — single color
Same composition as primary but in one ink, set up to inherit `currentColor` so the door and windows show through the background. Use on dark backgrounds (the footer), when printing in black-and-white, for embossing, or on the back of a business card.

### Logo rules

- **Minimum size:** Mark — 32px square. Horizontal — 200px wide. Primary — 180px wide.
- **Clear space:** Always leave at least the height of the star around the logo.
- **Don't recolor the full-color versions.** The mark must read navy with red gable stripes and white windows/door. To use it in a single color, use the monochrome version.
- **Don't stretch, skew, rotate, or add effects.** No drop shadows, no glows, no gradients on the logo itself.
- **Don't put the full-color mark on red.** It loses contrast. Use it on parchment, white, sky, or dark navy/charcoal (use the monochrome white version for those).

---

## 5. The waving-flag hero

A slowly waving American flag that fills hero sections — particularly the homepage. Inspired by the brand's spirit and built to evoke the same feeling as a flag in slow motion against a clear sky.

### What it looks like

Thirteen stripes (seven red, six white) cover the hero. The canton — fifty white stars on navy — sits anchored upper-left. The whole flag billows on a slow 14-second cycle, hinged from the left like a flagpole. Diagonal shadow ripples drift across the surface every nine seconds, suggesting fabric folds catching the wind. A subtle vignette darkens the left side and edges so headline text reads cleanly.

### Where it goes

Homepage hero only. Optionally, the contact page hero. Never on a content page or behind body copy.

### How to use it

```html
<section class="ad-flag-hero">
  <div class="ad-flag-hero__flag"></div>
  <div class="ad-flag-hero__canton">
    <svg viewBox="0 0 60 32" preserveAspectRatio="xMidYMid meet">
      <!-- 50 stars in 9 alternating rows -->
    </svg>
  </div>
  <div class="ad-flag-hero__ripple"></div>
  <div class="ad-flag-hero__vignette"></div>
  <div class="ad-flag-hero__content">
    <h1 class="display">Your headline</h1>
  </div>
</section>
```

The full markup including the 50-star canton SVG is in `/examples/animated-background.html` and `/examples/landing-preview.html`. Copy it from there.

### Performance

All animations are CSS-only with `transform` and `background-position` (GPU-accelerated). No JavaScript. No images. Total cost: a few KB of CSS. The animation respects `prefers-reduced-motion` — users who have requested reduced motion will see a static version.

---

## 6. Spacing and layout

A simple 4px-based scale.

| Token | Value | Use |
|---|---|---|
| `--space-1` | 4px | Tight spacing inside compact UI |
| `--space-2` | 8px | Between related items |
| `--space-3` | 16px | Default gap |
| `--space-4` | 24px | Section internal padding |
| `--space-5` | 32px | Between blocks of related content |
| `--space-6` | 48px | Between major sections |
| `--space-7` | 64px | Hero padding, large breathing room |
| `--space-8` | 96px | Page-level top/bottom |

**Container max-width:** 1200px. Always centered. Always with at least `--space-4` of side padding on mobile.

---

## 7. Component patterns

### Property cards
- Background: white
- Top border: 4px solid `--color-flag-navy`
- Address heading: IM Fell English, 24px
- Price: Libre Franklin, 18px, 600 weight, navy
- Description: EB Garamond, 16px, slate
- Border-radius: 4px
- Shadow: `0 2px 8px rgba(60, 59, 110, 0.08)` — soft navy-tinted shadow

### Buttons
**Primary** (`.btn-primary`): Navy background, white text. The dominant CTA.
**Accent** (`.btn-accent`): Red background, white text. The aspirational CTA — "Find a home", "Get started".
**Ghost** (`.btn-ghost`): Transparent on dark, white border. Used when buttons sit over the flag hero.
**Secondary** (`.btn-secondary`): Transparent with navy border, navy text. The "either/or" alternative.

All buttons: 14px vertical padding, 28px horizontal, Libre Franklin 500 weight, 0.04em letter-spacing, 4px border radius. 150ms color transitions on hover.

### Forms
- Input borders: 1px solid `--color-stone`
- Focus ring: 2px solid navy, no shadow
- Labels above inputs, never inside (no floating label tricks)
- Error state: 1px solid red, with red helper text below in Libre Franklin 14px

---

## 8. Imagery direction

If you use photography on the site:

- **Yes:** Houses with character (porches, brick, columns), American landscapes, soft natural light, golden hour, families who look real not stock-y, interiors with warm wood and natural materials.
- **No:** Generic agent-with-a-clipboard stock photos, stark glass-and-steel modernism, anything with stock-photo lighting, overly processed HDR.

If you don't have photography yet, lean on the typography and the flag hero. A page with great type and no images is better than a page with bad images.

---

## 9. Voice & copy patterns

### Headlines
Short. Confident. Often built on parallel structure or quiet allusion.

✓ "A house is the start. A home is the goal."
✓ "We list the property. We deliver the address."
✓ "Independence begins on the front porch."
✗ "Welcome to American Dream Real Estate where we help you find your dream home today!" (too long, too many adjectives)

### Body copy
Plain English. Short sentences. Periods earn their keep.

✓ "We list properties across the greater Houston area. We work with first-time buyers, investors, and families ready for the next chapter. Tell us what you're looking for."
✗ "Here at American Dream Real Estate LLC, our dedicated team of seasoned professionals leverages cutting-edge technology and unparalleled local expertise to navigate today's dynamic real estate market." (corporate sludge)

### CTAs
Verbs. Never more than three words.

✓ "Find a home"
✓ "List your property"
✓ "Talk to us"
✗ "Click here to learn more about our services"

---

## 10. Don't list

- Don't replace the star+house mark with stock real estate clipart
- Don't use the word "premier" or "luxury" — show, don't claim
- Don't use generic real estate clip art
- Don't add a third color to the palette
- Don't introduce a fourth font, even for a one-off
- Don't make the flag hero faster or louder
- Don't put the logo in a colored circle/badge — it's not a sticker

---

*Brand kit version 2.1 — star+house mark + waving-flag hero. Drop into Claude Code and build.*
