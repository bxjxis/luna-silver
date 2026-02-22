export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  { id: 1,  name: "Sterling Silver Moon Necklace",   price: 299, image: "/images/products/jewelry_1.jpg",  category: "Necklace"  },
  { id: 2,  name: "Artisan Hammered Cuff",            price: 159, image: "/images/products/jewelry_2.jpg",  category: "Bracelet"  },
  { id: 3,  name: "Minimalist Silver Studs",          price: 89,  image: "/images/products/jewelry_3.jpg",  category: "Earrings"  },
  { id: 4,  name: "Vintage Filigree Ring",            price: 120, image: "/images/products/jewelry_4.jpg",  category: "Ring"      },
  { id: 5,  name: "Bohemian Drop Earrings",           price: 145, image: "/images/products/jewelry_5.jpg",  category: "Earrings"  },
  { id: 6,  name: "Modernist Bar Necklace",           price: 210, image: "/images/products/jewelry_6.jpg",  category: "Necklace"  },
  { id: 7,  name: "Interlocking Circle Bracelet",     price: 175, image: "/images/products/jewelry_7.jpg",  category: "Bracelet"  },
  { id: 8,  name: "Petite Heart Silver Ring",         price: 95,  image: "/images/products/jewelry_8.jpg",  category: "Ring"      },
  { id: 9,  name: "Celestial Star Pendant",           price: 320, image: "/images/products/jewelry_9.jpg",  category: "Necklace"  },
  { id: 10, name: "Geometric Hexagon Hoops",          price: 130, image: "/images/products/jewelry_10.jpg", category: "Earrings"  },
  { id: 11, name: "S925 Braided Silver Band",         price: 110, image: "/images/products/jewelry_11.jpg", category: "Ring"      },
  { id: 12, name: "Infinity Symbol Bracelet",         price: 165, image: "/images/products/jewelry_12.jpg", category: "Bracelet"  },
  { id: 13, name: "Ocean Wave Silver Charm",          price: 240, image: "/images/products/jewelry_13.jpg", category: "Necklace"  },
  { id: 14, name: "Floral Engraved Locket",           price: 350, image: "/images/products/jewelry_14.jpg", category: "Necklace"  },
  { id: 15, name: "Leaf Motif Silver Bangle",         price: 190, image: "/images/products/jewelry_15.jpg", category: "Bracelet"  },
];

export const CATEGORIES = ['All', 'Necklace', 'Bracelet', 'Earrings', 'Ring'] as const;
