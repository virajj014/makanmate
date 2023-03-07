import React from 'react'
import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <div className='changepassword'>
      <h1 className='mainhead1'>Change Password</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='email'>Old Password <span>*</span></label>
          <input type='email' name='email' id='email' />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>New Password <span>*</span></label>
          <input type='email' name='email' id='email' />
        </div>
      </div>

      <button className='mainbutton1'>Save Changes</button>
    </div>
  )
}

export default ChangePassword