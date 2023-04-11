import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Footer from '../COMPONENTS/Footer/Footer'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './ProductPage.css'
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
    const { prodid } = useParams()
    const [imageset, setimageset] = React.useState(null)
    const [productdata, setproductdata] = React.useState([])
    const [activeimage, setactiveimage] = React.useState({})

    const [count, setcount] = React.useState(1)
    const [showreview, setshowreview] = React.useState(false)
    const [customaddons, setcustomaddons] = React.useState([])
    const [selectedcustomaddons, setselectedcustomaddons] = React.useState([])


    const getproductdatabyid = async () => {
        // console.log(process.env.REACT_APP_BACKEND_URL + `/ProductRest/Getbycode?OrganizationId=1&ProductId=${prodid}`)
        // console.log(prodid)
        fetch(process.env.REACT_APP_BACKEND_URL + `/ProductRest/Getbycode?OrganizationId=1&ProductId=${prodid}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                if (res.Code == 200) {
                    // console.log(res?.Data[0].CategoryId)
                    setproductdata(res?.Data[0])
                    setimageset([
                        {
                            id: 1,
                            image: res?.Data[0].ProductImageURL
                        }
                    ])
                    setactiveimage({
                        id: 1,
                        image: res?.Data[0].ProductImageURL
                    })
                    getcategoryaddons(res?.Data[0].CategoryId)
                    if (res?.Data[0]?.CustomAddOnDetail.length > 0) {
                        // setcustomaddons(res?.Data[0]?.CustomAddOnDetail)
                        getcustomaddons(res?.Data[0]?.CustomAddOnDetail)
                        // console.log(res?.Data[0])

                    }

                    checkifincart(res?.Data[0])
                    
                }
            })
            .catch(err => {
                console.log(err)
            })
    }





    const [itemincart, setitemincart] = React.useState(false)
    const checkifincart = (proddata) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            let itemincart = cart.find(item => item?.productdata?.ProductId === proddata.ProductId)
            if (itemincart) {
                setitemincart(true)
            }
            else {
                setitemincart(false)
            }
        }
        else {
            setitemincart(false)
        }
    }

    React.useEffect(() => {
        //scroll to top
        window.scrollTo(0, 0)
        getproductdatabyid()
    }, [])




    const getcustomaddons = async (addons) => {
        let addonstemp = []
        addons.forEach(async element => {
            await fetch(process.env.REACT_APP_BACKEND_URL + `/MasterCustomAddon/Getbycode?OrganizationId=1&TranNo=${element.CustomAddOnCode}`)
                .then(res => res.json())
                .then(res => {
                    // if (res.Code == 200) {
                    //     addonstemp.push(res?.Data[0])
                    // }
                    if (res.Data.length > 0) {
                        addonstemp = [...addonstemp, res?.Data[0]]
                        // console.log(res?.Data[0])
                        setcustomaddons(addonstemp)
                        // console.log(addonstemp)
                    }
                })
        })


    }

    // -------------------------------------------------------------CATEGORY ADDONS-------------------------------------------------------------


    const [categoryaddons, setcategoryaddons] = React.useState([])
    const getcategoryaddons = async (categoryid) => {
        await fetch(process.env.REACT_APP_BACKEND_URL + `/CategoryR/GetCategoryAddOnDetail?OrganizationId=1&CategoryId=${categoryid}`)
            .then(res => res.json())
            .then(res => {
                console.log(categoryid)
                if (res.Code == 200) {

                    let categoryproducts = [];
                    res?.Data?.forEach(async element => {
                        fetch(process.env.REACT_APP_BACKEND_URL + `/ProductRest/Getbycode?OrganizationId=1&ProductId=${element.ProductCode}`)
                            .then(res => res.json())
                            .then(res => {
                                // console.log(res.Data[0])
                                if (res.Code == 200) {
                                    categoryproducts = [...categoryproducts, res?.Data[0]]
                                    setcategoryaddons(categoryproducts)
                                    // console.log(categoryproducts)
                                }
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                    )
                }
                // console.log(categoryaddons)
            })

            .catch(err => {
                console.log(err)
            })
    }
    const [selectedcategoryaddon, setselectedcategoryaddon] = React.useState([])


    const [rating, setrating] = React.useState(0)

    const ProductReviews = [
        {
            "ReviewId": 1,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 5,
            "Date": "2021-08-01",
            "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Viraj",
            "Email": "",
            "Rating": 1,
            "Date": "2021-08-01",
            "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "2021-08-01",
            "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    ]
    const ProductDescription = `
    <h1>About this item</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br><br>
    
    <ol type='1'>
        <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
        <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
    </ol>

    <h1>Product Details</h1>
    <ul>
        <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
        <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
        <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
        </ul>
    `





    // add to cart
    const addtocart = () => {

        // console.log(selectedcustomaddons)
        // add to local storage
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            // check if item is already in cart
            // let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
            cart = [...cart, {
                productdata, quantity: count, url: window.location.href,
                customaddons: selectedcustomaddons,
                categoryaddons: selectedcategoryaddon
            }]
            console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        else {
            // create cart and add item object to cart
            cart = [{
                productdata, quantity: count, url: window.location.href,
                customaddons: selectedcustomaddons,
                categoryaddons: selectedcategoryaddon
            }]
            console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        toast.success('Item added to cart')
        // window.location.reload()
        checkifincart()

        // reload in 2 seconds
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }

    return (
        <div className='productpage'>
            <Navbar />
            <div className='pc1'>
                <div className='c11'>
                    <div className='imgset'>
                        {imageset && imageset?.map((item, index) => {
                            return (
                                <div className='imgsmall'
                                    onClick={() => {
                                        setactiveimage(item)
                                    }}
                                    key={index}
                                >
                                    <img src={item?.image}
                                        className={activeimage.id === item.id ? 'active' : ''}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className='imgbig'>
                        <img src={activeimage.image} />
                    </div>
                </div>
                <div className='c12'>
                    <h1 className='head1'>{productdata.ProductName}</h1>


                    <div className='c121'>
                        <p className='price'>
                            ${productdata.SalesPrice * count}

                            <span>${((productdata.SalesPrice + (productdata.SalesPrice) * (0.2)) * count).toFixed(2)}</span>
                        </p>

                        <div className='incrdecr'>
                            <button className='decr'
                                onClick={() => {
                                    if (count > 1) {
                                        setcount(count - 1)
                                    }
                                }}
                            >-</button>
                            <p className='count'>{
                                count
                            }</p>
                            <button className='incr'
                                onClick={() => {
                                    setcount(count + 1)
                                }}
                            >+</button>
                        </div>
                    </div>

                    <div className='btncont'>
                        {
                            itemincart ?
                                <button
                                    onClick={() => {
                                        window.location.href = '/cart'
                                    }}
                                >Go To Cart</button>
                                :
                                <button
                                    onClick={() => {
                                        addtocart()
                                    }}
                                >Add to cart</button>
                        }
                        <button >Buy now</button>
                    </div>


                    <div className='addons1out'>
                        {
                            customaddons?.map((item, index) => {
                                // console.log(customaddons)
                                return (
                                    <div className='addons1'
                                        key={index}
                                    >
                                        <h1>{item.Title}</h1>
                                        <p>Min {item.Minimum} - Limit {item.Limit}</p>
                                        {
                                            item.CustomAddonDetail && item.CustomAddonDetail?.filter(
                                                item => item.ProductName !== null
                                            ).length > 0 ?

                                                item.CustomAddonDetail && item.CustomAddonDetail?.filter(
                                                    item => item.ProductName !== null
                                                )
                                                    .map((item1, index1) => {
                                                        // console.log(item1)

                                                        return (
                                                            <div className='checkbox'>
                                                                <input type='checkbox' id={item1.ReferenceCode}
                                                                    onChange={(e) => {
                                                                        if (e.target.checked) {
                                                                            setselectedcustomaddons([...selectedcustomaddons, item1])
                                                                        }
                                                                        else {
                                                                            let temp = selectedcustomaddons.filter(item => item.ReferenceCode !== item1.ReferenceCode)
                                                                            setselectedcustomaddons(temp)
                                                                        }
                                                                    }}
                                                                />
                                                                <label htmlFor={item1.ReferenceCode}>{item1.ProductName}</label>
                                                            </div>
                                                        )
                                                    })

                                                :

                                                <p>No Addons Available</p>
                                        }

                                        { }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='pc2'>
                <div className='left'>
                    {
                        showreview ?
                            <div className='tabs'

                            >
                                <button className='inactive'
                                    onClick={() => {
                                        setshowreview(false)
                                    }}
                                >Description</button>
                                <button className='active'
                                >Reviews</button>
                            </div>
                            :
                            <div className='tabs'>
                                <button className='active'
                                >Description</button>
                                <button className='inactive'

                                    onClick={() => {
                                        setshowreview(true)
                                    }}
                                >Reviews</button>

                            </div>
                    }
                    {
                        showreview ?
                            <div className='reviewcont'>
                                <form>
                                    <div className='fromgroup'>
                                        <label htmlFor="">Name</label>
                                        <input type="text" />
                                    </div>

                                    <div className='fromgroup'>
                                        <label htmlFor="">Email</label>
                                        <input type="email" />
                                    </div>

                                    <div className='fromgroup'>
                                        <label htmlFor="">Review</label>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>

                                    <div className='fromgroup'>
                                        <label htmlFor="">Rating</label>
                                        <div className='rating'>
                                            <div className='star'
                                                onClick={() => {
                                                    setrating(1)
                                                }}
                                            >
                                                {
                                                    rating >= 1 ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>

                                                }
                                            </div>

                                            <div className='star' onClick={() => {
                                                setrating(2)
                                            }}>
                                                {
                                                    rating >= 2 ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>

                                                }
                                            </div>
                                            <div className='star' onClick={() => {
                                                setrating(3)
                                            }}>
                                                {
                                                    rating >= 3 ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>

                                                }
                                            </div>
                                            <div className='star' onClick={() => {
                                                setrating(4)
                                            }}>
                                                {
                                                    rating >= 4 ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>

                                                }
                                            </div>
                                            <div className='star' onClick={() => {
                                                setrating(5)
                                            }}>
                                                {
                                                    rating >= 5 ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>

                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <button>Submit</button>
                                </form>


                                <div className='allreview'>
                                    <h1 className='head1'>Product Reviews</h1>
                                    {ProductReviews &&
                                        ProductReviews.map((item, index) => {
                                            return (
                                                <div className='review'>
                                                    <div className='reviewhead'>
                                                        <p className='name'>{item.Name}</p>
                                                        <div className='rating1'>
                                                            <div className='star'

                                                            >
                                                                {
                                                                    item.Rating >= 1 ?
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>
                                                                        :
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>

                                                                }
                                                            </div>
                                                            <div className='star'

                                                            >
                                                                {
                                                                    item.Rating >= 2 ?
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>
                                                                        :
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>

                                                                }
                                                            </div>
                                                            <div className='star'

                                                            >
                                                                {
                                                                    item.Rating >= 3 ?
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>
                                                                        :
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>

                                                                }
                                                            </div>
                                                            <div className='star'

                                                            >
                                                                {
                                                                    item.Rating >= 4 ?
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>
                                                                        :
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>

                                                                }
                                                            </div>


                                                            <div className='star'

                                                            >
                                                                {
                                                                    item.Rating >= 5 ?
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>
                                                                        :
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                        </svg>

                                                                }
                                                            </div>
                                                        </div>
                                                        <span className='date'>{item.Date}</span>
                                                    </div>

                                                    <div className='reviewbody'>
                                                        {item.Review}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            :
                            <p className='desc'>
                                {/* {ProductDescription} */}

                                {/* product descrition is a html code */}
                                <div dangerouslySetInnerHTML={{ __html: ProductDescription }} />
                            </p>
                    }
                </div>
                {
                    categoryaddons && categoryaddons.length > 0 && <div className='right'>
                        <h1 className='head2'>Addons</h1>
                        <div className='addons'>
                            {/* <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div> */}


                            {
                                categoryaddons
                                    .map((product,index) => {
                                        // console.log(product)
                                        return (
                                            <div className='product1'
                                                key={index}
                                            >
                                                <div className='product1image'>
                                                    <img src={product.ProductImageURL} alt='product' />
                                                </div>
                                                <div className='product1info'>
                                                    <h3>{product.ProductName}</h3>
                                                    <p>$ {product.SalesPrice}</p>
                                                </div>
                                                {
                                                    selectedcategoryaddon.find((item) => item.product.ProductId === product.ProductId) ?
                                                        <div
                                                            className='product1incredecre'
                                                        >
                                                            <button
                                                                onClick={() => {
                                                                    // find the index of the product in the selectedcategoryaddon array
                                                                    const index = selectedcategoryaddon.findIndex((item) => item.product.ProductId === product.ProductId)

                                                                    // if the quantity is 1 then remove the product from the array
                                                                    if (selectedcategoryaddon[index].quantity === 1) {
                                                                        const newselectedcategoryaddon = selectedcategoryaddon.filter((item) => item.product.ProductId !== product.ProductId)
                                                                        setselectedcategoryaddon(newselectedcategoryaddon)
                                                                    }
                                                                    else {
                                                                        const newselectedcategoryaddon = [...selectedcategoryaddon]
                                                                        newselectedcategoryaddon[index].quantity = newselectedcategoryaddon[index].quantity - 1
                                                                        setselectedcategoryaddon(newselectedcategoryaddon)
                                                                    }
                                                                }}
                                                            >-</button>
                                                            <span>{
                                                                selectedcategoryaddon.find((item) => item.product.ProductId === product.ProductId).quantity
                                                            }</span>
                                                            <button
                                                                onClick={() => {
                                                                    const index = selectedcategoryaddon.findIndex((item) => item.product.ProductId === product.ProductId)
                                                                    const newselectedcategoryaddon = [...selectedcategoryaddon]
                                                                    newselectedcategoryaddon[index].quantity = newselectedcategoryaddon[index].quantity + 1
                                                                    setselectedcategoryaddon(newselectedcategoryaddon)
                                                                }}
                                                            >+</button>
                                                        </div>
                                                        :
                                                        <button
                                                            onClick={() => {
                                                                setselectedcategoryaddon(
                                                                    [
                                                                        ...selectedcategoryaddon,
                                                                        {
                                                                            quantity: 1,
                                                                            product: product
                                                                        }
                                                                    ]
                                                                )
                                                            }}
                                                        >Add</button>
                                                }

                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                }
            </div>


            <Footer />
            <ToastContainer />

        </div>
    )
}

export default ProductPage