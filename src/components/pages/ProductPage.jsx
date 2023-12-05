import React from 'react'
import { PRODUCT, } from '../../data'
import { Button } from 'antd';
import { showProduct } from "../../store/productSlice"
import { showCart, removeElement, resetCart, saveCart } from "../../store/cartSlice"
import { useDispatch, useSelector } from 'react-redux'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import LocalStorage from './LocalStorage'
import { Avatar, Card } from 'antd';
import "./product.css"
const { Meta } = Card;

const ProductPage = () => {
    const dispatch = useDispatch()
    const { value } = useSelector((state) => state.productSlice)
    const state = useSelector((state) => state.cartSlice)
    React.useEffect(() => {
        dispatch(showProduct(PRODUCT))
    }, [])
    const handelClick = (item) => {
        return dispatch(showCart(item))
    }
    const removeElCart = (i) => {
        return dispatch(removeElement(i))
    }

    const allPrice = state.reduce((acc, item) => acc + item.qty * item.price, 0)
    return (
        <div className='productPage'>
            <div className='menu'>
                <div className=''> ${allPrice} </div>
                <Button type="primary" onClick={() => dispatch(resetCart(state))} >reset</Button>
            </div>
            <div className='cartInner'>
                {value.map((val, key) => (
                    <Card
                        key={key}
                        style={{
                            width: 300,
                        }}

                        actions={[
                            <Button className='' onClick={() => removeElCart(val)} variant="contained">-</Button>,
                            <span>{state.find(i => i.id === val.id)?.qty || 0}</span>,
                            <Button className='' onClick={() => handelClick(val)} variant="contained">+</Button>
                        ]}
                    >
                        <Meta
                            title={val.name}
                            description={'$' + val.price}
                        />
                    </Card>
                ))}

            </div>
            <LocalStorage />
        </div >
    )
}

export default ProductPage