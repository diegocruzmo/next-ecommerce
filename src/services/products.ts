import api from "@/lib/axios";
import { InfoProducts } from "@/types/Products";

export const infoProducts = async (): Promise<InfoProducts> => {
  try {
    const response = await api.get(
      "/api/products?filters[isFeatured][$eq]=true&populate=*"
    );
    return {
      products: response.data.data,
      pagination: response.data.meta.pagination,
    };
  } catch (error) {
    throw error;
  }
};
