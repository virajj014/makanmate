import React, { useEffect, useState } from 'react'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import AddressTop from '../COMPONENTS/Navbar/AddressTop'
import BannerSlider from '../COMPONENTS/Banner/BannerSlider'
import HomeOurCateringMenu from '../COMPONENTS/Product/HomeOurCateringMenu'
import Welcomecont from '../COMPONENTS/Welcome/Welcomecont'
import HomeSlider from '../COMPONENTS/HomeSlider/HomeSlider'
import HomeAbout from '../COMPONENTS/HomeAboutBottom/HomeAbout'
import Footer from '../COMPONENTS/Footer/Footer'
import MakanMart from '../COMPONENTS/Product/MakanMart'
const Home = () => {

  // const getaddress = () => {
  //   fetch('https://www.vyap.in/portaluser/address',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Cookie': '_iamadt_client_50010917808=933eeea4e86c5ba232d23f037f1235cad2f125f58348324677a1274b4b48f9ede1ecc802416453be0dff1729e86d8d43989ee991ab3a472a1c6d69531304a29f; _iambdt_client_50010917808=628caf36fff5e22278230cc0f91edd513dd9db84e90ab3dd2eae400ca99dc145c20f2868d819564a199cb3ae866f3863535a443af98bb7c431cf6e1feb856389;'
  //       }
  //     }
  //   )

  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  // }

  useEffect(() => {
    // getaddress()
  }, [])
  return (
    <div>
      <Navbar />
      <HomeSlider />
      <div className='showup'>
        <Welcomecont />
      </div>
      <div className='showup'>
        <HomeOurCateringMenu />
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