import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import StaticBanner from '../COMPONENTS/Banner/StaticBanner'
import Footer from '../COMPONENTS/Footer/Footer'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './Cart.css'
const Cart = () => {
    const [active, setActive] = React.useState(1);
    const [cartdata, setcartdata] = React.useState([])
    const [subtotal, setsubtotal] = React.useState(0)
    const [shipping, setshipping] = React.useState(0)
    const [tax, settax] = React.useState(0)
    const [paymentmethod, setpaymentmethod] = React.useState(null)
    const [selectedaddress, setselectedaddress] = React.useState(null)
    const [tncagreed, settncagreed] = React.useState(false)
    const [ordersuccessful, setordersuccessful] = React.useState(null)

    const [deliverydate, setdeliverydate] = React.useState(
        // 2 days from today
        new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    )
    const getcartitemsfromlocalstorage = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            // console.log(cart)
            setcartdata(cart)

            let total = 0
            cart.forEach(item => {
                total += (
                    item.productdata.SalesPrice
                )
                    *
                    item.quantity
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

    const [user, setuser] = React.useState({})
    const checklogin = () => {
        let user = localStorage.getItem('token')
        user = JSON.parse(localStorage.getItem('token'))

        // console.log(user)

        if (user && user[0].B2CCustomerId) {
            // console.log(user[0])
            setuser(user[0])
            getaddress(user[0])
            return true
        }
        else {
            console.log('not logged in')
            toast.error('Please Login First')
            return false
        }
    }
    const [savedaddresses, setsavedaddresses] = React.useState([])
    const getaddress = (userdata) => {
        // console.log(userdata)
        let mainaddress = {
            AddressLine1: userdata.AddressLine1,
            AddressLine2: userdata.AddressLine2,
            AddressLine3: userdata.AddressLine3,
            EmailId: userdata.EmailId,
        }
        let otheraddress = [];
        fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerDeliveryAddress/GetAll?OrganizationId=1&CustomerId=' + userdata.B2CCustomerId)
            .then(res => res.json())
            .then(data => {
                if (data.Data !== null) {
                    otheraddress = data.Data
                    let alladdress = [
                        ...otheraddress,
                        mainaddress
                    ]
                    setsavedaddresses(alladdress)
                    // console.log(alladdress)

                }
                else {
                    let alladdress = [
                        mainaddress
                    ]
                    setsavedaddresses(alladdress)
                    // console.log(alladdress)

                }
            })
        // let alladdress = []
        // if (userdata.Address) {
        //     alladdress = [
        //         ...userdata.Address,
        //         mainaddress
        //     ]
        //     setsavedaddresses(alladdress)
        // }
        // else {
        //     alladdress = [
        //         mainaddress
        //     ]
        //     setsavedaddresses(alladdress)
        // }

    }

    React.useEffect(() => {
        getcartitemsfromlocalstorage()
        checklogin()
    }, [])
    useEffect(() => {
        // window.scrollTo('150vh', 50)
    }, [active])


    const [newaddress, setnewaddress] = React.useState({
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
    })
    const [postalcode, setpostalcode] = React.useState('')
    const addnewaddress = () => {
        let temp =
        {
            "OrgId": 1,
            "DeliveryId": 0,
            "CustomerId": user.B2CCustomerId,
            "Name": user.B2CCustomerName,
            "AddressLine1": newaddress.AddressLine1,
            "AddressLine2": newaddress.AddressLine2,
            "AddressLine3": newaddress.AddressLine3,
            "CountryId": "string",
            "PostalCode": postalcode,
            "Mobile": user.MobileNo,
            "Phone": "string",
            "Fax": "string",
            "IsDefault": true,
            "IsActive": true,
            "CreatedBy": "string",
            "CreatedOn": new Date(),
            "ChangedBy": "string",
            "ChangedOn": new Date(),
        }

        fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerDeliveryAddress/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(temp)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.Status === true && data.Code === 200) {
                    toast.success('Address Added')
                    getaddress(user)
                }
                else {
                    toast.error('Error Adding Address')
                }
            })
        // console.log(temp)

    }
    const checkaddress = () => {
        // selectedaddress
        console.log(selectedaddress)
        if (selectedaddress === null) {
            toast.error('Please Select Address')
            return false
        }
        else {
            return true
        }
    }
    const checkdeliverydate = () => {
        // convert delivery date to date object
        let deliverydateobj = new Date(deliverydate)

        if (deliverydate === '' || deliverydateobj === 'Invalid Date') {
            toast.error('Please Select Delivery Date')
            return false
        }
        // get current date
        let currentdate = new Date()
        // get difference in days
        let diff = deliverydateobj.getDate() - currentdate.getDate()

        if (diff < 2) {
            toast.error('Delivery Date Should be atleast 2 days from today')
            return false
        }
        else {
            return true
        }
    }
    const checkpaymentmethod = () => {
        if (paymentmethod == null) {
            toast.error('Please Select Payment Method')
            return false
        }
        else {
            return true
        }
    }
    const checktnc = () => {
        if (tncagreed == false || tncagreed == null) {
            toast.error('Please Accept Terms and Conditions')
            return false
        }
        else {
            return true
        }
    }


    const converttofloat = (value) => { 
        // console.log(parseFloat(value) + 0.001)
        value = value.toFixed(2)
        // console.log(value , parseFloat(value) + 0.001)
        // check if value has decimal
        if (!value.includes('.00')) {
            console.log(value , parseFloat(value))
            return parseFloat(value)
        }
        else {
            console.log(value , parseFloat(value) + 0.001)
            return parseFloat(value) + 0.001
        }
    }


    const placeorder = async () => {
        let orderdetail = [];
        await cartdata.map((item, index) => {
            let temp = {
                "OrgId": 1,
                "OrderNo": "",
                "SlNo": index + 1,
                "ProductId": item.productdata.ProductId,
                "ProductCode": item.productdata.ProductId,
                "ProductName": item.productdata.ProductName,
                "Qty": item.quantity,
                "Price": converttofloat(item.productdata.SalesPrice),
                "Foc": 0,
                "Total": converttofloat(item.productdata.SalesPrice) * item.quantity,
                "ItemDiscount": 0,
                "ItemDiscountPerc": 0,
                "SubTotal": converttofloat(item.productdata.SalesPrice) * item.quantity,
                "Tax": converttofloat((item.productdata.TaxPerc) / 100 * (item.productdata.SalesPrice) * (item.quantity)),
                "NetTotal": converttofloat(
                    ((item.productdata.TaxPerc) / 100 * (item.productdata.SalesPrice) * (item.quantity)) 
                    +(item.productdata.SalesPrice) * item.quantity),
                "TaxCode": 1,
                "TaxType": "e",
                "TaxPerc": item.productdata.TaxPerc,
                "Remarks": "",
                "CreatedBy": "admin",
                "ChangedBy": "admin",
                "Weight": 0
            }
            orderdetail.push(temp)
        })

        let orderobj = {
            "OrgId": 1,
            "BrachCode": cartdata[0].productdata.BranchCode ? cartdata[0].productdata.BranchCode : 'MT',
            "OrderNo": "",
            "OrderDate": "2023-03-12",
            "CustomerId": user.B2CCustomerId,
            "CustomerName": user.B2CCustomerName,
            "CustomerAddress": `${selectedaddress.AddressLine1} ${selectedaddress.AddressLine2} ${selectedaddress.AddressLine3}`,
            "PostalCode": selectedaddress.PostalCode,
            "TaxCode": 1,
            "TaxType": "e",
            "TaxPerc": 0,
            "CurrencyCode": "GD",
            "CurrencyRate": 1,
            "Total": subtotal * 1.00,
            "BillDiscount": 0,
            "BillDiscountPerc": 0,
            "SubTotal": subtotal * 1.00,
            "Tax": tax,
            "NetTotal": parseFloat((subtotal + tax + shipping).toFixed(2)) * 1.00,
            "PaymentType": paymentmethod,
            "PaidAmount": 0,
            "Remarks": "string",
            "IsActive": true,
            "CreatedBy": "admin",
            "ChangedBy": "admin",
            "Status": 0,
            "CustomerShipToId": user.B2CCustomerId,
            "CustomerShipToAddress": `${selectedaddress.AddressLine1} ${selectedaddress.AddressLine2} ${selectedaddress.AddressLine3}`,
            "Latitude": 0,
            "Longitude": 0,
            "Signatureimage": "",
            "Cameraimage": "",
            "OrderDateString": "",
            "CreatedFrom": "W",
            "RatingValue": 0,
            "CustomerFeedback": "",
            "OrderDetail": orderdetail
        }

        // console.log(orderobj)

        fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerOrder/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderobj)
        })
            .then(response => response.json())
            .then(data => {
                console.log('orderobj ', orderobj)
                console.log(data)
                if (data.Status === true && data.Data) {
                    //  setordersuccessful({})
                    toast.success('Order Placed Successfully')
                    getsuccessfulorder(data.Data)
                }
                else {
                    toast.error('Error in Placing Order')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })


        // console.log(orderdetail)
    }

