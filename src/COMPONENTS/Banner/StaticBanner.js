import React from 'react'
import './StaticBanner.css'
import aboutimage from './About.png'
import contactimage from './contact.png'
import cart from './cart.png'
import eventsimage from './events.jpg'
const StaticBanner = ({name}) => {
    return (
        <div className='staticbanner'>
            {name === 'about' && <img src={aboutimage} alt='about' />}
            {name === 'contact' && <img src={contactimage} alt='contact' />}
            {name === 'cart' && <img src={cart} alt='cart' />}
            {name === 'event' && <img src={eventsimage} alt='event' />}
            {name === 'cateringmenu' && <img src={eventsimage} alt='cateringmenu' />}
            {name === 'makanmart' && <img src={eventsimage} alt='makanmart' />}
            {/* <img src={"https://makanmate.com/wp-content/uploads/2022/09/catering-chef-cooking-1536x864.jpg"} alt='about' /> */}
            {/* <h1>{name}</h1> */}
        </div>
    )
}

export default StaticBanner