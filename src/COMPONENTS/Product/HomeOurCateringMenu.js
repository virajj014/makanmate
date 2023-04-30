import React, { useEffect, useState } from 'react'
import logo from '../../ASSETS/logo1.png'

import './MakanMart.css'
import { Link, useNavigation } from 'react-router-dom'

const HomeOurCateringMenu = () => {
    const [data, setData] = useState([])
    const [showall, setShowall] = useState(false)
    const [current, setCurrent] = useState('')

    const gatdata = () => {
        // MM and MT filter
        fetch(process.env.REACT_APP_BACKEND_URL+"/CategoryR/GetAllActive?OrganizationId=1")
            .then(res => res.json())
            .then(res => {
                if (res.Code == 200) {
                    console.log(res.Data)
                    // setData(res.Data)

                    let temp = []

                    temp = res.Data.filter((item) => {
                        return item.BranchCode == 'MT'
                    })
                    if(showall){
                       
                    }else{
                        temp = temp.slice(0, 6)
                    }
                    setData(temp)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        gatdata()
    }, [showall])


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
                    data.map((item, index) => {
                        
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

export default HomeOurCateringMenu