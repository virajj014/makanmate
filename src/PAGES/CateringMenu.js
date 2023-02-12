import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './CateringMenu.css'

const CateringMenu = () => {
    // const [data, setdata] = React.useState([])
    // const getdatafromapi = async () => {
    //     fetch('http://154.26.130.251:134/CategoryR/GetAllActive?OrganizationId=1')
    //         .then((response) => response.json())
    //         .then((json) => setdata(json))
    //         .catch((error) => console.error(error))
    // }

    const [products, setproducts] = React.useState([])

    const getproducts = async () => {
        let temp = [];
        temp = [
            {
                "id": 1,
                "name": "Marinated Chicken Satay with Peanut Sauce 25pcs",
                "description": "Bento Set",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg",
                "price": 25
            }, {
                "id": 2,
                "name": "Marinated Chicken Satay with Peanut Sauce 12pcs",
                "description": "Bento Special",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/Norwegian-Salmon-Fillet-Fresh-Frozen-300x300.jpg",
                "price": 12
            },
            {
                "id": 3,
                "name": "Marinated Chicken Satay with Peanut Sauce 25pcs",
                "description": "Bento Set",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg",
                "price": 25
            },
            {
                "id": 1,
                "name": "Marinated Chicken Satay with Peanut Sauce 25pcs",
                "description": "Bento Set",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg",
                "price": 25
            }, {
                "id": 2,
                "name": "Marinated Chicken Satay with Peanut Sauce 12pcs",
                "description": "Bento Special",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/Norwegian-Salmon-Fillet-Fresh-Frozen-300x300.jpg",
                "price": 12
            },
            {
                "id": 3,
                "name": "Marinated Chicken Satay with Peanut Sauce 25pcs",
                "description": "Bento Set",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg",
                "price": 25
            },
            {
                "id": 1,
                "name": "Marinated Chicken Satay with Peanut Sauce 25pcs",
                "description": "Bento Set",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg",
                "price": 25
            }, {
                "id": 2,
                "name": "Marinated Chicken Satay with Peanut Sauce 12pcs",
                "description": "Bento Special",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/Norwegian-Salmon-Fillet-Fresh-Frozen-300x300.jpg",
                "price": 12
            },
            {
                "id": 3,
                "name": "Marinated Chicken Satay with Peanut Sauce 25pcs",
                "description": "Bento Set",
                "image": "https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg",
                "price": 25
            },
        ]
        setproducts(temp)
    }

    React.useEffect(() => {
        getproducts()
    }, [])
    return (
        <div className='categorymenu'>
            <Navbar />
            <div className='header'>
                <h1>Menu</h1>
            </div>

            <h2 className='head2'>Products by category</h2>
            <div className='c1'>
                <div className='c11'>
                    <div className='searchbar'>
                        <input type='text' placeholder='Search' />
                        {/* search icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <select name="category" id="category">
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="latest">Sort by latest</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                    </select>
                </div>
            </div>

            <div className='c2'>
                <div className='c12'>
                    <p>Bento Set</p>
                    <p>Bento Special</p>
                    <p>Chinese New Year Addons</p>
                    <p>Chinese New Year Menu</p>
                    <p>Delight Menu</p>
                    <p>Healthier Choice</p>
                    <p>High Tea</p>
                    <p>Indian Menu</p>
                    <p>Korean Menu</p>
                    <p>Makanmart</p>
                    <p>Delicious Dim Sum</p>
                    <p>Tantalising Meat</p>
                    <p>Mini Catering</p>
                    <p>Premium Bento</p>
                    <p>Sedap Menu</p>
                    <p>Seminar</p>
                    <p>Special Celebration</p>
                    <p>Vegetarian Catering</p>
                    <p>Western Seminar</p>
                    <p>Wow Wow West</p>
                </div>
                <div className='products'>
                    {
                        products.map((product) => {
                            return (
                                <div className='product'>
                                    <div className='productimage'>
                                        <img src={product.image} alt='product' />
                                    </div>
                                    <div className='productinfo'>
                                        <h3>{product.name}</h3>
                                        {/* <p>{product.description}</p> */}
                                        <p>$ {product.price}</p>
                                    </div>

                                    <Link to={`/product/${product.id}`}
                                        style={{ textDecoration: 'none' ,width:'100%',display:'flex',justifyContent:'center'}}
                                    >
                                        <button>Buy</button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CateringMenu