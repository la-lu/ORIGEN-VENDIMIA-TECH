export type Review = {
  id: string;
  author: string;
  country: string;
  rating: number;
  comment: string;
};

export type Wine = {
  id: string;
  slug: string;
  name: string;
  winery: string;
  price: number;
  type: string;
  variety: string;
  description: string;
  tastingNotes: string[];
  imageAccent: string;
  premiumEligible?: boolean;
  reviews: Review[];
};

export type PremiumPack = {
  id: string;
  name: string;
  bottles: number;
  price: number;
  description: string;
  perks: string[];
};

export type DeliveryOption = "hotel" | "airport";

export type DeliveryDetails = {
  mode: DeliveryOption;
  hotelName?: string;
  roomReference?: string;
  airport?: string;
};

export type CartItem = {
  id: string;
  kind: "wine" | "pack";
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  accent: string;
};

export type OrderSummary = {
  orderNumber: string;
  estimatedDate: string;
};
