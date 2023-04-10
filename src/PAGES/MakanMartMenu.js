import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Navigation } from 'swiper'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './CateringMenu.css'
import logo from '../ASSETS/logo.png'
import StaticBanner from '../COMPONENTS/Banner/StaticBanner'
import Dropdown from 'react-bootstrap/Dropdown';
import LoadingSpinner from '../LOADER/LoadingSpinner'



let pagetype = 'MM'
const MakanMartMenu = () => {

    const { mycategoryid } = useParams();
    const [products, setproducts] = React.useState([])
    const [categories, setcategories] = React.useState([])
    const [selectedCategory, setselectedCategory] = React.useState(mycategoryid)
    const [loading, setloading] = React.useState(false)
    const getproducts = async (categoryname) => {
        window.scrollTo(0, 0)
        setsearch('')
        setloading(true)
        let temp = [];

        fetch(process.env.REACT_APP_BACKEND_URL + '/ProductRest/GetAllSearch?OrganizationId=1&Category=' + categoryname)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                console.log(process.env.REACT_APP_BACKEND_URL)
                console.log(json?.Result)
                // filter by branch code
                if (json?.Result) {
                    temp = json?.Result.filter(item => item.BranchCode == pagetype)
                }
                setproducts(temp)
                setloading(false)
            })
            .catch((error) => {
                console.error(error)
                setloading(false)
            })

    }
    const getcategories = async () => {
        setloading(true)
        fetch(process.env.REACT_APP_BACKEND_URL + '/CategoryR/GetAll?OrganizationId=1', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => {
                let temp = []
                if (json.Code == 200) {
                    temp = json.Data.filter(item => item.BranchCode == pagetype && item.IsActive == true)
                }
                setcategories(temp)
                setloading(false)
            })
            .catch((error) => {
                console.error(error)
                setloading(false)
            })
    }


    React.useEffect(() => {
        console.log(mycategoryid)
        if (mycategoryid == 'All') {
            getproducts('')

        }
        else {
            getproducts(mycategoryid)
        }
        getcategories()
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


    const [search, setsearch] = React.useState('');


    const [sortproductsby, setsortproductsby] = React.useState('Latest')


    return (
        <div className='categorymenu'>
            <Navbar />
            <StaticBanner name='Makan Mart' />

            <div className='c2'>
                <div className='c2col1'>
                    <h2 className='head3'>Menu Categories</h2>
                    <div className='c12'>
                        {
                            selectedCategory == 'All' ?
                                <p className='active'>All</p>
                                :
                                <p onClick={() => {
                                    setselectedCategory('All')
                                    getproducts('')
                                }}>All</p>
                        }
                        {
                            categories.map((category) => {
                                return (
                                    <>
                                        {
                                            selectedCategory == category.CategoryName ?
                                                <p className='active'>{category.CategoryName}</p>
                                                :
                                                <p onClick={() => {
                                                    setselectedCategory(category.CategoryName)
                                                    getproducts(category.CategoryName)
                                                }
                                                }>{category.CategoryName}</p>

                                        }
                                    </>
                                )
                            })
                        }
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
                                <input type='text' placeholder='Search'
                                    onChange={(e) => {
                                        setsearch(e.target.value)
                                    }}
                                />
                                {/* search icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <div className='selecttagout'>

                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Sort by {sortproductsby}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {/* <Dropdown.Item 
                                            onClick={() => {
                                                console.log(products)
                                            }}
                                        >Sort by popularity</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Sort by average rating</Dropdown.Item> */}
                                        <Dropdown.Item href="#/action-3"
                                            onClick={() => {
                                                setsortproductsby('Latest')
                                            }}
                                        >Sort by latest</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                setsortproductsby('Price Low to High')
                                            }}
                                        >Sort by price: low to high</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                setsortproductsby('Price High to Low')
                                            }}
                                        >Sort by price: high to low</Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    {
                        products.length > 0 ?
                            <div className='products'>
                                {
                                    products
                                        .filter((product) => {
                                            if (search == '') {
                                                return product
                                            } else if (product.ProductName.toLowerCase().includes(search.toLowerCase())) {
                                                return product
                                            }
                                        })
                                        .sort((a, b) => {
                                            if (sortproductsby == 'Latest') {
                                                return new Date(b.ChangedOn) - new Date(a.ChangedOn)
                                            }

                                            else if (sortproductsby == 'Price Low to High') {
                                                return a.SalesPrice - b.SalesPrice
                                            }
                                            else if (sortproductsby == 'Price High to Low') {
                                                return b.SalesPrice - a.SalesPrice
                                            }
                                        })
                                        // if products are more than 0 then map through products else show no products found

                                        .map((product) => {
                                            return (
                                                <div className='product'
                                                    key={product.ProductId}


                                                >
                                                    <div className='productimage'
                                                        onClick={() => {
                                                            navigate(`/product/${product.ProductId}`)
                                                        }}
                                                    >
                                                        <img src={
                                                            product.ProductImageURL ?
                                                                product.ProductImageURL
                                                                :
                                                                logo

                                                        } alt='product' />
                                                    </div>
                                                    <div className='productinfo'   onClick={() => {
                                                        navigate(`/product/${product.ProductId}`)
                                                    }}>
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
                                                                    <span>${
                                                                        (product.SalesPrice + (product.SalesPrice) * (0.2)).toFixed(2)
                                                                    }</span>
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
                                {/* <h2>No products found</h2> */}
                                {
                                    loading ?
                                        <LoadingSpinner />
                                        :
                                        <h2>No products found</h2>
                                }
                            </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default MakanMartMenu