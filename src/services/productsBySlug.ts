import api from "@/lib/axios";
import { InfoProducts } from "@/types/Products";

export const infoProductsBySlug = async (
  slug: string | string[]
): Promise<InfoProducts> => {
  try {
    const response = await api.get(
      `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`
    );
    return {
      products: response.data.data,
      pagination: response.data.meta.pagination,
    };
  } catch (error) {
    throw error;
  }
};
