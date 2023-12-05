import React from 'react'
import Home from './components/Home'
import Chekout from './components/pages/Chekout'
import { Route, Routes } from "react-router-dom"
const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Chekout />} />
        </Routes>
    )
}

export default App