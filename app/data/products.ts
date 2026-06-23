export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sterling Silver Moon Necklace",
    price: 299,
    image: "/images/products/jewelry_1.jpg",
    category: "Necklace",
    description: "Hand-formed crescent in solid S925 silver, oxidised for depth.",
  },
  {
    id: 2,
    name: "Artisan Hammered Cuff",
    price: 159,
    image: "/images/products/jewelry_2.jpg",
    category: "Bracelet",
    description: "Open-bangle silhouette, hand-textured with a raw hammered finish.",
  },
  {
    id: 3,
    name: "Minimalist Silver Studs",
    price: 89,
    image: "/images/products/jewelry_3.jpg",
    category: "Earrings",
    description: "Flat disc studs, polished to a mirror finish. Lightweight, everyday.",
  },
  {
    id: 4,
    name: "Vintage Filigree Ring",
    price: 120,
    image: "/images/products/jewelry_4.jpg",
    category: "Ring",
    description: "Lace-like wire-work band, inspired by Victorian jewellery craft.",
  },
  {
    id: 5,
    name: "Bohemian Drop Earrings",
    price: 145,
    image: "/images/products/jewelry_5.jpg",
    category: "Earrings",
    description: "Long-drop dangles with a brushed matte finish, movement-forward design.",
  },
  {
    id: 6,
    name: "Modernist Bar Necklace",
    price: 210,
    image: "/images/products/jewelry_6.jpg",
    category: "Necklace",
    description: "Sculptural horizontal bar on a delicate 18\" trace chain.",
  },
  {
    id: 7,
    name: "Interlocking Circle Bracelet",
    price: 175,
    image: "/images/products/jewelry_7.jpg",
    category: "Bracelet",
    description: "Linked oval rings in polished S925 — fluid, continuous motion.",
  },
  {
    id: 8,
    name: "Petite Heart Silver Ring",
    price: 95,
    image: "/images/products/jewelry_8.jpg",
    category: "Ring",
    description: "Delicate stacking band with a hand-carved heart motif at centre.",
  },
  {
    id: 9,
    name: "Celestial Star Pendant",
    price: 320,
    image: "/images/products/jewelry_9.jpg",
    category: "Necklace",
    description: "Eight-point star, hand-cut and set on a fine box chain.",
  },
  {
    id: 10,
    name: "Geometric Hexagon Hoops",
    price: 130,
    image: "/images/products/jewelry_10.jpg",
    category: "Earrings",
    description: "Angular hoop earrings with flat faceted edges, polished finish.",
  },
  {
    id: 11,
    name: "S925 Braided Silver Band",
    price: 110,
    image: "/images/products/jewelry_11.jpg",
    category: "Ring",
    description: "Three strands of fine silver wire woven into a tactile everyday band.",
  },
  {
    id: 12,
    name: "Infinity Symbol Bracelet",
    price: 165,
    image: "/images/products/jewelry_12.jpg",
    category: "Bracelet",
    description: "Continuous figure-eight motif on an adjustable trace chain.",
  },
  {
    id: 13,
    name: "Ocean Wave Silver Charm",
    price: 240,
    image: "/images/products/jewelry_13.jpg",
    category: "Necklace",
    description: "Fluid wave form carved freehand, hung on a 16\" cable chain.",
  },
  {
    id: 14,
    name: "Floral Engraved Locket",
    price: 350,
    image: "/images/products/jewelry_14.jpg",
    category: "Necklace",
    description: "Oval locket with hand-engraved botanical detail. Holds two photos.",
  },
  {
    id: 15,
    name: "Leaf Motif Silver Bangle",
    price: 190,
    image: "/images/products/jewelry_15.jpg",
    category: "Bracelet",
    description: "Rigid bangle with an embossed leaf border — nature-inspired, minimal.",
  },
];

export const CATEGORIES = [
  "All",
  "Necklace",
  "Bracelet",
  "Earrings",
  "Ring",
] as const;
