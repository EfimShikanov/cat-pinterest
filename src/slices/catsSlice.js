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
    setIsLiked: (state, action) => {
      state.data.map((cat) => {
        if (cat.id === action.payload) {
          cat.isLiked = !cat.isLiked;
        }
      });
    },
  },
});

export const {
  setCats,
  setIsLiked
} = catsSlice.actions;

export default catsSlice.reducer;
