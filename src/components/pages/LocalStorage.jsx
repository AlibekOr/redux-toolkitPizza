import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, notification } from "antd"
import SearchPage from './SearchPage'
import ModalPage from './Modal'

const LocalStorage = () => {
    const [ranName, setRanName] = React.useState()
    const [active, setActive] = React.useState(false)
    const state = useSelector((state) => state.cartSlice)
    const randomTitle = ['fsda', 'asfd', 'fsd', 'fds', 'ffdsg2w', 'bijte4ig', 'gbtrtr', 'brre', 'bnhtjitbi', '2f43r34', '11c43rffr', 'fewf34fgh55b 7u8i']
    const random = (arr) => {
        const randomNumber = Math.floor(Math.random() * arr.length)
        const item = arr[randomNumber]
        return item
    }
    const [api, contextHolder] = notification.useNotification();
    const handelSave = () => {
        const arrayRandom = random(randomTitle)
        localStorage.setItem(arrayRandom, JSON.stringify(state))
        setRanName(arrayRandom)
        setActive(true)
    }
    const handelClick = () => {
        navigator.clipboard.writeText(ranName)
        openNotificationWithIcon('success')
    }
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: 'Notification Title',
            description:
                'copy...',
        });
    };
    return (
        <div>
            <div >
                {contextHolder}
                <div className='localStorage'>
                    <Button onClick={() => handelSave()}>Save</Button>
                    <SearchPage />
                    <ModalPage />
                </div>
                <div className={active === false ? 'remove' : 'active'}>
                    <button className='btnCopy' onClick={() => handelClick()}>
                        your pizza search number:{ranName}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default LocalStorage