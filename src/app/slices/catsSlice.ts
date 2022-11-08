import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cat, CatsSliceState } from "../types";

let favoriteCatsList = localStorage.favoriteCats
  ? localStorage.favoriteCats
  : [];

const initialState: CatsSliceState = {
  catsList: [],
  favoriteCatsList,
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<Cat[]>) => {
      console.log(action.payload);
    },
    addFavoriteCat: (state, action: PayloadAction<Cat>) => {

    },
  },
});

export const { setCats } = catsSlice.actions;

export default catsSlice.reducer;