const [ordersuccessitems, setordersuccessitems] = useState([])
    const getsuccessfulorder = (ordrid) => {
        fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerOrder/Getbycode?OrganizationId=1&OrderNo=' + ordrid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.Status === true && data.Data) {
                    setordersuccessful(data.Data[0])
                    // console.log(data.Data[0].OrderDetail)
                    setordersuccessitems(data.Data[0].OrderDetail)
                    setActive(4)
                }
                else {
                    toast.error('Error in getting order details')
                }
            })
            .catch((error) => {
                toast.error('Error in getting order details')
            })
    }
    return (
        <div className='cart'>
            <Navbar pagename={'cart'} />
            <StaticBanner name="Your Cart" />
            <div className='progress'>
                {
                    active === 1 ?
                        <div className='c11'
                            onClick={() => {
                                checklogin() && setActive(1)
                            }
                            }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span>My Cart</span>
                            {/* <p>My Cart</p> */}
                        </div>
                        :
                        <div className='c1'
                            onClick={() => checklogin() && setActive(1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span>My Cart</span>
                        </div>
                }
                {
                    active === 2 ?
                        <div className='c11'
                            onClick={() => checklogin() && setActive(2)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                            <span>Shipping Info</span>
                        </div>
                        :
                        <div className='c1'
                            onClick={() => checklogin() && setActive(2)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                            <span>Shipping Info</span>
                        </div>
                }

                {
                    active === 3 ?
                        <div className='c11'
                            onClick={() => checklogin() && setActive(3)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <span>Payment</span>
                        </div>
                        :
                        <div className='c1'
                            onClick={() => {

                                let temp = checklogin()
                                if (checkdeliverydate() && temp && checkaddress()) {
                                    setActive(3)
                                }
                            }
                            }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <span>Payment</span>
                        </div>
                }

                {
                    active === 4 ?
                        <div className='c11'
                            onClick={() => checklogin() && setActive(4)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                            <span>Confirmation</span>
                        </div>
                        :
                        <div className='c1'
                            onClick={() => {
                                if (checklogin() && checkpaymentmethod() && checktnc()) {
                                    setActive(4)
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                            <span>Confirmation</span>
                        </div>
                }
            </div>

            {
                active == 1 &&
                <div className='cartcont'>
                    {
                        cartdata.length > 0 ?
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
                                        cartdata.map((item, index) => {
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
                                                            <p>{item.productdata.ProductName}</p>
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
                                                            ((
                                                                item.productdata.SalesPrice
                                                            )
                                                                *
                                                                item.quantity).toFixed(2)
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
                    }
                </div>
            }
            {
                active == 2 &&
                <div className='shippingcont'>
                    <div className='selectdate'>
                        <h2 className='mainhead1'>Select Delivery Date</h2>
                        <input type='date'
                            //  min is 2 days from today
                            min={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}

                            value={deliverydate}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setdeliverydate(e.target.value)
                            }}
                        />
                    </div>
                    <div className='previous'>
                        <h2 className='mainhead1'>Previous Address</h2>

                        {
                            savedaddresses.length > 0 &&
                            savedaddresses.map((item, index) => {
                                return (
                                    <div className='radio' key={index}>
                                        <input type='radio' name='address' id={'address' + index}
                                            onChange={() => {
                                                setselectedaddress(item)
                                            }}
                                        />
                                        <span>{item.AddressLine1 + ' ' + ' ' + item.AddressLine2 + ' ' + item.AddressLine3}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>OR</h3>
                    <div className='shippingadd'>
                        <div className='postalcode'>
                            <input type='text' placeholder='Enter Postal Code'
                                value={postalcode}
                                onChange={(e) => {
                                    setpostalcode(e.target.value)
                                }}
                            />
                            <button
                                onClick={async () => {
                                    let url = `https://developers.onemap.sg/commonapi/search?searchVal=${postalcode}&returnGeom=N&getAddrDetails=Y&pageNum=1`
                                    const response = await fetch(url);
                                    const data = await response.json();
                                    console.log(data.results[0])

                                    setnewaddress({
                                        ...newaddress,
                                        AddressLine3: data.results[0].ADDRESS,
                                    })

                                }}

                            >Fetch</button>
                        </div>
                        <input type='text' placeholder='Enter Address Line 1'
                            value={newaddress.AddressLine1}
                            onChange={(e) => {
                                setnewaddress({ ...newaddress, AddressLine1: e.target.value })
                            }}
                        />
                        <input type='text' placeholder='Enter Address Line 2'
                            value={newaddress.AddressLine2}
                            onChange={(e) => {
                                setnewaddress({ ...newaddress, AddressLine2: e.target.value })
                            }}
                        />
                        <input type='text' placeholder='Enter Address Line 3'
                            value={newaddress.AddressLine3}
                            onChange={(e) => {
                                setnewaddress({ ...newaddress, AddressLine3: e.target.value })
                            }}
                        />
                        <button
                            onClick={() => {
                                addnewaddress()
                            }}
                        >Save</button>
                    </div>
                </div>
            }

            {
                active == 3 &&
                <div className='paymentcont'>

                    <h2 className='mainhead1'>Select Payment Method</h2>

                    <div className='paymenttypes'>
                        <div className='c1'>
                            <input type='radio' name='payment' id='payment1'
                                onChange={() => {
                                    setpaymentmethod('paypal')
                                }}
                            />
                            <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png' alt='paypal' />
                        </div>

                        <div className='c1'>
                            <input type='radio' name='payment' id='payment2'
                                onChange={() => {
                                    setpaymentmethod('razorpay')
                                }}
                            />

                            {/* razor pay */}
                            <img src='data:image/png;base64,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' alt='razorpay' />
                        </div>

                        <div className='c1'>
                            <input type='radio' name='payment' id='payment2'
                                onClick={() => setpaymentmethod('paypal')}
                            />

                            {/* razor pay */}
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNWCF8wJc5uTF53dvaZ1m5vi89PoixSBPAA&usqp=CAU' alt='razorpay' />
                        </div>
                    </div>

                    <div className='paymentagreement'>
                        <input type='checkbox' name='agreement' id='agreement'
                            onChange={() => {
                                settncagreed(!tncagreed)
                            }}
                        />
                        <label htmlFor='agreement'>I agree to the <a>terms and conditions</a></label>
                    </div>

                    <div className='c2'>
                        <span>Net Total</span>
                        &nbsp;&nbsp;
                        <span>$ {(subtotal + shipping + tax).toFixed(2)}</span>
                    </div>

                </div>
            }
            {
                active == 4 &&
                <div className='confirmationcont'>
                    <div className='c1'>
                        {/* tick */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <h2>Your Order has been placed successfully</h2>
                    </div>


                    <div className='c2'>
                        <h2>Order Summary</h2>
                        <div>
                            <p>Order Number</p>
                            <p>{ordersuccessful.OrderNo}</p>
                        </div>

                        <div>
                            <p>Order Date</p>
                            <p>{
                                new Date().toLocaleDateString()
                            }</p>
                        </div>

                        <div>
                            <p>Name</p>
                            <p>{ordersuccessful.CustomerName
                            }</p>
                        </div>

                        <div>
                            <p>Email</p>
                            <p>
                                {
                                    user.EmailId
                                }
                            </p>
                        </div>

                        <div>
                            <p>Order Subtotal</p>
                            <p>$ {ordersuccessful.SubTotal}</p>
                        </div>

                        <div>
                            <p>Payment Method</p>
                            <p>{ordersuccessful.PaymentType}</p>
                        </div>

                        <div>
                            <p>Shipping Address</p>
                            <p>{ordersuccessful.CustomerShipToAddress
                            }</p>
                        </div>

                        <div>
                            <p>Shipping Charges</p>
                            <p>$ 80.00</p>
                        </div>

                        <div>
                            <p>Tax</p>
                            <p>$ {ordersuccessful.Tax}</p>
                        </div>

                        <div>
                            <p>Total</p>
                            <p>$ {ordersuccessful.Total}</p>
                        </div>

                    </div>

                    <div className='c3'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sno.</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    
                                    ordersuccessitems.map((item, index) => {

                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <p>{index + 1}</p>
                                                </td>
                                                <td>
                                                    <p>{item.ProductName}</p>
                                                </td>
                                                <td>
                                                    <p>{item.Qty}</p>
                                                </td>
                                                <td>
                                                    <p>$ {item.Price ? item.Price.toFixed(2) : 0.00}</p>
                                                </td>
                                                <td>
                                                    <p>$ {
                                                        ((
                                                            item.Price
                                                        )
                                                            *
                                                            item.Qty).toFixed(2)
                                                    }</p>
                                                </td>
                                            </tr>
                                            // <tr key={index}>
                                            //     <p>
                                            //         {/* {JSON.stringify(item)} */}
                                            //         {item.ProductName}
                                            //     </p>
                                            // </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <div className='right'>
                            <div>
                                <p>Subtotal</p>
                                <p>$ {subtotal}</p>
                            </div>

                            <div>
                                <p>Shipping</p>
                                <p>$ {shipping}</p>
                            </div>

                            <div>
                                <p>Tax</p>
                                <p>$ {tax.toFixed(2)}</p>
                            </div>

                            <div>
                                <p>Total</p>
                                <p>$ {(subtotal + shipping + tax).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }


            {
                active == 1 && cartdata.length > 0 &&
                <div className='btns'>
                    <div></div>
                    <button className='nextbtn' onClick={() => {
                        let temp = checklogin()
                        if (temp) {
                            setActive(active + 1)
                        }


                    }}>Next</button>
                </div>
            }

            {
                active == 2 &&
                <div className='btns'>
                    <button className='backbtn' onClick={() => checklogin() && setActive(active - 1)}>Back</button>
                    <button className='nextbtn' onClick={() => {
                        let temp = checklogin()
                        if (checkdeliverydate() && temp && checkaddress()) {
                            setActive(active + 1)
                        }

                    }}>Next</button>
                </div>
            }
            {
                active == 3 &&
                <div className='btns'>
                    <button className='backbtn' onClick={() => checklogin() && setActive(active - 1)}>Back</button>
                    <button className='nextbtn' onClick={() => {
                        let temp = checklogin()
                        if (temp && checkpaymentmethod() && checktnc()) {
                            // setActive(active + 1)
                            placeorder()
                        }
                    }}>Next</button>
                </div>
            }

            {
                active == 4 &&
                <div className='btns'>
                    <button className='backbtn' onClick={() => checklogin() && setActive(active - 1)}>Back</button>
                    <button className='nextbtn' onClick={() => {
                        let temp = checklogin()
                        if (temp) {
                            alert('Order Placed')
                        }
                    }}>Place Order</button>
                </div>
            }

            <Footer />
        </div >
    )
}

export default Cart