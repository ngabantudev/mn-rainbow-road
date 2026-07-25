# MN Rainbow Road

A 3D map of queer-owned and queer-friendly businesses across Minneapolis &
Saint Paul, built with **Astro**, **TypeScript**, **Tailwind CSS**, and
**MapLibre GL JS**.

## Stack & why

- **Astro** — ships zero client JS by default; the map itself is the one
  interactive island, loaded via a plain `<script type="module">` in
  `PrideMap.astro` (no React/Vue needed for this scope).
- **MapLibre GL JS** — open-source, no API key required. Uses the free
  [OpenFreeMap](https://openfreemap.org) "Liberty" style, which ships with
  real 3D building extrusions out of the box (`https://tiles.openfreemap.org/styles/liberty`).
- **Tailwind CSS** — the floating glass control panel, chips, and list
  panel are all utility classes; category colors live in
  `tailwind.config.mjs` under `theme.extend.colors.category`.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:4321`. No environment variables or API keys are
required — OpenFreeMap tiles are free and don't need auth. If you'd rather
use MapTiler or Mapbox for nicer building textures/labels, swap the
`MAP_STYLE` constant in `src/components/PrideMap.astro`.

## Project structure

```
src/
  components/PrideMap.astro   # map, controls, filters, list panel, popups
  data/businesses.ts          # typed dataset + GeoJSON helper
  layouts/Layout.astro        # base HTML shell, fonts, global styles
  pages/index.astro           # renders PrideMap
  styles/global.css           # Tailwind layers + MapLibre style overrides
```

## The business layer

`src/data/businesses.ts` was compiled by hand from three public pages:

- Minneapolis.org — LGBTQ Community Businesses
- Visit Saint Paul — LGBTQIA2S+ Businesses We Love
- Minnesota United FC — LGBTQ+ Owned Businesses

None of those pages publish a structured dataset (no JSON/API, and most
entries on the Minneapolis.org page don't include a street address), so
every entry was geocoded by hand against business websites, map listings,
and public directories. Each entry has a `confidence` field:

- `"verified"` — matched to a specific, current street address
- `"approximate"` — placed at neighborhood/landmark level; a few
  businesses (event brands, pop-ups, brands without a single storefront)
  don't have one fixed location to pin precisely

**Before using this for anything beyond a demo, re-verify every entry** —
ownership, hours, and addresses change, and a hand-geocoded dataset like
this one needs a periodic pass. A natural next step is wiring
`toFeatureCollection()` up to a real backend (Airtable, a CMS, Google
Sheets via API, etc.) instead of a static TypeScript array, so the list can
be maintained without a code change.

## Extending it

- **More layers**: duplicate the `businesses` / `CATEGORY_META` pattern in
  `src/data/` for another dataset (e.g. accessible venues, Pride events)
  and add a second toggle next to `#layer-toggle`.
- **Clustering**: at this list size (~25 businesses) DOM markers are fine.
  If the dataset grows past a few hundred, switch to a MapLibre
  GeoJSON source + `symbol`/`circle` layers with
  [`cluster: true`](https://maplibre.org/maplibre-gl-js/docs/examples/cluster/)
  instead of one `maplibregl.Marker` per business.
- **Routing/geolocation**: MapLibre supports a `GeolocateControl` out of
  the box if you want a "businesses near me" affordance.
# mn-rainbow-road
