import { createSlice, current } from "@reduxjs/toolkit";
import { AddToCart } from "../../utils/cartItemUtils";


interface IcartItem{
  hidden:Boolean,
  cartItems:Array<any>
}
const initialState:IcartItem = {
  cartItems:[],
  hidden:true
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCartItems: (state, { payload }) => {      
      state.cartItems = AddToCart(state.cartItems, payload);
    },
    ToggleCartItems:(state)=>{
      state.hidden = !state.hidden
    }
  },
});

export const { AddCartItems, ToggleCartItems } = cartSlice.actions;
export default cartSlice.reducer;
