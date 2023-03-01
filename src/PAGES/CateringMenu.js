import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Navigation } from 'swiper'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './CateringMenu.css'
import logo from '../ASSETS/logo.png'
import StaticBanner from '../COMPONENTS/Banner/StaticBanner'

const CateringMenu = () => {

    const { mycategoryid } = useParams();
    const [products, setproducts] = React.useState([])
    const [selectedCategory, setselectedCategory] = React.useState(mycategoryid)
    const getproducts = async (categoryname) => {
        let temp = [];

        fetch(process.env.REACT_APP_BACKEND_URL + '/ProductRest/GetAllSearch?OrganizationId=1&Category=' + categoryname)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                console.log(process.env.REACT_APP_BACKEND_URL)
                console.log(json?.Result)
                if (json?.Result) {
                    temp = json?.Result
                }
                setproducts(temp)

            })
            .catch((error) => console.error(error,
                process.env.REACT_APP_BACKEND_URL

            ))

    }

    React.useEffect(() => {
        console.log(mycategoryid)
        getproducts(mycategoryid)
        window.scrollTo(0, 0)
    }, [])


    const navigate = useNavigate();

    const [quantity, setquantity] = React.useState(1)
    const [selecetedproduct, setselecetedproduct] = React.useState({})
    const checkaddon = (product) => {
        console.log(product.IsAddOnItem
        )
        if (product.IsAddOnItem) {
            navigate(`/product/${product.ProductId}`)
        }
        else {
            setselecetedproduct(product.ProductId)
        }
    }


    const addtocart = (productdata, count) => {
        // add to local storage
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            // check if item is already in cart
            let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
            if (itemincart) {
                // update quantity
                cart = cart.map(item => {
                    if (item.productdata.ProductId === productdata.ProductId) {
                        return {
                            ...item,
                            quantity: item.quantity + count
                        }
                    }
                    else {
                        return item
                    }
                })
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            else {
                // add new item to cart
                cart = [...cart, { productdata, quantity: count, url: window.location.href }]
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        }
        else {
            // create cart and add item object to cart
            cart = [{ productdata, quantity: count }]
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        window.location.reload()
        toast.success('Item added to cart')
    }

    return (
        <div className='categorymenu'>
            <Navbar />
            <StaticBanner name='Catering Menu' />

            <div className='c2'>
                <div className='c2col1'>
                    <h2 className='head3'>Menu Categories</h2>
                    <div className='c12'>
                        {
                            selectedCategory == 'Bento Set' ?
                                <p className='active'>Bento Set</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Bento Set')
                                    getproducts('Bento Set')
                                }}>Bento Set</p>
                        }

                        {
                            selectedCategory == 'Bento Special' ?

                                <p className='active'>Bento Special</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Bento Special')
                                    getproducts('Bento Special')
                                }
                                }>Bento Special</p>
                        }
                        {
                            selectedCategory == 'Chinese New Year Addons' ?

                                <p className='active'>Chinese New Year Addons</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Chinese New Year Addons')
                                    getproducts('Chinese New Year Addons')
                                }
                                }>Chinese New Year Addons</p>
                        }

                        {
                            selectedCategory == 'Chinese New Year Menu' ?

                                <p className='active'>Chinese New Year Menu</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Chinese New Year Menu')
                                    getproducts('Chinese New Year Menu')
                                }
                                }>Chinese New Year Menu</p>
                        }

                        {
                            selectedCategory == 'Delight Menu' ?

                                <p className='active'>Delight Menu</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Delight Menu')
                                    getproducts('Delight Menu')
                                }
                                }>Delight Menu</p>
                        }

                        {
                            selectedCategory == 'Healthier Choice' ?

                                <p className='active'>Healthier Choice</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Healthier Choice')
                                    getproducts('Healthier Choice')
                                }
                                }>Healthier Choice</p>
                        }

                        {
                            selectedCategory == 'High Tea' ?

                                <p className='active'>High Tea</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('High Tea')
                                    getproducts('High Tea')
                                }
                                }>High Tea</p>
                        }

                        {
                            selectedCategory == 'Indian Menu' ?

                                <p className='active'>Indian Menu</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Indian Menu')
                                    getproducts('Indian Menu')
                                }
                                }>Indian Menu</p>
                        }

                        {
                            selectedCategory == 'Korean Menu' ?

                                <p className='active'>Korean Menu</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Korean Menu')
                                    getproducts('Korean Menu')
                                }
                                }>Korean Menu</p>
                        }

                        {
                            selectedCategory == 'Makanmart' ?

                                <p className='active'>Makanmart</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Makanmart')
                                    getproducts('Makanmart')
                                }
                                }>Makanmart</p>
                        }

                        {
                            selectedCategory == 'Delicious Dim Sum' ?

                                <p className='active'>Delicious Dim Sum</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Delicious Dim Sum')
                                    getproducts('Delicious Dim Sum')
                                }
                                }>Delicious Dim Sum</p>
                        }

                        {
                            selectedCategory == 'Tantalising Meat' ?

                                <p className='active'>Tantalising Meat</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Tantalising Meat')
                                    getproducts('Tantalising Meat')
                                }
                                }>Tantalising Meat</p>

                        }
                        {
                            selectedCategory == 'Mini Catering' ?

                                <p className='active'>Mini Catering</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Mini Catering')
                                    getproducts('Mini Catering')
                                }
                                }>Mini Catering</p>

                        }

                        {
                            selectedCategory == 'Premium Bento' ?
                                <p className='active'>Premium Bento</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Premium Bento')
                                    getproducts('Premium Bento')
                                }
                                }>Premium Bento</p>

                        }

                        {
                            selectedCategory == 'Sedap Menu' ?
                                <p className='active'>Sedap Menu</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Sedap Menu')
                                    getproducts('Sedap Menu')
                                }
                                }>Sedap Menu</p>
                        }
                        {
                            selectedCategory == 'Seminar' ?
                                <p className='active'>Seminar</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Seminar')
                                    getproducts('Seminar')
                                }
                                }>Seminar</p>
                        }

                        {
                            selectedCategory == 'Special Celebration' ?
                                <p className='active'>Special Celebration</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Special Celebration')
                                    getproducts('Special Celebration')
                                }
                                }>Special Celebration</p>
                        }

                        {
                            selectedCategory == 'Vegetarian Catering' ?
                                <p className='active'>Vegetarian Catering</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Vegetarian Catering')
                                    getproducts('Vegetarian Catering')
                                }
                                }>Vegetarian Catering</p>
                        }

                        {
                            selectedCategory == 'Western Seminar' ?
                                <p className='active'>Western Seminar</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Western Seminar')
                                    getproducts('Western Seminar')
                                }
                                }>Western Seminar</p>
                        }

                        {
                            selectedCategory == 'Wow Wow West' ?
                                <p className='active'>Wow Wow West</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('Wow Wow West')
                                    getproducts('Wow Wow West')
                                }
                                }>Wow Wow West</p>
                        }
                    </div>
                    <div className='filterbyprice'>
                        <h2 className='head3'>Filter by price</h2>
                        <div>
                            <p>0$</p>
                            <input type='range' min='0' max='100' />
                            <p>100$</p>
                        </div>
                        <button>sort</button>
                    </div>

                    <div className='latestaddon'>
                        <h2 className='head3'>Latest Addons</h2>
                        <div className='addonsproducts'>
                            {
                                products
                                    .filter((product, index) => {
                                        return index < 4
                                    })
                                    .map((product) => {
                                        return (
                                            <div className='product1'>
                                                <div className='product1image'>
                                                    <img src={product.ProductImageURL} alt='product' />
                                                </div>
                                                <div className='product1info'>
                                                    <h3>{product.ProductName}</h3>
                                                    {/* <p>{product.description}</p> */}
                                                    <p>$ {product.SalesPrice}</p>
                                                </div>

                                                <Link to={`/product/${product.id}`}
                                                    style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}
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

                <div className='c2col2'>
                    <div className='c1'>
                        {/* <h2 className='head2'>Products by category</h2> */}
                        <div className='c11'>
                            <div className='searchbar'>
                                <input type='text' placeholder='Search' />
                                {/* search icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <div className='selecttagout'>
                                <select name="category" id="category">
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="latest">Sort by latest</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {
                        products.length > 0 ?
                            <div className='products'>
                                {
                                    products.map((product) => {
                                        console.log(product.ProductImageURL)
                                        return (
                                            <div className='product'
                                                key={product.ProductId}

                                            // onClick={() => {
                                            //     navigate(`/product/${product.ProductId}`)
                                            // }}
                                            >
                                                <div className='productimage'>
                                                    <img src={
                                                        product.ProductImageURL ?
                                                            product.ProductImageURL
                                                            :
                                                            logo

                                                    } alt='product' />
                                                </div>
                                                <div className='productinfo'>
                                                    <h3>{product.ProductName}</h3>
                                                    {/* <p>{product.description}</p> */}
                                                    {
                                                        product.SalesPrice > 0 ?
                                                            <p>$ {
                                                                //  add .00 if price is integer
                                                                product.SalesPrice % 1 == 0 ?
                                                                    product.SalesPrice + '.00'
                                                                    :
                                                                    product.SalesPrice
                                                            }
                                                                <span>${product.SalesPrice + (product.SalesPrice) * (0.2)}</span>
                                                            </p>
                                                            :
                                                            <p>$ 0.00</p>
                                                    }
                                                </div>

                                                {/* <Link to={`/product/${product.ProductId
                                            }`}
                                            style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}
                                        > */}
                                                {
                                                    selecetedproduct == product.ProductId &&
                                                    <div className='incrdecr'>
                                                        <button className='decr'
                                                            onClick={() => {
                                                                if (quantity > 1) {
                                                                    setquantity(quantity - 1)
                                                                }
                                                            }}
                                                        >-</button>
                                                        <span className='count'>{
                                                            quantity
                                                        }</span>
                                                        <button className='incr'
                                                            onClick={() => {
                                                                setquantity(quantity + 1)
                                                            }}
                                                        >+</button>
                                                    </div>
                                                }
                                                {
                                                    selecetedproduct == product.ProductId ?
                                                        <button
                                                            onClick={() => {
                                                                addtocart(product, quantity)
                                                            }}
                                                        >Add to cart</button>
                                                        :
                                                        <button
                                                            onClick={() => {
                                                                checkaddon(product)
                                                            }}
                                                        >Buy</button>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className='products'>
                                <h2>No products found</h2>
                            </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default CateringMenu