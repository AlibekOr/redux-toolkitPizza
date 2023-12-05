import { createSlice } from "@reduxjs/toolkit"
import { PRODUCT } from "../data"
const initialState = {
    value: []
}
const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        showProduct: (state, { payload }) => {
            state.value = payload
        }
    },
    extraReducers: {
    }
})
export const { showProduct } = productSlice.actions
export default productSlice.reducer