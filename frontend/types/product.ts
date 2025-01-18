export type ProductRating = {
  rate: number;
  count: number;
};

export type ProductSize = "PP" | "P" | "M" | "G" | "GG";

export type ProductVariant = {
  color: string;
  colorCode: string;
  images: string[];
  sizes: {
    size: ProductSize;
    stock: number;
  }[];
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  rating: ProductRating;
  price: number;
  originalPrice?: number;
  tags?: string[];
  variants: ProductVariant[];
  isNew?: boolean;
  isFavorite?: boolean;
  inCart?: boolean;
};
