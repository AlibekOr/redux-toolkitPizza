import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux'
import { saveCart } from "../../store/cartSlice"
import { Input } from 'antd';
const SearchPage = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [number, setNumber] = useState();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);

        const s = localStorage.getItem(number)
        dispatch(saveCart(JSON.parse(s)))
    };
    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const handelChange = (e) => {
        const searchVal = e.target.value;
        setNumber(searchVal);

    }
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Search
            </Button>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}

            >
                <Input onChange={handelChange} />
            </Modal>
        </div>
    )
}

export default SearchPage