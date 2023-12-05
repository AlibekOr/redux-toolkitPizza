import React from 'react'
import { useSelector } from 'react-redux'
const CartPage = () => {
    const state = useSelector((state) => state.cartSlice)
    return (
        <div className='cartPage'>
            {state.map((item, key) => (
                <div className='cartPage__block' key={key}>
                    <div><img className='imgs' src={item.img} alt="" /> </div>
                    <div> {item.name} </div>
                </div>
            ))}


        </div>
    )
}

export default CartPage