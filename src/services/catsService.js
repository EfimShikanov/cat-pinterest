import AxiosService from "./axiosService";

export default class CatsService extends AxiosService {
  constructor() {
    super();
  }

  getCats = (limit, setCats) => {
    return this.get(`/images/search?limit=${limit}`)
      .then((response) => {
        return response.data.map((item) => {
          return {
            ...item,
            isLiked: false,
            isHovered: false,
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
