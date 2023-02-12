import React from 'react'
import Footer from '../COMPONENTS/Footer/Footer'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart'>
            <Navbar />
            <div className='header'>
                <h1>Your Cart</h1>
            </div>
            <div className='cartin'>
                <div className='left'>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <div className='img'>
                                        <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                                    </div>
                                    <div className='name'>Marinated Chicken Satay with Peanut Sauce 25pcs</div>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    $25
                                </div>
                            </td>

                            <td>
                                <div className='quantity'>

                                    <button>-</button>
                                    <div className='count'>1</div>
                                    <button>+</button>

                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    $25
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <div className='product'>
                                    <div className='img'>
                                        <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' />
                                    </div>
                                    <div className='name'>Marinated Chicken Satay with Peanut Sauce 25pcs</div>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    $25
                                </div>
                            </td>

                            <td>
                                <div className='quantity'>

                                    <button>-</button>
                                    <div className='count'>1</div>
                                    <button>+</button>

                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    $25
                                </div>
                            </td>
                        </tr>
                    </table>

                    <div className='couponupdate'>
                        <div className='coupon'>
                            <input type='text' placeholder='Coupon Code' />
                            <button>Apply Coupon</button>
                        </div>

                        <div className='update'>
                            <button>Update Cart</button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <h1>Cart Total</h1>
                    <div className='t1'>
                        <label>Subtotal</label>
                        <label>$50</label>
                    </div>

                    <div className='t2'>
                        <label>Shipping</label>
                        {/* radio button for flat rate & makanmart */}

                        <div className='shipping'>
                            <div className='t3'>
                                <input type='radio' name='shipping' />
                                <label>Flat Rate: $10</label>
                            </div>

                            <div className='t3'>
                                <input type='radio' name='shipping' />
                                <label>MakanMart: $5</label>
                            </div>
                        </div>
                    </div>
                    <p>Shipping options will be
                        updated during checkout.<br />
                        <a href='#'>Calculate shipping</a>
                    </p>

                    <div className='shippingcalc'>
                        <select>
                            <option>Country</option>
                            <option>Country</option>
                        </select>

                        <select>
                            <option>State</option>
                            <option>State</option>
                            <option>State</option>
                        </select>

                        <input type='text' placeholder='Postcode / Zip' />
                        <button>Update</button>
                    </div>
                    <hr />
                    <div className='t2'>
                        <label>Tax</label>
                        <label>$0</label>
                    </div>

                    <div className='t2'>
                        <label>Total</label>
                        <label>$50</label>
                    </div>

                    <button className='bigbtn'>Proceed to Checkout</button>

                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Cart