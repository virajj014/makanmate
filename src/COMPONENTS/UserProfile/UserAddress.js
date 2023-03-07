import React from 'react'
import './UserAddress.css'

const UserAddress = () => {
    const [show, setShow] = React.useState(false)
    return (
        <div className='useraddress'>
            <h1 className='mainhead1'>Your Address</h1>
            <div className='addressin'>
                <div className='address'>
                    <span>
                        Address Line 1
                    </span>
                    ,
                    <span>
                        Address Line 2
                    </span>
                    ,
                    <span>
                        Address Line 3
                    </span>

                    <div className='delbtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
                <div className='address'>
                    <span>
                        Address Line 1
                    </span>
                    ,
                    <span>
                        Address Line 2
                    </span>
                    ,
                    <span>
                        Address Line 3
                    </span>

                    <div className='delbtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
                <div className='address'>
                    <span>
                        Address Line 1
                    </span>
                    ,
                    <span>
                        Address Line 2
                    </span>
                    ,
                    <span>
                        Address Line 3
                    </span>

                    <div className='delbtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
            </div>
            {
                !show && <div className='addnewbtn' onClick={() => setShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            }
            {show && <div className='addnew'>
                <h1 className='mainhead1'>Add New Address</h1>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Postal Code<span>*</span></label>
                        <input type='text' name='name' id='name' />
                    </div>
                </div>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='address1'>Address Line 1<span>*</span></label>
                        <input type='text' name='address1' id='address1' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='address2'>Address Line 2</label>
                        <input type='text' name='address2' id='address2' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='address3'>Address Line 3</label>
                        <input type='text' name='address3' id='address3' />
                    </div>
                </div>

                <button className='mainbutton1'
                    onClick={() => setShow(false)}
                >Save</button>
            </div>}
        </div>
    )
}

export default UserAddress