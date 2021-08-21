import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import apiSlice from "./api";

const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
