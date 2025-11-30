# Safari Website Planning Document

## 1. Project Overview
- **Goal:** Build a marketing-focused safari website inspired by [Impeccable Safaris](https://impeccablesafaris.com/) showcasing tours, airport transfers, destinations, media gallery, and partner engagement.
- **Deliverables:**
  1. Next.js web app (app router) with responsive Home page.
  2. Booking modal embedding a Google Form.
  3. Partners modal embedding its own Google Form.
  4. Gallery carousel supporting images & video placeholders.
- **Content Sources:** Copy initially based on examples/placeholders mirroring Impeccable Safaris tone. Images will reference/download from the inspiration site where appropriate, then swapped later as needed.

## 2. Tech Stack & Tooling
| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js 14+ (App Router, JavaScript) | Modern file-based routing, Server Components, better SEO. |
| Styling | SCSS (Sass) + CSS variables | Custom styles mirroring inspiration palette. |
| Fonts | Google Fonts (e.g., `Playfair Display` for headings, `Inter` for body) | Matches luxury safari aesthetic similar to inspiration. |
| Carousel | Swiper.js React component | Accessible, touch-friendly gallery. |
| Modal & UI | Custom React modal + SCSS styles | Matches inspiration's overlay look. |
| Forms | Embedded Google Forms via `<iframe>` | Booking + partners. |
| Asset handling | Next.js Image optimization | Local placeholders with ability to swap via `/public`. |
| Deployment target | Vercel-ready | Static + ISR friendly. |

## 3. Brand & Visual Direction
- **Palette (sampled from inspiration site):**
  - Rich gold `#bea26a` (primary accents, buttons)
  - Deep charcoal `#1d1b16` (text/backgrounds)
  - Warm beige `#f5efe0` (section backgrounds)
  - Safari green `#3a4a3a` (secondary accents)
- **Layout references:**
  1. Hero with full-bleed background image, centered CTA buttons ("Plan Your Safari", "Book Transfer").
  2. Section dividers using curved/angled shapes similar to reference site.
  3. Cards with image cover + overlay text for destinations.
  4. Testimonials/mission block with overlay/gradient.
- **Imagery:** Pull curated hero/destination photos from inspiration gallery (Tsavo, Amboseli, etc.). When not available, use royalty-free placeholders and document swap instructions.

## 4. Information Architecture
1. **Navigation**
   - Home
   - Destinations
   - Gallery
   - About / Services
   - Partners
   - Contact CTA button → opens booking modal.
2. **Hero Section**
   - Title, short paragraph, dual CTA.
   - Background hero image (Kenyan safari scene).
3. **Services Section**
   - Tours & Safaris in Kenya (cards describing private/custom/group experiences).
   - Airport Transfers (Executive / Private / Family) with icons.
4. **Destinations Section**
   - Grid/slider cards for:
     - Tsavo
     - Amboseli
     - Maasai Mara
     - Samburu
     - Mount Kenya Castle Lodge
     - Mamba Village
     - Museum of Illusions
   - Each card: image, short blurb, CTA.
5. **Gallery Section**
   - Swiper carousel capable of mixing images & embedded video thumbnails.
6. **Partners Section**
   - Brief intro + logos grid.
   - "Become a Partner" button → partners modal (Google Form embed).
7. **Booking Modal**
   - Styled overlay matching theme.
   - `<iframe>` placeholder referencing booking Google Form URL (to be replaced once provided).
8. **CTA/Footer**
   - Contact info placeholders (phone/email/social), map embed optional.

## 5. Data & Content Model
```js
// src/data/destinations.js
export const destinations = [
  {
    slug: 'tsavo',
    name: 'Tsavo National Park',
    summary: 'Expansive savannahs, red elephants, and dramatic landscapes.',
    image: '/images/destinations/tsavo.jpg'
  },
  // ...remaining entries in same shape
];
```

Data modules (JavaScript only, no .ts/.tsx):
- `services.js` – cards for Tours / Airport Transfers with tiers.
- `gallery.js` – items typed as `{ type: 'image' | 'video', src, title }`.
- `partners.js` – placeholder logos & descriptions.

## 6. Modal Strategy
- **Booking Modal:** Custom React modal triggered from hero CTA + nav button. Contains hero summary, `<iframe src="https://docs.google.com/forms/...">` placeholder, fallback message iframes blocked.
- **Partners Modal:** Similar component with dedicated form. Distinct IDs for accessibility.
- Both modals share base styles + transitions in `/components/ModalShell.jsx`.

## 7. Implementation Plan
1. **Scaffold Next.js app** inside `jet-website/` using `create-next-app` (app router, JavaScript).
2. **Configure theme:** SCSS setup with custom colors, font variables, and CSS variables for gradient overlays.
3. **Create shared components (.jsx):** `Navbar`, `Footer`, `SectionHeading`, `PrimaryButton`, `ModalShell`, `GalleryCarousel`, `DestinationCard`, `ServiceCard`.
4. **Compose Home page** using sections described above.
5. **Hook up data modules** for destinations/services/gallery.
6. **Embed Google Forms** with placeholder URLs + `title` attributes for a11y.
7. **Ensure responsiveness & accessibility** (ARIA roles on modals, alt text on images, keyboard navigation for carousel).
8. **Testing:** run `npm run lint`, `npm run test` (if generated), manual smoke test via `npm run dev`.

## 8. Outstanding Inputs & Next Actions
- Provide actual Google Form URLs for booking & partners (placeholders used until supplied).
- Supply company logo if available; otherwise continue with text-based mark.
- Confirm final copy/photos before launch; doc includes instructions for swapping assets.

## 9. Timeline
1. ✅ Planning (this document).
2. ⏳ Implementation: scaffold project + build UI.
3. 🔜 Review: share deployed preview + repo diff for feedback.

---
This README captures all current requirements and will be updated if scope changes before coding continues.