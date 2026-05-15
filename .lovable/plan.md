## Goal

Build a personal brand website for a single real estate agent ("Warm & Local" direction) using filler/placeholder content the agent will replace later. The site must include brokerage compliance furniture: brokerage logo lockup, license number line, Equal Housing Opportunity logo + Fair Housing disclaimer, and "deemed reliable but not guaranteed" language — all in a persistent footer present on every page.

## Design system

Port the chosen direction's tokens into `src/styles.css` (oklch equivalents):
- background `#fdfaf6`, foreground `#2d241e`, primary `#c1663e` (warm terracotta), muted `#6b5c53`, soft border
- Fonts: Fraunces (display serif) + Outfit (body sans), loaded via Google Fonts in `__root.tsx` head
- Pill buttons, rounded-3xl cards, subtle fade-up on hero, sticky translucent nav

## Routes (TanStack Start, separate files)

```
src/routes/
  __root.tsx          → fonts + shared <Header/> + <ComplianceFooter/> + <Outlet/>
  index.tsx           → /         Home (hero, featured listings, neighborhoods teaser, blog teaser, contact CTA)
  about.tsx           → /about
  listings.tsx        → /listings (grid of cards + status filter chips, client-side)
  neighborhoods.tsx   → /neighborhoods
  testimonials.tsx    → /testimonials
  blog.tsx            → /blog (post grid)
  resources.tsx       → /resources (buyer/seller guide cards)
  contact.tsx         → /contact (form + agent info)
```

Each route gets its own `head()` with route-specific title, description, og:title, og:description, og:url, and canonical (leaf-only).

## Components

```
src/components/
  layout/Header.tsx              sticky nav with brokerage chip
  layout/ComplianceFooter.tsx    brokerage lockup, license, EHO logo + Fair Housing text, MLS/REALTOR mark, disclaimer
  site/PropertyCard.tsx          price, address, beds/baths/sqft, status badge
  site/NeighborhoodTile.tsx
  site/TestimonialCard.tsx
  site/BlogCard.tsx
  site/ContactForm.tsx           non-functional submit (toast confirmation only)
  site/EhoLogo.tsx               inline SVG of Equal Housing Opportunity mark
```

All copy, names, listings, testimonials, and blog posts use clearly-placeholder filler ("Julianne Woods", "Oak & Stone Realty", license `#0000000`) so the agent can find-and-replace later. A small `src/content/site.ts` file centralizes agent name, brokerage, license, address, phone, email, and disclaimer text so updates happen in one spot.

## Compliance footer (every page)

- Brokerage logo lockup + brokerage name
- "Agent Name is a licensed real estate agent affiliated with [Brokerage]. License #XXXXXXX."
- "All information deemed reliable but not guaranteed. Buyers should independently verify."
- "Equal Housing Opportunity. [Brokerage] supports the principles of the Fair Housing Act."
- EHO logo (inline SVG) + REALTOR® mark placeholder
- Copyright line

## Images

Use the prototype's `data-lov-image-placeholder` prompts to generate hero portrait, 3 featured-listing photos, 4 neighborhood tiles, 2 blog thumbnails (≈9 images, warm/natural style). Saved to `src/assets/`, imported as ES6.

## Out of scope (this pass)

- Real MLS/IDX feed integration (cards are static)
- Live contact form submission (Lovable Cloud / email) — stub only; can wire later
- Auth, CMS, blog detail pages (cards link to `#` placeholders)

## Technical notes

- TanStack Router file-based routes; replace placeholder `index.tsx`
- All colors via semantic tokens in `styles.css` (no hex in components)
- Replace root `head()` title/description with site defaults; per-route head overrides

After the user approves I'll generate images and build all routes in one pass.