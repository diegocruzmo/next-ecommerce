import api from "@/lib/axios";
import { InfoCategories } from "@/types/Categories";

export const infoCategories = async (): Promise<InfoCategories> => {
  try {
    const response = await api.get("/api/categories?populate=*");
    return {
      categories: response.data.data,
      pagination: response.data.meta.pagination,
    };
  } catch (error) {
    throw error;
  }
};
