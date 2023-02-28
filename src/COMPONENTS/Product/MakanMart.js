import React, { useEffect, useState } from 'react'
import logo from '../../ASSETS/logo.png'
import './MakanMart.css'

const MakanMart = () => {
    const [data, setData] = useState([])
    const [showall, setShowall] = useState(false)
    const [current, setCurrent] = useState('')

    const getbannerdata = () => {
        // MM and MT filter
        fetch(process.env.REACT_APP_BACKEND_URL+"/CategoryR/GetAllActive?OrganizationId=1")
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
            <h1 className='mainhead1'>MAKAN MART</h1>
            <h2 className='mainpg1'>A wide selection of fuss free ready-to-cook meals that takes the hassle out of meal prepping.</h2>
            <div className='categoryin'>
                {/* <div className='card'>
                    <img src={img1} alt='img1' />
                    <h3>Breakfast</h3>
                </div> */}
                {
                    data.filter(
                        (item, index) => {
                            if (showall && item.BranchCode == "MM") {
                                return true
                            }
                            else {
                                if (index < 20 && item.BranchCode == "MM") {
                                    return true
                                }
                                else {
                                    return false
                                }
                            }
                        }
                    ).map((item, index) => {
                        console.log(item)
                        return (
                            <div className='card'>
                                <img src={item.PreviewImageURL ? 
                                    item.PreviewImageURL : logo    
                            } alt='img1' />
                                <h3>{item.CategoryName}</h3>
                            </div>
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

export default MakanMart