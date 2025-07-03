export interface Image {
  id: number;
  url: string;
  formats: {
    thumbnail: { url: string };
    medium: { url: string };
  };
}

export interface Product {
  id: number;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  price: number;
  origin: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  taste: string;
  images: Image[];
  category: {
    id: number;
    categoryName: string;
    slug: string;
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface InfoProducts {
  products: Product[];
  pagination: Pagination;
}
