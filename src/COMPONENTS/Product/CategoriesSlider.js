import React from 'react'

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import './CategoriesSlider.css'

const CategoriesSlider = () => {

    return (
        <div className='categoriesout'>
            <h2>- From 11:00am to 10:00pm -</h2>
            <h1>ORDER ONLINE</h1>
            <div className='categoryin'>
                <div className='card'>
                    <img src={img1} alt='img1' />
                    <h3>Breakfast</h3>
                </div>

                <div className='card'>
                    <img src={img2} alt='img2' />
                    <h3>Lunch</h3>
                </div>

                <div className='card'>
                    <img src={img3} alt='img3' />
                    <h3>Dinner</h3>
                </div>

                <div className='card'>
                    <img src={img4} alt='img4' />
                    <h3>Drinks</h3>
                </div>

                <div className='card'>
                    <img src={img1} alt='img4' />
                    <h3>Drinks</h3>
                </div>

                <div className='card'>
                    <img src={img1} alt='img1' />
                    <h3>Breakfast</h3>
                </div>
            </div>

            <button>View More</button>
        </div>
    )
}

export default CategoriesSlider