export type TProduct = {
  brand: string;
  category: string;
  img: string;
  material: string;
  occasion: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  theme: string;
};

export type TQuery = {
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  category?: string;
  material?: string;
  occasion?: string;
  theme?: string;
};

export type TFilter = {
  productPrice?: {
    $gte?: number;
    $lte?: number;
  };
  brand?: string;
  category?: string;
  material?: string;
  occasion?: string;
  theme?: string;
};
