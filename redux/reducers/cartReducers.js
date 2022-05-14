import { createSlice, current } from "@reduxjs/toolkit";
import { AddToCart } from "../../utils/cartItemUtils";

const initialState = {
  hidden: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    AddCartItems: (state, { payload }) => {
      state.cartItems = AddToCart(state.cartItems, payload);
    },
  },
});

export const { AddCartItems } = cartSlice.actions;
export default cartSlice.reducer;
