import React from 'react'
import './YourOrders.css'

const YourOrders = () => {
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
    return (
        <div className='yourorders'>
            <h1 className='mainhead1'>Your Orders</h1>
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
                    {data.map((item, index) => {
                   return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>
                             <p className={item.status === 'Delivered' ? 'delivered' : 'ontheway'}></p>
                            {item.status}</td>
                        <td>${item.total}</td>
                        <td><button
                        className='mainbutton1'
                        >View</button></td>
                    </tr>
                    )
                   })}
                </tbody>
            </table>
        </div>
    )
}

export default YourOrders