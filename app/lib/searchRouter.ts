/**
 * Pure routing function — converts a raw search query into a destination URL.
 * Returns an empty string if the input is blank (caller should no-op).
 *
 * Priority:
 *   1. Functional page keywords  → direct page route
 *   2. Product category keywords → filtered collection route
 *   3. Fallback                  → /search?query=...
 */
export function resolveSearchRoute(raw: string): string {
  const q = raw.trim().toLowerCase();
  if (!q) return "";

  // ── Rule 1: Functional pages ──────────────────────────────────────────────
  // Each entry: array of trigger keywords → destination route.
  // Keywords are checked via .includes() so partial phrases work too.
  const pageRoutes: { keywords: string[]; route: string }[] = [
    {
      keywords: ["care", "care card", "carecard", "保养", "保养卡"],
      route: "/care-card",
    },
    {
      keywords: ["about", "story", "our story", "关于"],
      route: "/about",
    },
    {
      keywords: ["contact", "location", "address", "appointment", "find us", "联系"],
      route: "/contact",
    },
    {
      keywords: ["bespoke", "custom", "customise", "customize", "定制"],
      route: "/bespoke",
    },
  ];

  for (const { keywords, route } of pageRoutes) {
    if (keywords.some((k) => q.includes(k))) return route;
  }

  // ── Rule 2: Product categories ─────────────────────────────────────────────
  // Exact-match only to avoid false positives (e.g. "earring cleaner" → /care-card above).
  const categoryMap: Record<string, string> = {
    ring:      "Ring",
    rings:     "Ring",
    necklace:  "Necklace",
    necklaces: "Necklace",
    pendant:   "Necklace",
    pendants:  "Necklace",
    earring:   "Earrings",
    earrings:  "Earrings",
    stud:      "Earrings",
    studs:     "Earrings",
    hoop:      "Earrings",
    hoops:     "Earrings",
    bracelet:  "Bracelet",
    bracelets: "Bracelet",
    bangle:    "Bracelet",
    bangles:   "Bracelet",
    cuff:      "Bracelet",
    cuffs:     "Bracelet",
  };

  if (categoryMap[q]) {
    return `/collection?category=${encodeURIComponent(categoryMap[q])}`;
  }

  // ── Rule 3: Fallback — full-text search results page ──────────────────────
  return `/search?query=${encodeURIComponent(raw.trim())}`;
}
