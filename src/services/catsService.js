import AxiosService from "./axiosService";

export default class CatsService extends AxiosService {
  constructor() {
    super();
  }

  getCats = (limit, dispatch, setCats) => {
    return this.get(`/images/search?limit=${limit}`)
      .then((response) => {
        response.data.map((item) => {
          return {
            ...item,
            isLiked: false,
            isHovered: false,
          };
        });
        dispatch(setCats(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
