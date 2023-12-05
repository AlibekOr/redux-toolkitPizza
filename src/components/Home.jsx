import React from 'react'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
const Home = () => {
    return (
        <div className='containers con'>
            <CartPage />
            <ProductPage />
        </div>
    )
}

export default Home