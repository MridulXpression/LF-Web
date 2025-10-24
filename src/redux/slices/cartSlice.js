import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // store products + variant info
    totalItems: 0, // count of unique variant items
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, variantId } = action.payload;

      // check if this exact variant already exists
      const alreadyInCart = state.items.some(
        (item) => item.variantId === variantId
      );

      if (!alreadyInCart) {
        // store product + variant together
        state.items.push({ ...product, variantId });
        state.totalItems = state.items.length;
      }
    },

    removeFromCart: (state, action) => {
      const variantId = action.payload;
      state.items = state.items.filter((item) => item.variantId !== variantId);
      state.totalItems = state.items.length;
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
      state.totalItems = action.payload.length;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
