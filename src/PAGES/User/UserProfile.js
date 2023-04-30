import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StaticBanner from '../../COMPONENTS/Banner/StaticBanner'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import AccountSettings from '../../COMPONENTS/UserProfile/AccountSettings'
import ChangePassword from '../../COMPONENTS/UserProfile/ChangePassword'
import LegalNotice from '../../COMPONENTS/UserProfile/LegalNotice'
import UserAddress from '../../COMPONENTS/UserProfile/UserAddress'
import UserSidebar from '../../COMPONENTS/UserProfile/UserSidebar'
import YourOrders from '../../COMPONENTS/UserProfile/YourOrders'
import Footer from '../../COMPONENTS/Footer/Footer'
import './UserProfile.css'
const UserProfile = () => {
  const {activepage} = useParams()
  // alert(activepage)
  const [user, setuser] = React.useState({})

  const [isloggedin, setisloggedin] = React.useState(false)
  useEffect(() => {
      let token = localStorage.getItem("token")
      if (token) {
        // console.log(token)
        fetch(process.env.REACT_APP_BACKEND_URL + `/B2CCustomerRegister/GetbyEmail?OrganizationId=1&EmailId=${
          JSON.parse(token)[0].EmailId
        }`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data.Data)
          setuser(data.Data)
          localStorage.setItem('token', JSON.stringify(data.Data))
          token = localStorage.getItem("token")
        })
        // console.log(token)
        // setuser(JSON.parse(token))

        // console.log(JSON.parse(token))
      }

  }, [])

  return (
    <div className='userprofile'>
      <Navbar />
      <StaticBanner name="Your Profile"/>
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings user={user} />}
          {activepage === 'yourorders' && <YourOrders userid={user[0]?.B2CCustomerId} EmailId={
            user[0]?.EmailId
          }/>}
          {activepage === 'address' && <UserAddress />}
          {activepage === 'legalnotice' && <LegalNotice/>}
          {activepage === 'changepassword' && <ChangePassword userid={user[0]?.B2CCustomerId}/>}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UserProfile