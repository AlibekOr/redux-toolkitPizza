import React from 'react'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
const Home = () => {
    return (
        <div className='containers '>
            <div className='con'>
                <CartPage />
                <ProductPage />
            </div>
        </div>
    )
}

export default Home