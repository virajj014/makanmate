import React, { useEffect, useState } from 'react'
import img1 from '../../ASSETS/HomeSlider/slide-1.jpg'
import img2 from '../../ASSETS/HomeSlider/slide-2.jpg'
import './Banner.css'
const BannerSlider = () => {
  const data = [
    {
      id: 1,
      img: img1,
      h1: 'BEST MENTO 2023',
      h2: 'Work From Home Promotion Menu 2023',
      h3: '',
      btnlink: '#',
    },
    {
      id: 2,
      img: img2,
      h1: '',
      h2: 'Premium Steamboat Package for 2 pax',
      h3: 'Work From Home Promotion Menu 2023',
      btnlink: '#',
    }
  ]
  const [current, setCurrent] = useState(data[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const index = data.findIndex((item) => item.id === prev.id)
        const next = data[index + 1] || data[0]
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  //call zoom  animation on image when page loads for the first time and when the image changes
  return (
    <div
      className='banner-slider'
    >
      <div className='imgcont'>
        <img src={current.img} alt=''  className='zoom-image'/>
        <div className='txtcont'>
          <div className='txtcontin'>
            <h1>{current.h1}</h1>
            <h2>{current.h2}</h2>
            <h3>{current.h3}</h3>
            {/* <h3>Korean, Japanese, Local Bento Cuisine Choices</h3> */}
            <button>ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSlider