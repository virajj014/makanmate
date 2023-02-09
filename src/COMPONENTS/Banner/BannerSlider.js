import React, { useEffect, useState } from 'react'
import img1 from '../../ASSETS/HomeSlider/slide-1.jpg'
import img2 from '../../ASSETS/HomeSlider/slide-2.jpg'
import './Banner.css'
const BannerSlider = () => {

  const [data, setData] = useState([])
  const [current, setCurrent] = useState('')

  const getbannerdata = () => {
    fetch("http://154.26.130.251:134/B2CBannerImage/GetAll?OrganizationId=1")
      .then(res => res.json())
      .then(res => {
        if (res.Code == 200) {
          // console.log(res.Data[1])
          setData(res.Data)
          setCurrent(res.Data[0])
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getbannerdata()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data.length > 0) {
        let index = data.indexOf(current)
        if (index == data.length - 1) {
          setCurrent(data[0])
        }
        else {
          setCurrent(data[index + 1])
        }
      }

      console.log(current)
    }, 5000);
    return () => clearTimeout(timer);
  }, [current])


  return (
    <div
      className='banner-slider'
    >


      <div className='imgcont'>
        <img src={current.BannerImageFilePath} alt='' className='zoom-image' />
        <div className='txtcont'>
          <div className='txtcontin'>
            <h1>{current.Title}</h1>
            <h2>{current.h2}</h2>
            <h3>{current.h3}</h3>
            <button>ORDER NOW</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BannerSlider