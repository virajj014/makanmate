import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Navigation } from 'swiper'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './CateringMenu.css'
import logo from '../../ASSETS/logo.png'
import StaticBanner from '../../COMPONENTS/Banner/StaticBanner'
import Dropdown from 'react-bootstrap/Dropdown';
import LoadingSpinner from '../../LOADER/LoadingSpinner'
import { useRecoilState } from 'recoil'
import { clearCartState } from '../../Provider/ClearCartProvider'
import PopupYesOrNo from '../../COMPONENTS/Popups/PopupYesOrNo'
import ProductCard from '../../COMPONENTS/Product/ProductCard'



let pagetype = 'MM'
const MakanMartMenu = () => {
    const { mycategoryid } = useParams();
    const [products, setproducts] = React.useState([])
    const [categories, setcategories] = React.useState([])

    const [loading, setloading] = React.useState(false)
    const getproducts = async (categoryid) => {
        window.scrollTo(0, 0)
        setsearch('')
        setloading(true)
        let temp = [];

        fetch(process.env.REACT_APP_BACKEND_URL + '/ProductRest/GetAllSearch?OrganizationId=1&Category=' + categoryid)
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
    const getproductsAll = async () => {
        window.scrollTo(0, 0)
        setsearch('')
        setloading(true)
        let temp = [];

        fetch(process.env.REACT_APP_BACKEND_URL + '/ProductRest/GetAll?OrganizationId=1')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                console.log(process.env.REACT_APP_BACKEND_URL)
                console.log(json?.Result)
                // filter by branch code
                if (json?.Data) {
                    temp = json?.Data.filter(item => item.BranchCode == pagetype)
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
            getproductsAll()

        }
        else {
            getproducts(mycategoryid)
        }
        getcategories()
        window.scrollTo(0, 0)
    }, [mycategoryid])


    const navigate = useNavigate();

    const [search, setsearch] = React.useState('');


    const [sortproductsby, setsortproductsby] = React.useState('Latest')
    const [showpopup, setShowPopup] = useRecoilState(clearCartState)


    return (
        <div className='categorymenu'>
            <Navbar />
            <StaticBanner name='makanmart' />
            {
                showpopup && <PopupYesOrNo message={`Found Catering Menu items in your cart, for adding Makan Mart items into cart it's required to clear cart first.`}
                    yes={'Clear Cart'} no={'Cancel'} taskfunc={'clearcart'}
                />
            }
            <div className='c2'>
                <div className='c2col1'>
                    <h2 className='head3'>Menu Categories</h2>
                    <div className='c12'>
                    {
                            mycategoryid == 'All' ?
                                <p className='active'>All</p>
                                :
                                <p onClick={() => {
                                    // setselectedCategory('All')
                                    // getproducts('')
                                    navigate(`/menu/makanmart/All`)
                                }}>All</p>
                        }
                        {
                            categories.map((category) => {
                                return (
                                    <>
                                         {
                                            mycategoryid == category.CategoryId ?
                                                <p className='active'>{category.CategoryName}</p>
                                                :
                                                <p onClick={() => {
                                                    console.log(category)
                                                    // setselectedCategory(category.CategoryName)
                                                    // getproducts(category.CategoryId)
                                                    navigate(`/menu/makanmart/${category.CategoryId}`)
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

                                        .map((product,index) => {
                                            return (
                                                <ProductCard product={product} key={index} pagetype={pagetype}/>
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