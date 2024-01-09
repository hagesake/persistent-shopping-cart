import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { InCartProduct } from "@/components/Products/InCartProductCard";
import { Product } from "@/components/Products/ProductList";

type ProductsInCartState = {
  products: InCartProduct[];
};

const initialState: ProductsInCartState = {
  products: [],
};

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      if (state.products.some((p) => p.id === product.id)) {
        const index = state.products.findIndex((p) => p.id === product.id);
        state.products[index].quantitty += 1;
      } else {
        state.products.push({
          ...product,
          quantitty: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export const { addToCart, removeFromCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
