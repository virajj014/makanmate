import React from 'react'
import { toast } from 'react-toastify'
import './ChangePassword.css'

const ChangePassword = ({ userid, oldpass }) => {
  const [data, setdata] = React.useState({
    CurrentPassword: '',
    NewPassword: '',
    CurrentPassword: '',
    OrgId: 1,
    B2CCustomerId: userid
  })

  const updatepassword = () => {
    let oldpassformls = localStorage.getItem('password')
    oldpassformls = JSON.parse(oldpassformls)
    // console.log(oldpassformls , data.CurrentPassword)
    // console.log(oldpassformls)
    console.log(data)
    if (data.NewPassword !== data.ConfirmPassword) {
      toast.error('New Password and Confirm Password Does Not Match')
      return
    }
    if (data.CurrentPassword === oldpassformls) {
      // console.log(data)
      fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerRegister/EditProfilePassword', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      )
      .then(res => res.json())
      .then(data => {
        if(data.Code === 200) {
          toast.success('Password Updated Successfully')
        }
        else {
          toast.error('Something Went Wrong')
        }
      })
      .catch(err => {
        console.log(err)
        toast.error('Something Went Wrong')
      })
    }
    else {
      toast.error('Old Password is incorrect')
    }
    // console.log(data)

  }
  return (
    <div className='changepassword'>
      <h1 className='mainhead1'>Change Password</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='email'>Old Password <span>*</span></label>
          <input type="password"

            value={data.CurrentPassword}
            onChange={(e) => setdata({ ...data, CurrentPassword: e.target.value })}
          />
        </div>
      </div>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='email'>New Password <span>*</span></label>
          <input type="password"
            onChange={(e) => setdata({ ...data, NewPassword: e.target.value })}
          />

        </div>

        <div className='form-group'>
          <label htmlFor='email'>Confirm New Password <span>*</span></label>
          <input type="password"
            onChange={(e) => setdata({ ...data, ConfirmPassword: e.target.value })}
          />
        </div>
      </div>

      <button className='mainbutton1'
        onClick={updatepassword}
      >Save Changes</button>
    </div>
  )
}

export default ChangePassword