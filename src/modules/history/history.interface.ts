export type TSalesHistory = {
  productName: string;
  quantity: number;
  buyerName: string;
  seller:string;
  totalPrice: number;
  dateOfSelling: string;
  coupon?: string | null;
  discount?: number;
  finalPrice: number;
};
