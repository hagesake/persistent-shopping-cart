import { configureStore } from "@reduxjs/toolkit";

import shoppingCartProductsReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    products: shoppingCartProductsReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
