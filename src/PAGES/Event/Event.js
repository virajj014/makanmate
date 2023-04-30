import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Event.css'
import Carousel from 'react-multi-carousel'
import img1 from '../../ASSETS/HomeSlider/slide-1.jpg'
import img2 from '../../ASSETS/HomeSlider/slide-2.jpg'
import Footer from '../../COMPONENTS/Footer/Footer'
import StaticBanner from '../../COMPONENTS/Banner/StaticBanner'
const Event = () => {
  return (
    <div className='event'>
      <Navbar />
      <StaticBanner name="event"/>



      <div className='s1'>
        <h1 className='mainhead1'>Corporate Events</h1>
        <p className='mainpg1'>
          Here are some of the events display setup. We do variouse design set up from normal to something more grand as well.</p>
      </div>

      <div className='s2'>
        <img src={img1} alt='IMG-20200919-134001' border='0' />
        <img src={img2} alt='IMG-20200919-134001' border='0' />
        <img src={img1} alt='IMG-20200919-134001' border='0' />
        <img src={img2} alt='IMG-20200919-134001' border='0' />
      </div>


      <div className='s1'>
        <h1 
          className='mainhead1'
        >Food Gallery</h1>
        <p
          className='mainpg1'
        >
          Some of the food served in our past events.</p>
      </div>


      <div className='s2'>
        <img src={img1} alt='IMG-20200919-134001' border='0' />
        <img src={img2} alt='IMG-20200919-134001' border='0' />
        <img src={img1} alt='IMG-20200919-134001' border='0' />
        <img src={img2} alt='IMG-20200919-134001' border='0' />
      </div>

      <Footer />
    </div>
  )
}

export default Event