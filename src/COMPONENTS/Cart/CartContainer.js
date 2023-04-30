import React from 'react'
import { useState } from 'react'
import './CartContainer.css'

const CartContainer = () => {
    const [cartdata, setcartdata] = useState([])
    const [subtotal, setsubtotal] = React.useState(0)
    const [shipping, setshipping] = React.useState(0)
    const [tax, settax] = React.useState(0)

    const getcartitemsfromlocalstorage = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            console.log(cart)
            setcartdata(cart)

            let total = 0
            cart.forEach(item => {
                total += (item?.productdata?.SalesPrice * item?.quantity)
                let customaddontotal = 0
                item?.productdata?.customaddons?.forEach(addon => {
                    customaddontotal += addon.Price * item.quantity
                })
                total += customaddontotal
            })

            setsubtotal(total)
            setshipping(80)
            settax(total * 0.08 + 80 * 0.08)
        }
        else {
            console.log('no items in cart')
        }
    }
    const removeitemfromcart = (index) => {
        let temp = cartdata
        temp.splice(index, 1)
        console.log(temp)
        // console.log(index)
        localStorage.setItem('cart', JSON.stringify(temp))
        setcartdata(temp)
        getcartitemsfromlocalstorage()
    }
    React.useEffect(() => {
        getcartitemsfromlocalstorage()
        // checklogin()
    }, [])
    return (
        <div className='cartcont'>
            {/* {
                cartdata && cartdata.length > 0 ?
                    <table className='carttable'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartdata?.map((item, index) => {
                                    return (
                                        <tr key={index}
                                            className='cartitemrow'
                                        >
                                            <td>
                                                <div className='product'
                                                    onClick={() => {
                                                        console.log(item.productdata)
                                                        window.location.href = `/product/${item.productdata.ProductId}`
                                                    }}
                                                >
                                                    <img src={item.productdata.ProductImageURL
                                                    } alt='product1' />
                                                    <div className='productnameandaddon'>
                                                        <p>{item.productdata.ProductName}</p>
                                                        {
                                                            item?.customaddons?.map((addon, index) => {
                                                                return (
                                                                    <span>
                                                                        {addon.ProductName} - - ${addon.Price}
                                                                    </span>
                                                                )
                                                            })

                                                        }
                                                        {
                                                            item?.categoryaddons?.map((addon, index) => {
                                                                console.log(addon)
                                                                return (
                                                                    <div className='product'>
                                                                        <img src={addon.product.ProductImageURL
                                                                        } alt='product1' />
                                                                        <div className='productnameandaddon'>
                                                                            <p>{addon.product.ProductName}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='quantity'>
                                                    <button className='minus'
                                                        onClick={() => {
                                                            let newcartdata = [...cartdata]
                                                            // console.log(newcartdata[index].quantity)
                                                            if (newcartdata[index].quantity > 1) {
                                                                newcartdata[index].quantity--
                                                                setcartdata(newcartdata)
                                                                localStorage.setItem('cart', JSON.stringify(newcartdata))
                                                                getcartitemsfromlocalstorage()

                                                            }
                                                        }}
                                                    >-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className='plus'
                                                        onClick={() => {
                                                            let newcartdata = [...cartdata]
                                                            // console.log(newcartdata[index].quantity)
                                                            newcartdata[index].quantity++
                                                            setcartdata(newcartdata)
                                                            localStorage.setItem('cart', JSON.stringify(newcartdata))
                                                            getcartitemsfromlocalstorage()
                                                        }}
                                                    >+</button>
                                                </div>
                                            </td>
                                            <td>
                                                <p>$ {item.productdata.SalesPrice ? item.productdata.SalesPrice.toFixed(2) : 0.00}</p>
                                            </td>

                                            <td>
                                                <p>$ {
                                                    ((item.productdata.SalesPrice) * item.quantity).toFixed(2)
                                                }</p>
                                            </td>

                                            <td>
                                                <div className='delbtn'
                                                    onClick={() => {
                                                        removeitemfromcart(index)
                                                    }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                                    </svg>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                            <tr>
                                <td></td>
                                <td></td>
                                <td className='totaltableleft'>
                                    Total
                                </td>
                                <td className='totaltableright'>
                                    $ {subtotal.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='totaltableleft'>
                                    Shipping
                                </td>
                                <td className='totaltableright'>
                                    $ {shipping.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='totaltableleft'>
                                    Subtotal
                                </td>
                                <td className='totaltableright'>
                                    $ {(shipping + subtotal).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='totaltableleft'>
                                    Tax
                                </td>
                                <td className='totaltableright'>
                                    $ {tax.toFixed(2)}
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td className='totaltableleft'>
                                    Net Total
                                </td>
                                <td className='totaltableright'>
                                    $ {(subtotal + shipping + tax).toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <div className='emptycart'>
                        <p>Your Cart is empty</p>
                    </div>
            } */}


            {
                cartdata && cartdata.length > 0 ?

                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartdata.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <div className='product'>
                                                    <img src={item.productdata.ProductImageURL
                                                    } alt='product1' />
                                                    <p>{item.productdata.ProductName}
                                                        <br></br>
                                                        {item?.customaddons?.length > 0 && <div className='line'></div>}
                                                        {
                                                            item?.customaddons?.map((addon, index) => {
                                                                return (
                                                                    <span>
                                                                        {addon.ProductName}
                                                                    </span>
                                                                )
                                                            })

                                                        }

                                                    </p>

                                                </div>

                                            </td>
                                            <td>
                                                <div className='incredecre'>
                                                    <button className='minus'>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className='plus'>+</button>
                                                </div>
                                                {
                                                    item?.categoryaddons?.map((addon, index) => {
                                                        return (
                                                            <div className='incredecre'>
                                                                <button className='minus'>-</button>
                                                                <span>{addon.quantity}</span>
                                                                <button className='plus'>+</button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </td>
                                            <td>
                                                <p>$ {item.productdata.SalesPrice ? item.productdata.SalesPrice.toFixed(2) : 0.00}</p>

                                                {
                                                    item?.categoryaddons?.map((addon, index) => {
                                                        return (
                                                            <p>$ {addon.product.SalesPrice ? addon.product.SalesPrice.toFixed(2) : 0.00}</p>
                                                        )
                                                    })

                                                }
                                            </td>

                                            <td>
                                                <p>$ {
                                                    ((item.productdata.SalesPrice) * item.quantity).toFixed(2)
                                                }</p>
                                                {
                                                    item?.categoryaddons?.map((addon, index) => {
                                                        return (
                                                            <p>$ {
                                                                ((addon.product.SalesPrice) * addon.quantity).toFixed(2)
                                                            }</p>
                                                        )
                                                    })
                                                }
                                            </td>

                                            <td>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 delbtn"
                                                    onClick={() => {
                                                        removeitemfromcart(index)
                                                    }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                                </svg>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    :
                    <div className='emptycart'>
                        <p>Your Cart is empty</p>
                    </div>
            }
        </div>
    )
}

export default CartContainer