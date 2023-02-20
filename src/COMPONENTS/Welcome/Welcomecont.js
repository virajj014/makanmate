import React from 'react'
import { Link } from 'react-router-dom'

import './Welcomecont.css'
const Welcomecont = () => {
    return (
        <div className='welcomecont'>
            <h1> Welcome to Makan Mate</h1>
            <p> We serve a wide categories of catering meals. Our chefs cook various delicious local dishes that will sure make you want to order again. Choose from catering menu below on the choice of meal for your coming event.</p>
            <Link to='http://localhost:3000/menu/cateringmenu/Bento Set'>
                <button>- View Catering Menu -</button>
            </Link>
        </div>
    )
}

export default Welcomecont