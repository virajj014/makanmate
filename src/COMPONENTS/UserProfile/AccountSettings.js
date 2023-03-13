import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import './AccountSettings.css'

const AccountSettings = ({user}) => {
  // console.log(user)

  const [userdata, setuserdata] = React.useState({})

  const editprofile = () => {
    console.log(userdata)
    fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerRegister/EditProfile',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userdata),
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data , userdata)
        // console.log(data)
        if (data.Code === 200) {
          // window.location.reload()
          toast.success('Profile Updated Successfully')
        }
        else {
          toast.error('Something Went Wrong')
        }
    })
    .catch(err => {
        toast.error('Something Went Wrong')
        console.log(err)
    })
  }

  useEffect(() => {
    setuserdata(user[0])
  }, [user])



  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name <span>*</span></label>
          <input type='text' name='name' id='name'
            value={userdata?.B2CCustomerName}
            onChange={(e) => setuserdata({...userdata, B2CCustomerName: e.target.value})}
          />
        </div>

        {/* <div className='form-group'>
          <label htmlFor='name'>Last Name <span>*</span></label>
          <input type='text' name='name' id='name' />
        </div> */}

        <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input type='text' name='phone' id='phone' 
            value={userdata?.MobileNo}
            onChange={(e) => setuserdata({...userdata, MobileNo: e.target.value})}
          />
        </div>
      
        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email' 
            value={userdata?.EmailId}
            onChange={(e) => setuserdata({...userdata, EmailId: e.target.value})}
          />
        </div>

      </div>

      <button className='mainbutton1'
        onClick={editprofile}
      >Save Changes</button>
    </div>
  )
}

export default AccountSettings