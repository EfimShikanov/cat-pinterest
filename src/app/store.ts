import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import catsReducer from "./slices/catsSlice";
import routingReducer from "./slices/routingSlice";

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    routing: routingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
