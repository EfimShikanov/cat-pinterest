import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cat, CatsSliceState } from "../types";

if (!localStorage.favoriteCats) {
  localStorage.setItem("favoriteCats", JSON.stringify([]));
}

let favoriteCatsList = JSON.parse(localStorage.favoriteCats);

const initialState: CatsSliceState = {
  catsList: [],
  favoriteCatsList,
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<Cat[]>) => {
      state.catsList.push(...action.payload);
    },
    addToFavorite: (state, action: PayloadAction<string>) => {
      let cat = state.catsList.find((cat) => cat.id === action.payload);
      if (cat) {
        cat.isLiked = true;
        state.favoriteCatsList.push(cat);
        localStorage.favoriteCats = JSON.stringify(state.favoriteCatsList);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      let cat = state.favoriteCatsList.find((cat) => cat.id === action.payload);
      if (cat) {
        const catIndex = state.favoriteCatsList.indexOf(cat);
        state.favoriteCatsList.splice(catIndex, 1);
        localStorage.favoriteCats = JSON.parse(
          localStorage.favoriteCats
        ).splice(catIndex, 1);
      }
    },
  },
});

export const { setCats, addToFavorite, removeFromFavorite } = catsSlice.actions;

export default catsSlice.reducer;
