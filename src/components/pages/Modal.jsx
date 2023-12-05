import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
const ModalPage = () => {
    const navigator = useNavigate()
    const state = useSelector((state) => state.cartSlice)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        navigator('/cart')
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const allPrice = state.reduce((acc, item) => acc + item.qty * item.price, 0)

    return (
        <>
            <Button type="primary" onClick={showModal}>
                CHekout
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h2>Your Order</h2>
                <span>The pizza has the following ingredients</span>
                <div>
                    {state.map((item, key) => (
                        <ul key={key}>
                            <li> {item.name}:{item.qty} </li>
                        </ul>
                    ))}
                </div>
                <div>$ {allPrice}</div>
            </Modal>
        </>
    );
};
export default ModalPage;