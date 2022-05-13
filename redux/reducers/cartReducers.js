import { createSlice, current } from "@reduxjs/toolkit";
import { AddToCart } from "../../utils/cartItemUtils";

const initialState = {
  hidden: false,
  cartItems: [],
};

// export const cartItemReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       state.cartItems = AddToCart(state.cartItems, action.payload);
//   }
// };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    AddCartItems: (state, { payload }) => {
      cartItems = AddToCart(state.cartItems, payload);
    },
  },
});

export const { AddCartItems } = cartSlice.actions;
export default cartSlice.reducer;
