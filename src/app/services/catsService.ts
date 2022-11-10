import AxiosService from "./axiosService";
import { AppDispatch } from "../store";
import { AxiosGetResponse, Cat } from "../types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

class CatsService {
  getCats = async (
    limit: number,
    dispatch: AppDispatch,
    setCats: ActionCreatorWithPayload<Cat[], "cats/setCats">
  ) => {
    AxiosService.get(`/images/search?limit=${limit}`)
      .then((response: AxiosGetResponse) => {
        let cats: Cat[] = response.data.map((item) => {
          return { ...item, isLiked: false };
        });
        dispatch(setCats(cats));
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  };
}

export default new CatsService();
