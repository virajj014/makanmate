import React from 'react'
import { useParams } from 'react-router-dom'
import StaticBanner from '../COMPONENTS/Banner/StaticBanner'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import AccountSettings from '../COMPONENTS/UserProfile/AccountSettings'
import ChangePassword from '../COMPONENTS/UserProfile/ChangePassword'
import LegalNotice from '../COMPONENTS/UserProfile/LegalNotice'
import UserAddress from '../COMPONENTS/UserProfile/UserAddress'
import UserSidebar from '../COMPONENTS/UserProfile/UserSidebar'
import YourOrders from '../COMPONENTS/UserProfile/YourOrders'
import Footer from '../COMPONENTS/Footer/Footer'
import './UserProfile.css'
const UserProfile = () => {
  const {activepage} = useParams()
  // alert(activepage)
  return (
    <div className='userprofile'>
      <Navbar />
      <StaticBanner name="Your Profile"/>
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings />}
          {activepage === 'yourorders' && <YourOrders/>}
          {activepage === 'address' && <UserAddress/>}
          {activepage === 'legalnotice' && <LegalNotice/>}
          {activepage === 'changepassword' && <ChangePassword/>}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UserProfile