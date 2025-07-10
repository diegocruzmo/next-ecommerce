import api from "@/lib/axios";
import { InfoGeneral } from "@/types/General";
export const infoGeneral = async (): Promise<InfoGeneral> => {
  try {
    const response = await api.get(
      "/api/content-type-builder/content-types/api::product.product"
    );
    return {
      data: response.data.data,
    };
  } catch (error) {
    throw error;
  }
};
