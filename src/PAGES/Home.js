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
      <BannerSlider />
      <Welcomecont />
      {/* <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'var(--col3)',
        opacity: '0.2'
      }}></div> */}
      <CategoriesSlider />
      {/* <HomeSlider/> */}
      <MakanMart />
      <HomeAbout />
      <Footer />
    </div>
  )
}

export default Home