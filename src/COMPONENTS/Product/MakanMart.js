import React, { useEffect, useState } from 'react'

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import './MakanMart.css'

const MakanMart = () => {
    const [data, setData] = useState([])
    const [showall, setShowall] = useState(false)
    const [current, setCurrent] = useState('')

    const getbannerdata = () => {
        fetch("http://154.26.130.251:134/CategoryR/GetAllActive?OrganizationId=1")
            .then(res => res.json())
            .then(res => {
                if (res.Code == 200) {
                    console.log(res.Data[1])
                    setData(res.Data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getbannerdata()
    }, [])

    return (
        <div className='categoriesout'>
            <h1>MAKAN MART</h1>
            <h2>A wide selection of fuss free ready-to-cook meals that takes the hassle out of meal prepping.</h2>
            <div className='categoryin'>
                {/* <div className='card'>
                    <img src={img1} alt='img1' />
                    <h3>Breakfast</h3>
                </div> */}
                {
                    data.filter(
                        (item, index) => {
                            if (showall) {
                                return true
                            }
                            else {
                                if (index < 8) {
                                    return true
                                }
                                else {
                                    return false
                                }
                            }
                        }
                    ).map((item, index) => {
                        return (
                            <div className='card'>
                                <img src={item.PreviewImageURL} alt='img1' />
                                <h3>{item.CategoryName}</h3>
                            </div>
                        )
                    })
                }
            </div>

            <button
             onClick={() => {
                setShowall(!showall)
             }}
            >{
                showall ? 'Show Less' : 'Show More'
            }</button>
        </div>
    )
}

export default MakanMart