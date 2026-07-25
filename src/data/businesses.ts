// ---------------------------------------------------------------------------
// MN Rainbow Road — queer-friendly / queer-owned business dataset
//
// Compiled from three public source pages:
//   - minneapolis  → https://www.minneapolis.org/lgbtq-community/businesses/
//   - saintpaul    → https://www.visitsaintpaul.com/blog/lgbtqia-businesses-we-love-in-saint-paul/
//   - mnufc        → https://www.mnufc.com/community/lgbtq-owned-businesses
//
// Descriptions below are original one-line summaries, not copied text from
// the source pages. Coordinates were geocoded against public listings
// (business websites, Yelp, Apple/Google Maps, Wikipedia) where possible.
//
// `confidence` tells you how much to trust the pin placement:
//   "verified"    — matched to a specific street address from a live listing
//   "approximate" — placed at neighborhood/landmark level; confirm before
//                   using this for anything precision-critical (routing,
//                   accessibility info, etc.)
//
// Before shipping to production, re-verify every entry — hours, ownership,
// and addresses change, and a few entries here (event brands, pop-ups)
// don't have a single fixed storefront.
// ---------------------------------------------------------------------------

export type Category =
  | 'nightlife'
  | 'food'
  | 'shopping'
  | 'wellness'
  | 'lodging'
  | 'community';

export type SourceKey = 'minneapolis' | 'saintpaul' | 'mnufc';

export interface Business {
  id: string;
  name: string;
  category: Category;
  city: 'Minneapolis' | 'Saint Paul' | 'Bloomington';
  neighborhood: string;
  address: string;
  lat: number;
  lng: number;
  blurb: string;
  website?: string;
  confidence: 'verified' | 'approximate';
  sources: { key: SourceKey; url: string }[];
}

export const SOURCES: Record<SourceKey, { label: string; url: string }> = {
  minneapolis: {
    label: 'Minneapolis.org',
    url: 'https://www.minneapolis.org/lgbtq-community/businesses/',
  },
  saintpaul: {
    label: 'Visit Saint Paul',
    url: 'https://www.visitsaintpaul.com/blog/lgbtqia-businesses-we-love-in-saint-paul/',
  },
  mnufc: {
    label: 'Minnesota United FC',
    url: 'https://www.mnufc.com/community/lgbtq-owned-businesses',
  },
};

export const CATEGORY_META: Record<
  Category,
  { label: string; color: string }
> = {
  nightlife: { label: 'Nightlife & Entertainment', color: '#ff4d8d' },
  food: { label: 'Food & Drink', color: '#ff9142' },
  shopping: { label: 'Shopping', color: '#ffd23f' },
  wellness: { label: 'Wellness & Services', color: '#39d98a' },
  lodging: { label: 'Places to Stay', color: '#3fb6ff' },
  community: { label: 'Community & Resources', color: '#a463f2' },
};

export const businesses: Business[] = [
  {
    id: 'first-avenue',
    name: 'First Avenue & 7th St Entry',
    category: 'nightlife',
    city: 'Minneapolis',
    neighborhood: 'Downtown West',
    address: '701 1st Ave N, Minneapolis, MN 55403',
    lat: 44.9793,
    lng: -93.2766,
    blurb:
      'Legendary independent music venue and nightclub, owned by Dayna Frank, a vocal supporter of Pride and marriage equality.',
    website: 'https://first-avenue.com',
    confidence: 'verified',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'theater-latte-da',
    name: 'Theater Latté Da',
    category: 'nightlife',
    city: 'Minneapolis',
    neighborhood: 'Northeast',
    address: '345 13th Ave NE, Minneapolis, MN 55413',
    lat: 45.0005,
    lng: -93.2531,
    blurb:
      'The only nonprofit theater in the Twin Cities focused exclusively on musical theater, staging queer stories inside the historic Ritz Theater.',
    website: 'https://latteda.org',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'the-saloon',
    name: 'The Saloon',
    category: 'nightlife',
    city: 'Minneapolis',
    neighborhood: 'Downtown West',
    address: '830 Hennepin Ave, Minneapolis, MN 55403',
    lat: 44.9758,
    lng: -93.2735,
    blurb:
      'A downtown LGBTQ nightlife anchor since 1977, with dance parties, drag shows, karaoke, and an annual Pride block party.',
    website: 'https://saloonmn.com',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'gay-90s',
    name: "The Gay 90's",
    category: 'nightlife',
    city: 'Minneapolis',
    neighborhood: 'Downtown West',
    address: '408 Hennepin Ave, Minneapolis, MN 55401',
    lat: 44.9780,
    lng: -93.2712,
    blurb:
      'Iconic multi-room gay nightclub on Hennepin Ave with drag shows, karaoke, and an all-ages Sunday drag brunch.',
    website: 'https://gay90s.com',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'eagle-mpls',
    name: 'EAGLE|MPLS',
    category: 'nightlife',
    city: 'Minneapolis',
    neighborhood: 'East Town',
    address: '515 Washington Ave S, Minneapolis, MN 55415',
    lat: 44.9742,
    lng: -93.2627,
    blurb:
      'Neighborhood gay bar near US Bank Stadium with a dog-friendly patio, bar food, karaoke, and trivia nights.',
    website: 'https://www.eaglempls.com',
    confidence: 'verified',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'mpls-trolley-tours',
    name: 'Minneapolis Trolley Tours',
    category: 'nightlife',
    city: 'Minneapolis',
    neighborhood: 'Downtown',
    address: 'Departs downtown Minneapolis',
    lat: 44.9778,
    lng: -93.2650,
    blurb:
      'Year-round guided trolley tours of Minneapolis landmarks, history, and hidden gems.',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'tandem-vintage',
    name: 'Tandem Vintage',
    category: 'shopping',
    city: 'Minneapolis',
    neighborhood: 'Kingfield',
    address: 'Near 38th & Nicollet, Minneapolis, MN 55409',
    lat: 44.9349,
    lng: -93.2807,
    blurb:
      'Queer-owned vintage shop curating fashion from the 1950s–1990s, run by founder Amanda Baumann.',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'martinpatrick3',
    name: 'MartinPatrick3',
    category: 'shopping',
    city: 'Minneapolis',
    neighborhood: 'North Loop',
    address: '212 3rd Ave N, Minneapolis, MN 55401',
    lat: 44.9847,
    lng: -93.2731,
    blurb:
      'North Loop boutique blending apothecary, tailoring, fine jewelry, home goods, and a barbershop under one roof.',
    website: 'https://martinpatrick3.com',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'the-future',
    name: 'The Future',
    category: 'shopping',
    city: 'Minneapolis',
    neighborhood: 'Whittier',
    address: 'Eat Street area, Minneapolis, MN',
    lat: 44.9556,
    lng: -93.2827,
    blurb:
      'Owner Lacey Prpić Hedtke\u2019s shop of crystals, gender-neutral makeup, apparel, and occult books, and site of an artist residency program.',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'smitten-kitten',
    name: 'Smitten Kitten',
    category: 'shopping',
    city: 'Minneapolis',
    neighborhood: 'Uptown',
    address: '3010 Lyndale Ave S, Minneapolis, MN 55408',
    lat: 44.9500,
    lng: -93.2884,
    blurb:
      'Sex-positive, inclusive shop on Lyndale Ave offering body-friendly, ethically produced toys and supplies.',
    website: 'https://www.smittenkittenonline.com',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'black-garnet-books',
    name: 'Black Garnet Books',
    category: 'shopping',
    city: 'Saint Paul',
    neighborhood: 'Midway',
    address: '1319 University Ave W, Saint Paul, MN 55104',
    lat: 44.95612,
    lng: -93.15524,
    blurb:
      'Black-, queer-, and woman-owned bookstore stocking adult and YA literature by Black and BIPOC authors, founded by Dionne Sims.',
    website: 'https://www.blackgarnetbooks.com',
    confidence: 'verified',
    sources: [
      { key: 'minneapolis', url: SOURCES.minneapolis.url },
      { key: 'mnufc', url: SOURCES.mnufc.url },
    ],
  },
  {
    id: 'tangletown-gardens',
    name: 'Tangletown Gardens',
    category: 'shopping',
    city: 'Minneapolis',
    neighborhood: 'Tangletown',
    address: 'Chicago Ave & Diamond Lake Rd, Minneapolis, MN 55419',
    lat: 44.9106,
    lng: -93.2626,
    blurb:
      "Scott Endres's plant nursery and boutique, paired across the street with Wise Acre Eatery for farm-to-table meals.",
    website: 'https://tangletowngardens.com',
    confidence: 'approximate',
    sources: [
      { key: 'minneapolis', url: SOURCES.minneapolis.url },
      { key: 'mnufc', url: SOURCES.mnufc.url },
    ],
  },
  {
    id: 'mona-williams',
    name: 'Mona Williams',
    category: 'shopping',
    city: 'Bloomington',
    neighborhood: 'Mall of America',
    address: 'Mall of America, Bloomington, MN 55425',
    lat: 44.8548,
    lng: -93.2422,
    blurb:
      'Eco-friendly laundry and household goods store from Patric Richardson, TV\u2019s "The Laundry Guy."',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'combine',
    name: 'Combine',
    category: 'shopping',
    city: 'Minneapolis',
    neighborhood: 'Uptown',
    address: 'Uptown, Minneapolis, MN',
    lat: 44.9489,
    lng: -93.2967,
    blurb:
      "Michael Pickart's Uptown boutique for upscale apparel and home goods, from hand-knit sweaters to locally crafted ceramics.",
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'dancing-bear-chocolate',
    name: 'Dancing Bear Chocolate',
    category: 'food',
    city: 'Minneapolis',
    neighborhood: 'Victory',
    address: 'Victory neighborhood, Minneapolis, MN',
    lat: 45.0206,
    lng: -93.3034,
    blurb:
      'Artisan chocolatier from Steven Howard and husband Joe Skifter, set in a former dentist office, known for hand-dipped truffles and gelato.',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'silver-fern',
    name: 'Silver Fern',
    category: 'food',
    city: 'Minneapolis',
    neighborhood: 'Northeast',
    address: 'Northeast Minneapolis, MN',
    lat: 45.0025,
    lng: -93.2494,
    blurb:
      'Coffee shop by day, wine bar by night, with scratch-made food inspired by Australian and New Zealand café culture.',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'urban-growler',
    name: 'Urban Growler Brewing Company',
    category: 'food',
    city: 'Saint Paul',
    neighborhood: 'St. Anthony Park',
    address: '2325 Endicott St, Saint Paul, MN 55114',
    lat: 44.9548,
    lng: -93.1847,
    blurb:
      "Minnesota's first woman-owned microbrewery, founded by Deb Loch and Jill Pavlak, with a farmer-focused, inclusive taproom.",
    website: 'https://urbangrowlerbrewing.com',
    confidence: 'approximate',
    sources: [
      { key: 'minneapolis', url: SOURCES.minneapolis.url },
      { key: 'saintpaul', url: SOURCES.saintpaul.url },
      { key: 'mnufc', url: SOURCES.mnufc.url },
    ],
  },
  {
    id: 'cuppa-java',
    name: 'Cuppa Java',
    category: 'food',
    city: 'Minneapolis',
    neighborhood: 'Bryn Mawr',
    address: 'Bryn Mawr, Minneapolis, MN 55405',
    lat: 44.9722,
    lng: -93.3080,
    blurb:
      "Robert Gillem's neighborhood coffee shop with sandwiches, beer and wine, and enough coffee options to linger for hours.",
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'nicollet-diner',
    name: 'Nicollet Diner',
    category: 'food',
    city: 'Minneapolis',
    neighborhood: 'Eat Street',
    address: 'Nicollet Ave, Minneapolis, MN',
    lat: 44.9556,
    lng: -93.2795,
    blurb:
      'Classic 24-hour diner from Sam and Dion Turner serving hash browns, hot turkey sandwiches, and hand-spun malts.',
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'a-bar-of-their-own',
    name: "A Bar of Their Own",
    category: 'nightlife',
    city: 'Minneapolis',
    neighborhood: 'Northeast',
    address: 'Northeast Minneapolis, MN',
    lat: 45.0037,
    lng: -93.2578,
    blurb:
      "A bar dedicated to broadcasting women's sports, all the time, with a menu built around a range of dietary needs.",
    confidence: 'approximate',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: '300-clifton',
    name: '300 Clifton',
    category: 'lodging',
    city: 'Minneapolis',
    neighborhood: 'Loring Park',
    address: '300 Clifton Ave, Minneapolis, MN 55403',
    lat: 44.9645,
    lng: -93.2857,
    blurb:
      'Bed and breakfast in a historic Loring Park mansion, with a breakfast voucher redeemable at Nicollet Diner.',
    confidence: 'verified',
    sources: [{ key: 'minneapolis', url: SOURCES.minneapolis.url }],
  },
  {
    id: 'black-hart',
    name: 'The Black Hart of Saint Paul',
    category: 'nightlife',
    city: 'Saint Paul',
    neighborhood: 'Midway',
    address: '1415 University Ave W, Saint Paul, MN 55104',
    lat: 44.9560,
    lng: -93.1600,
    blurb:
      "Queer soccer bar near Allianz Field carrying on the legacy of the old Town House Bar, with drag, burlesque, and bingo nights.",
    website: 'https://www.blackhartstp.com',
    confidence: 'verified',
    sources: [
      { key: 'saintpaul', url: SOURCES.saintpaul.url },
      { key: 'mnufc', url: SOURCES.mnufc.url },
    ],
  },
  {
    id: 'hail-mary',
    name: 'Hail Mary Body Piercing + Tattoo',
    category: 'wellness',
    city: 'Saint Paul',
    neighborhood: 'West 7th',
    address: 'West 7th neighborhood, Saint Paul, MN',
    lat: 44.9345,
    lng: -93.1235,
    blurb:
      'Queer-owned piercing and tattoo studio in the historic West 7th neighborhood, focused on body positivity and client comfort.',
    confidence: 'approximate',
    sources: [{ key: 'saintpaul', url: SOURCES.saintpaul.url }],
  },
  {
    id: 'joans-in-the-park',
    name: "Joan's in the Park",
    category: 'food',
    city: 'Saint Paul',
    neighborhood: 'Mac-Groveland',
    address: 'Mac-Groveland, Saint Paul, MN',
    lat: 44.9350,
    lng: -93.1780,
    blurb:
      'Cozy neighborhood restaurant and wine bar serving seasonal North American fare in an upscale-yet-welcoming space.',
    confidence: 'approximate',
    sources: [{ key: 'saintpaul', url: SOURCES.saintpaul.url }],
  },
  {
    id: '620-club',
    name: '620 Club',
    category: 'food',
    city: 'Saint Paul',
    neighborhood: 'West 7th',
    address: '620 7th St W, Saint Paul, MN 55102',
    lat: 44.93456,
    lng: -93.11621,
    blurb:
      'Family-owned West 7th neighborhood bar known for Coney dogs, drink specials, and a pool table.',
    confidence: 'verified',
    sources: [{ key: 'mnufc', url: SOURCES.mnufc.url }],
  },
  {
    id: 'solcana-fitness',
    name: 'Solcana Fitness',
    category: 'wellness',
    city: 'Minneapolis',
    neighborhood: 'Uptown',
    address: 'Uptown, Minneapolis, MN',
    lat: 44.9489,
    lng: -93.2967,
    blurb:
      'Inclusive strength and cycling studio highlighted by Minnesota United as an LGBTQ+-supported local business.',
    website: 'https://solcanafitness.com',
    confidence: 'approximate',
    sources: [{ key: 'mnufc', url: SOURCES.mnufc.url }],
  },
  {
    id: 'threshold-healing',
    name: 'Threshold Healing',
    category: 'wellness',
    city: 'Minneapolis',
    neighborhood: 'Minneapolis',
    address: 'Minneapolis, MN',
    lat: 44.9695,
    lng: -93.2500,
    blurb:
      'Bodywork and healing arts practice highlighted by Minnesota United as an LGBTQ+-supported local business.',
    website: 'https://thresholdhealing.org',
    confidence: 'approximate',
    sources: [{ key: 'mnufc', url: SOURCES.mnufc.url }],
  },
];

export function toFeatureCollection(list: Business[] = businesses) {
  return {
    type: 'FeatureCollection' as const,
    features: list.map((b) => ({
      type: 'Feature' as const,
      id: b.id,
      geometry: {
        type: 'Point' as const,
        coordinates: [b.lng, b.lat],
      },
      properties: {
        id: b.id,
        name: b.name,
        category: b.category,
        city: b.city,
        neighborhood: b.neighborhood,
        address: b.address,
        blurb: b.blurb,
        website: b.website ?? '',
        confidence: b.confidence,
        color: CATEGORY_META[b.category].color,
      },
    })),
  };
}
