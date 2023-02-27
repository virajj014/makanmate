import React from 'react'
import { Link } from 'react-router-dom'

import './Welcomecont.css'
const Welcomecont = () => {
    return (
        <div className='welcomecont'>
            <h1 className='mainhead1'> Welcome to Makan Mate</h1>
            <h2 className='mainpg1'> We serve a wide categories of catering meals. Our chefs cook various delicious local dishes that will sure make you want to order again. Choose from catering menu below on the choice of meal for your coming event.</h2>
            <Link to='/menu/cateringmenu/Bento Set'>
                <button className='mainbutton1'>- View Catering Menu -</button>
            </Link>
        </div>
    )
}

export default Welcomecont