import React, { useEffect, useState } from 'react'
import logo from '../../ASSETS/logo.png'

import './CategoriesSlider.css'
import { Link, useNavigation } from 'react-router-dom'

const CategoriesSlider = () => {
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
            <h1 className='mainhead1'>OUR CATERING MENU</h1>
            <h2 className='mainpg1'>A wide selection of Mini Buffet menus for every occasion. Enhance your event experience with quality food for you and your guests!</h2>
            <div className='categoryin'>
                {/* <div className='card'>
                    <img src={img1} alt='img1' />
                    <h3>Breakfast</h3>
                </div> */}
                {
                    data.filter(
                        (item, index) => {
                            if (showall && item.BranchCode == "MT") {
                                return true
                            }
                            else {
                                if (index <=15 && item.BranchCode == "MT") {
                                    return true
                                }
                                else {
                                    return false
                                }
                            }
                        }
                    ).map((item, index) => {
                        
                        return (
                            <Link to={`/menu/cateringmenu/${item.CategoryName}`} key={index}
                             style={{textDecoration:'none'}}
                             className='card'
                            >
                                {/* <div className='card'
                                    key={index}


                                > */}
                                    <img src={item.PreviewImageURL ? 
                                    item.PreviewImageURL : logo    
                            } alt='img1' />
                                    <h3>{item.CategoryName}</h3>
                                {/* </div> */}
                            </Link>
                        )
                    })
                }
            </div>

            <button
                className='mainbutton1'
                onClick={() => {
                    setShowall(!showall)
                }}
            >{
                    showall ? 'Show Less' : 'Show More'
                }</button>
        </div>
    )
}

export default CategoriesSlider