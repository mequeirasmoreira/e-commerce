import { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Vestido Floral Primavera",
    brand: "Summer Style",
    rating: { rate: 4.5, count: 123 },
    price: 299.90,
    originalPrice: 399.90,
    tags: ["Exclusivo"],
    isNew: true,
    variants: [
      {
        color: "Rosa",
        colorCode: "#FFB6C1",
        images: ["cards/1-1.webp", "cards/1-2.webp", "cards/1-3.webp"],
        sizes: [
          { size: "P", stock: 5 },
          { size: "M", stock: 3 },
          { size: "G", stock: 8 }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Conjunto Elegante",
    brand: "Chic Collection",
    rating: { rate: 4.8, count: 89 },
    price: 459.90,
    tags: ["Novo"],
    variants: [
      {
        color: "Azul",
        colorCode: "#4169E1",
        images: ["cards/2-1.webp", "cards/2-2.webp", "cards/2-3.webp"],
        sizes: [
          { size: "PP", stock: 2 },
          { size: "P", stock: 4 },
          { size: "M", stock: 0 },
          { size: "G", stock: 6 }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Vestido Noite",
    brand: "Glamour",
    rating: { rate: 4.9, count: 234 },
    price: 599.90,
    originalPrice: 799.90,
    variants: [
      {
        color: "Preto",
        colorCode: "#000000",
        images: ["cards/3-1.webp", "cards/3-2.webp", "cards/3-3.webp"],
        sizes: [
          { size: "P", stock: 1 },
          { size: "M", stock: 2 },
          { size: "G", stock: 0 }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Conjunto Casual",
    brand: "Daily Style",
    rating: { rate: 4.3, count: 67 },
    price: 259.90,
    tags: ["Último item"],
    variants: [
      {
        color: "Verde",
        colorCode: "#228B22",
        images: ["cards/4-1.webp", "cards/4-2.webp", "cards/4-3.webp"],
        sizes: [
          { size: "M", stock: 1 }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Vestido Verão",
    brand: "Summer Vibes",
    rating: { rate: 4.7, count: 156 },
    price: 329.90,
    originalPrice: 429.90,
    isNew: true,
    variants: [
      {
        color: "Amarelo",
        colorCode: "#FFD700",
        images: ["cards/5-1.webp", "cards/5-2.webp", "cards/5-3.webp"],
        sizes: [
          { size: "PP", stock: 3 },
          { size: "P", stock: 5 },
          { size: "M", stock: 4 },
          { size: "G", stock: 2 }
        ]
      }
    ]
  }
];
