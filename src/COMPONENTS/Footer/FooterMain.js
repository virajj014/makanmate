import React from 'react'
import logo from '../../ASSETS/logo.png'
import './FooterMain.css'

const FooterMain = () => {
  return (
    <div className='footermain'>
      <div className='footermain__container'>
        <img src={logo} alt='logo' />
        <span className='lightgraysmall'>
          @ Copyright 2023. All rights reserved.
        </span>
        <br></br>
        <br></br>
        <h2 className='lightgraybig'>Helpline</h2>
        <div className='callus'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <p>Call Us:</p>
          <span>62642233</span>
        </div>
      </div>


      <div className='footermain__container'>
        <p className='lightgraybig'>ADDRESS: <span className='lightgraysmall'>35-B Fishery Port Road, Jurong Central Fish Market, Singapore, 619744
        </span></p>
        <p className='lightgraybig'>PHONE: <span className='orangesmall'>62642233</span></p>
        <p className='lightgraybig'>EMAIL: <span className='orangesmall'>order@makanmate.com</span></p>
        <br></br>
        <br></br>
        <p
          className='lightgraybig'
        >WORKING DAYS/HOURS</p>
        <span className='lightgraysmall'>Mon - Sun / 9:00AM - 6:00PM</span>
      </div>

      <div className='footermain__container'>
        <span className='lightgraysmall'>Help & FAQ</span>
        <span className='lightgraysmall'>Order Tracking</span>
        <span className='lightgraysmall'>Order History</span>
        <span className='lightgraysmall'>Shipping & Delivery</span>
        <span className='lightgraysmall'>Advanced Search</span>
        <span className='lightgraysmall'>My account</span>
      </div>

      <div className='footermain__container'>
        <span className='lightgraysmall'>News</span>
        <span className='lightgraysmall'>Privacy Policy</span>
        <span className='lightgraysmall'>Disclaimer</span>
        <span className='lightgraysmall'>Terms & Conditions</span>
      </div>
    </div>
  )
}

export default FooterMain