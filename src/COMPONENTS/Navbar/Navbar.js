import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../ASSETS/logo.png'
import './Navbar.css'

import { render } from "react-dom";

import { Dots } from "react-activity";
import "react-activity/dist/library.css";
const Navbar = () => {
    //navigation

    const [showlogin, setshowlogin] = React.useState(false)
    const [showsignup, setshowsignup] = React.useState(false)


    const [isotpsent, setisotpsent] = React.useState(false)

    const [signupdata, setsignupdata] = React.useState({
        B2CCustomerName: '',
        EmailId: '',
        Password: '',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        MobileNo: '',
        PostalCode: '',
    })
    return (
        <div className={'nav'}>
            <div className='navin'>
                <img src={logo} alt='logo' />

                <ul>
                    <Link to='/' style={
                        { textDecoration: 'none', color: 'black' }
                    }><li>HOME</li></Link>
                    <Link to='/about' style={
                        { textDecoration: 'none', color: 'black' }
                    }><li>ABOUT</li></Link>

                    <Link to='/menu/cateringmenu/all' style={
                        { textDecoration: 'none', color: 'black' }
                    }><li>MENU</li></Link>
                    {/* open url  https://www.panseas.com/ on click panseas food */}
                    <a href='https://www.panseas.com/' target='_blank' style={
                        { textDecoration: 'none', color: 'black' }
                    }><li>PANSEAS FOOD</li></a>

                    <Link to='/event' style={
                        { textDecoration: 'none', color: 'black' }
                    }><li>EVENT</li></Link>

                    <Link to='/contact' style={
                        { textDecoration: 'none', color: 'black' }
                    }><li>CONTACT</li></Link>

                    <Link to='/menu/cateringmenu/all' style={
                        { textDecoration: 'none', color: 'black' }
                    }>
                        <li>
                            <button>
                                ORDER NOW
                            </button>
                        </li>
                    </Link>

                    < Link to='/cart' style={
                        { textDecoration: 'none', color: 'black' }
                    }>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </li>
                    </Link>


                    <li>
                        <svg
                            onClick={() => setshowlogin(true)}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </li>

                </ul>
            </div>

            {
                showlogin &&

                <div className='logincontainer'>
                    <div className='close'>
                        <svg
                            onClick={() => setshowlogin(false)}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>

                    <div className='logincontin'>
                        <div className='left'>
                            <img src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='login' />
                        </div>
                        <div className='right'>
                            <h1>LOGIN</h1>
                            <input className='inp1' type='text' placeholder='Username' />
                            <input className='inp1' type='password' placeholder='Password' />
                            <p>Forgot Password?</p>
                            <button className='btn1'>LOGIN</button>
                            <p>Don't have an account? <span
                                onClick={() => {
                                    setshowsignup(true)
                                    setshowlogin(false)
                                }}

                            >Sign Up</span></p>
                        </div>
                    </div>
                </div>
            }

            {
                showsignup &&

                <div className='logincontainer'>
                    <div className='close'>
                        <svg
                            onClick={() => setshowsignup(false)}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>

                    <div className='logincontin'>
                        <div className='left'>
                            <img src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='login' />
                        </div>
                        <div className='right'>
                            <h1>SIGNUP</h1>
                            <input className='inp1' type='text' placeholder='Username' />
                            <div className='formcont'>
                                <input className='inp2' type='email' placeholder='Email' />
                                {
                                    isotpsent == true ?
                                        <button
                                            onClick={() => {
                                                setisotpsent('resent')
                                                // call setisotpsent to false in 5 seconds

                                                setTimeout(() => {
                                                    setisotpsent(true)
                                                }, 5000)
                                            }}
                                        >Resend</button>
                                        :
                                        isotpsent == 'resent' ?
                                            <button>
                                                <Dots />
                                            </button>
                                            :
                                            <button
                                                onClick={() => setisotpsent(true)}
                                            >Verify</button>
                                }
                            </div>
                            {
                                isotpsent == true &&
                                <p>An Otp has been sent to the provided email</p>
                            }
                            {
                                isotpsent == true &&
                                <div className='formcont'>
                                    <input className='inp2' type='text' placeholder='Otp' />
                                    <button>Verify</button>
                                </div>
                            }
                            <input className='inp1' type='password' placeholder='Password' />

                            {/* address 1, 2 ,3, postal code */}
                            <div className='formcont'>
                                <select name="country" id="country">
                                    <option value="+91">+91</option>
                                    <option value="+92">+92</option>
                                    <option value="+93">+93</option>
                                </select>

                                <input className='inp2' type='text' placeholder='Phone Number' />
                            </div>
                            <div className='formcont'>
                                <input className='inp2' type='text' placeholder='Postal Code' />
                                <button>Fetch</button>
                            </div>
                            <input className='inp1' type='text' placeholder='Address 1' />
                            <input className='inp1' type='text' placeholder='Address 2' />
                            <input className='inp1' type='text' placeholder='Address 3' />

                            <button className='btn1'>SIGNUP</button>
                            <p>Already have an account? <span onClick={() => {
                                setshowsignup(false)
                                setshowlogin(true)
                            }}>Login</span></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar