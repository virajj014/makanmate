import React from 'react'
import { useParams } from 'react-router-dom'
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


    const getproductdatabyid = async () => {
        fetch(process.env.REACT_APP_BACKEND_URL + `/ProductRest/Getbycode?OrganizationId=1&ProductId=${prodid}`)
            .then(res => res.json())
            .then(res => {
                if (res.Code == 200) {
                    console.log(res)
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
                    checkifincart(res?.Data[0])

                }
            })
            .catch(err => {
                console.log(err)
            })
    }



    const addtocart = () => {
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
        toast.success('Item added to cart')
        window.location.reload()
    }

    const [itemincart, setitemincart] = React.useState(false)
    const checkifincart = (proddata) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            let itemincart = cart.find(item => item.productdata.ProductId === proddata.ProductId)
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

                    <div className='addons1'>
                        <h1>Some Addon name</h1>
                        <p>Min 2 - Limit 4</p>
                        {/* checkbox */}
                        <div className='checkbox'>
                            <input type='checkbox' id='check1' />
                            <label htmlFor='check1'>Some Item</label>
                        </div>


                        <div className='checkbox'>
                            <input type='checkbox' id='check2' />
                            <label htmlFor='check2'>Some Item</label>
                        </div>

                        <div className='checkbox'>
                            <input type='checkbox' id='check3' />
                            <label htmlFor='check3'>Some Item</label>
                        </div>
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
                                    <div className='formgroup'>
                                        <label htmlFor='name'>Name</label>
                                        <input type='text' id='name' />
                                    </div>

                                    <div className='formgroup'>
                                        <label htmlFor='email'>Email</label>
                                        <input type='email' id='email' />
                                    </div>

                                    <div className='formgroup'>
                                        <label htmlFor='review'>Review</label>
                                        <textarea id='review' />
                                    </div>

                                    <button>Submit</button>
                                </form>

                                <div className='review'>
                                    <div className='reviewhead'>
                                        <p className='name'>John Doe</p>
                                        <p className='date'>12/12/2020</p>

                                    </div>
                                    <p className='reviewdesc'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                                    </p>
                                </div>

                                <div className='review'>
                                    <div className='reviewhead'>
                                        <p className='name'>John Doe</p>
                                        <p className='date'>12/12/2020</p>

                                    </div>
                                    <p className='reviewdesc'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                                    </p>
                                </div>

                                <div className='review'>
                                    <div className='reviewhead'>
                                        <p className='name'>John Doe</p>
                                        <p className='date'>12/12/2020</p>

                                    </div>
                                    <p className='reviewdesc'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                                    </p>
                                </div>

                            </div>
                            :
                            <p className='desc'>
                                {productdata.ProductShortDesc ?
                                    productdata.ProductShortDesc
                                    :
                                    <span>
                                        Basically, tom yum is a soup dish originated in Laos and Thailand. It is also known as ‘tom yam’ in Royal Thai General System of Transcription. Since the time of its origin, this soup is popular in Thai cuisine as well as in neighboring cuisines such as Malay cuisine as well as in cuisine of Singapore. The term tom yum is also associated with the financial crisis aroused in Asia in the year 1997. The crisis is often called as ‘Tom Yum Goong Crisis’.
                                        <br />
                                        <br />
                                        Tom yum is referred to the two identical soups hailing from South East Asian countries. The basic characteristics of this soup are the hot and sour taste along with fragrance of distinct herbs.
                                        <br />
                                        <br />

                                        Preparation method:<br /> 1) Thaw fully<br />
                                        2) Heat on stovetop (stir frequently) or microwave (stir halfway through)<br />
                                        3) Serve
                                        <br />
                                        <br />


                                        – Suitable for 1 pax only<br />
                                        – No added MSG and preservatives<br />
                                        – Product comes frozen<br />

                                        <br />
                                        Every soup is prepared beforehand in our kitchen and packed. Every pack is filled with ingredients and is suitable for home cooking as there are no preservatives added. Recommended for housewife or young adult that wishes to cook at home.
                                        <br /><br />
                                        Ingredients: Prawn, Dory Fish, Mussel, Tom Yum leaf, Squid, Red Chili & Green Chili, Garlic, Onion, Tom Yum Soup, Lemongrass.
                                    </span>
                                }
                            </p>
                    }
                </div>
                <div className='right'>
                    <h1 className='head2'>Addons</h1>
                    <div className='addons'>
                        <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div>

                        <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div>

                        <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div>

                        <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div>

                        <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div>

                        <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div>

                        <div className='addon'>
                            <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                            <p className='addonname'>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                            <p className='addonprice'>$25</p>
                            <button className='addonbtn'>Add</button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
            <ToastContainer />

        </div>
    )
}

export default ProductPage