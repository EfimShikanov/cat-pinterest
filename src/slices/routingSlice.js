import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "all",
  buttons: [
    {name: "Все котики", page: "all"},
    {name: "Любимые котики", page: "favourite"},
  ]
};

export const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = routingSlice.actions;

export default routingSlice.reducer;
