import React from 'react'
import './StaticBanner.css'
const StaticBanner = ({name}) => {
    return (
        <div className='staticbanner'>
            <img src={"https://makanmate.com/wp-content/uploads/2022/09/catering-chef-cooking-1536x864.jpg"} alt='about' />
            <h1>{name}</h1>
        </div>
    )
}

export default StaticBanner