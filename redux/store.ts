import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./reducers/cartReducers";


const store = configureStore({
    reducer:{
        cart:cartReducers
    }
})


export type AppDispacth = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store