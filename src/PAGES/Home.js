import React, { useEffect, useState } from 'react'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import AddressTop from '../COMPONENTS/Navbar/AddressTop'
import BannerSlider from '../COMPONENTS/Banner/BannerSlider'
import CategoriesSlider from '../COMPONENTS/Product/CategoriesSlider'
import Welcomecont from '../COMPONENTS/Welcome/Welcomecont'
import HomeSlider from '../COMPONENTS/HomeSlider/HomeSlider'
import HomeAbout from '../COMPONENTS/HomeAboutBottom/HomeAbout'
import Footer from '../COMPONENTS/Footer/Footer'
import MakanMart from '../COMPONENTS/Product/MakanMart'
const Home = () => {


  return (
    <div>
      <Navbar />
      <HomeSlider />
      <div className='showup'>
        <Welcomecont />
      </div>
      <div className='showup'>
        <CategoriesSlider />
      </div>
      {/* <div className='showup'>
        <MakanMart />
      </div> */}
      <div className='showup'>
        <HomeAbout />
      </div>
      <Footer />
    </div>
  )
}

export default Home