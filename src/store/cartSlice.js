import { createSlice } from "@reduxjs/toolkit"
import { CART } from "../data"
import Img1 from "../image/1.jpg"
const initialState = [
    {
        id: 9,
        name: "Properties",
        price: 14,
        img: Img1,
        qty: 1
    }
]
const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        showCart: (state, { payload }) => {
            if (state.find(item => item.id === payload.id) === undefined) {
                console.log("birinshi if ");
                return [...state,
                {
                    id: payload.id,
                    name: payload.name,
                    price: payload.price,
                    img: payload.img,
                    qty: 1
                }
                ]
            }
            else {
                console.log("birinsh else");
                return state.map((val) => {
                    if (val.id === payload.id) {
                        console.log("ekinshi if");
                        return {
                            id: val.id,
                            name: val.name,
                            price: val.price,
                            img: val.img,
                            qty: val.qty + 1,
                        }
                    }
                    else { return val }
                })
            }
        },
        removeElement: (state, { payload }) => {

            if (state.find(item => item.id === payload.id)?.qty === 1) {
                return state.filter(item => item.id !== payload.id)
            } else {
                return state.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        }
                    }
                    return item
                })
            }
        },
        resetCart: (state) => {
            return state = CART
        },
        saveCart: (state, { payload }) => {
            return state = payload
        }

    }

})
export const { showCart, removeElement, resetCart, saveCart } = cartSlice.actions
export default cartSlice.reducer