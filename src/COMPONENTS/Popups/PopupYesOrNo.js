import React from 'react'
import './PopupStyles.css'
import { useRecoilState } from 'recoil'
import { clearCartState } from '../../Provider/ClearCartProvider'

const PopupYesOrNo = ({ message, taskfunc, yes, no }) => {
    const [showpopup, setShowPopup] = useRecoilState(clearCartState)

    const clearcart = async () => {
        let res = await localStorage.removeItem('cart')
        setShowPopup(false)

        // after 2 seconds reload page
        setTimeout(() => {
            window.location.reload()
        }, 2000)
        // window.location.reload()
    }

    return (
        <div
            className='popupout'
        >
            <div
                className='popupin'
            >
                <h4>{message}</h4>
                <div className='yesorno'>
                    <button
                        onClick={() => {
                            if(taskfunc == 'clearcart'){
                                clearcart()
                            }
                        }}
                    >{yes}</button>
                    <button
                        onClick={() => {
                            setShowPopup(false)
                        }}
                    >{no}</button>
                </div>
            </div>
        </div>
    )
}

export default PopupYesOrNo