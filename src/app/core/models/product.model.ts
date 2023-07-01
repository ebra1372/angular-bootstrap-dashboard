interface Rate {
  rate: number,
  count: number
}

export interface Product {
  id?: number;
  title?: string | null;
  price?: number | null;
  description?: string | null;
  category?: string | null;
  image?: string | null;
  rating?: Rate | null
}