
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1, addedToCart: true });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    resetCart: (state) => {
      state.items = [];
    },
    markAsAdded: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.addedToCart = true;
      }
    },
  },
});

export const { addToCart, removeFromCart, resetCart, markAsAdded } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectSubtotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price.amount, 0);

export const selectTotal = (state) => selectSubtotal(state) + 8;
export default cartSlice.reducer;
