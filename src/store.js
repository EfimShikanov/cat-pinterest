import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./slices/catsSlice";
import routingReducer from "./slices/routingSlice";

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    routing: routingReducer,
  },
});
