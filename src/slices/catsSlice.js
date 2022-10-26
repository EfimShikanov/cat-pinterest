import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCats: (state, action) => {
      state.data.push(...action.payload);
    },
    setIsCardHovered: (state, action) => {
      state.cats.map((cat) => {
        if (cat.id === action.payload) {
          cat.isHovered = !cat.isHovered;
        }
      });
    },
    setIsLikeHovered: (state, action) => {
      state.cats.map((cat) => {
        if (cat.id === action.payload) {
          cat.isHovered = !cat.isHovered;
        }
      });
    },
    setIsLiked: (state, action) => {
      state.cats.map((cat) => {
        if (cat.id === action.payload) {
          cat.isLiked = !cat.isLiked;
        }
      });
    },
  },
});

export const {
  setCats,
  setIsCardHovered,
  setIsLikeHovered,
  setIsLiked
} = catsSlice.actions;

export default catsSlice.reducer;
