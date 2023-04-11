import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './YourOrders.css'

const YourOrders = ({ userid, EmailId }) => {
    const data = [
        {
            id: 1,
            date: '12/12/2020',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 2,
            date: '12/12/2020',
            status: 'On the Way',
            total: 1000
        },
        {
            id: 3,
            date: '12/12/2020',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 1,
            date: '12/12/2020',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 2,
            date: '12/12/2020',
            status: 'On the Way',
            total: 1000
        },
        {
            id: 3,
            date: '12/12/2020',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 1,
            date: '12/12/2020',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 2,
            date: '12/12/2020',
            status: 'On the Way',
            total: 1000
        },
        {
            id: 3,
            date: '12/12/2020',
            status: 'Delivered',
            total: 1000
        }
    ]
    const [allorders, setallorders] = React.useState([])
    const getorders = () => {
        fetch(process.env.REACT_APP_BACKEND_URL + `/B2CCustomerOrder/GetHeaderSearch?searchModel.organisationId=1&searchModel.customerCode=${userid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.Data[0])
                setallorders(data.Data)
            })
    }

    React.useEffect(() => {
        getorders()
    }, [userid])


    const [showorder, setshoworder] = React.useState(false)
    const [ordersuccessful, setordersuccessful] = React.useState(null)
    const [ordersuccessitems, setordersuccessitems] = useState([])
    const [tax, settax] = useState(0)
    const [shipping, setshipping] = useState(0)
    const [total, settotal] = useState(0)
    const [discount, setdiscount] = useState(0)
    const [subtotal, setsubtotal] = useState(0)
    const [user, setuser] = useState(null)

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
                    setshoworder(true)
                    window.scrollTo(0, 0)
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
        <div className='yourorders'>
            {
                showorder ?
                    <h1 className='mainhead3'>{ordersuccessful.OrderNo}</h1>
                    :
                    <h1 className='mainhead3'>Your Orders</h1>
            }
            {
                showorder ?
                    <div
                        className='confirmationcont1'
                    >
                        <button className='backbtn' onClick={() => setshoworder(false)}>Back</button>


                        <div className='c2'>
                            <h2>Order Summary</h2>
                            <div className='multirow'>
                                <p>Order Number</p>
                                <p>{ordersuccessful.OrderNo}</p>
                            </div>

                            <div className='multirow'>
                                <p>Order Date</p>
                                <p>{
                                    new Date().toLocaleDateString()
                                }</p>
                            </div>

                            <div className='multirow'>
                                <p>Name</p>
                                <p>{ordersuccessful.CustomerName
                                }</p>
                            </div>

                            <div className='multirow'>
                                <p>Email</p>
                                <p>
                                    {
                                        EmailId
                                    }
                                </p>
                            </div>

                            {/* <div>
                                <p>Order Subtotal</p>
                                <p>$ {ordersuccessful.SubTotal}</p>
                            </div> */}

                           

                            <div
                             className='singlerow'
                            >
                                <p>Shipping Address</p>
                                <p>{ordersuccessful.CustomerShipToAddress
                                }</p>
                            </div>

                            <div className='multirow'>
                                <p>Payment Method</p>
                                <p>{ordersuccessful.PaymentType}</p>
                            </div>

                            {/* <div>
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
                            </div> */}

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

                            <div className='c4'>
                                <div>
                                    <p>Subtotal</p>
                                    <p>$ {ordersuccessful.SubTotal}</p>
                                </div>

                                <div>
                                    <p>Shipping</p>
                                    <p>$ 80.00</p>
                                </div>

                                <div>
                                    <p>Tax</p>
                                    <p>$ {ordersuccessful.Tax.toFixed(2)}</p>
                                </div>

                                <div>
                                    <p>Total</p>
                                    <p>$ {ordersuccessful.NetTotal}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Order Date</th>
                                <th>Order Status</th>
                                <th>Order Total</th>
                                <th>Order Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {allorders?.map((item, index) => {
                                let status = 'pending'
                                item = {
                                    ...item,
                                    status: status,
                                }
                                return (
                                    <tr key={index}>
                                        <td>{item.OrderNo}</td>
                                        <td>{item.OrderDateString}</td>
                                        <td>
                                            <p className={item.status === 'Delivered' ? 'delivered' : 'ontheway'}></p>
                                            {item.status}</td>
                                        <td>${item.NetTotal
                                        }</td>
                                        <td><button
                                            className='mainbutton1'
                                            onClick={() => getsuccessfulorder(item.OrderNo)}
                                        >View</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default YourOrders