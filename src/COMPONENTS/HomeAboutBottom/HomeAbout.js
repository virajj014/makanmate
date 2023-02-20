import React from 'react'
import img1 from './lobster.png'
import './HomeAbout.css'
import { Link } from 'react-router-dom'
const HomeAbout = () => {
    return (
        <div className='homeabout'>
            <div className='row'>
                <div className='left'>
                    <img src={img1} alt='lobster' />
                </div>
                <div className='right'>
                    <h1>Makan Mate Catering Service</h1>
                    <h2>Looking for a wide array of exquisite, value-for-money cuisines for a birthday bash, a corporate event, or simply looking to satiate your hunger? We have the answer.</h2>

                    <p>At <a>Makan Mate</a>, we strive to solve your <span>food catering services</span> woes and whet your appetite! Allow us to step in to provide you with a decadent spread of dishes such as our Makan Mate Cereal Prawn, Scrumptious Olive Fried Rice, and Black Pepper Tender Beef Loin! To top it off, we want to tantalize your taste buds further with delish morsels of Pastry, our specialty Gyoza, and Secret Recipe Chicken Wings.

                        Complete the Makan Mate experience with our Home-made Pure Honey Lime juice! As our customers’ satisfaction is our priority, we pledge not to compromise on taste, quality and service and utilize non-hydrogenated, Trans fat Free sunflower oil in our kitchen! Makan Mate’s services comprise of packages for small to large capacities, serving you the most economical yet savory lunchboxes, <a>buffets, High-Tea</a> and <a>BBQ</a>!</p>
                </div>
            </div>

            <Link to='/about'>
                <button>ABOUT MAKANMATE</button>
            </Link>
        </div>
    )
}

export default HomeAbout