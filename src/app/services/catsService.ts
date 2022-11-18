import AxiosService from "./axiosService";
import { AxiosGetResponse, Cat } from "../types";

class CatsService {
  async getCats(limit: number): Promise<Cat[] | void> {
    return await AxiosService.get(`/images/search?limit=${limit}`)
      .then((response: AxiosGetResponse): Cat[] => {
        return response.data.map((item) => {
          return { ...item, isLiked: false };
        });
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }
}

export default new CatsService();
