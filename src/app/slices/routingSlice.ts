import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Page, RoutingSliceState} from "../types";

const initialState: RoutingSliceState = {
  currentPage: "all",
  buttons: [
    { page: "all", name: "Все котики" },
    { page: "favorite", name: "Любимые котики" },
  ],
};

export const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = routingSlice.actions;

export default routingSlice.reducer;
