import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./productSlice"
import cartSlice from "./cartSlice"
export const store = configureStore({
    reducer: {
        productSlice: productSlice,
        cartSlice: cartSlice
    }
})