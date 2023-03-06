import React from 'react'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import UserSidebar from '../COMPONENTS/UserProfile/UserSidebar'
import './UserProfile.css'
const UserProfile = () => {
  return (
    <div className='userprofile'>
      <Navbar />
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar />
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default UserProfile