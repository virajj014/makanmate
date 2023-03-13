import React from 'react'
import { toast } from 'react-toastify'
import './UserAddress.css'

const UserAddress = () => {
    const [show, setShow] = React.useState(false)


    const [user, setuser] = React.useState({})

    const checklogin = () => {
        let user = localStorage.getItem('token')
        user = JSON.parse(localStorage.getItem('token'))

        // console.log(user)

        if (user && user[0].B2CCustomerId) {
            // console.log(user[0])
            setuser(user[0])
            getaddress(user[0])
            return true
        }
        else {
            console.log('not logged in')
            toast.error('Please Login First')
            return false
        }
    }
    const [savedaddresses, setsavedaddresses] = React.useState([])
    const getaddress = (userdata) => {
        // console.log(userdata)
        let mainaddress = {
            AddressLine1: userdata.AddressLine1,
            AddressLine2: userdata.AddressLine2,
            AddressLine3: userdata.AddressLine3,
            EmailId: userdata.EmailId,
        }
        let otheraddress = [];
        fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerDeliveryAddress/GetAll?OrganizationId=1&CustomerId=' + userdata.B2CCustomerId)
            .then(res => res.json())
            .then(data => {
                if (data.Data !== null) {
                    otheraddress = data.Data
                    let alladdress = [
                        ...otheraddress,
                        mainaddress
                    ]
                    setsavedaddresses(alladdress)
                    console.log(alladdress)

                }
                else {
                    let alladdress = [
                        mainaddress
                    ]
                    setsavedaddresses(alladdress)
                    // console.log(alladdress)

                }
            })


    }

    React.useEffect(() => {
        checklogin()
    }, [])

    const [newaddress, setnewaddress] = React.useState({
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
    })
    const [postalcode, setpostalcode] = React.useState('')
    const addnewaddress = () => {
        let temp =
        {
            "OrgId": 1,
            "DeliveryId": 0,
            "CustomerId": user?.B2CCustomerId,
            "Name": user?.B2CCustomerName,
            "AddressLine1": newaddress.AddressLine1,
            "AddressLine2": newaddress.AddressLine2,
            "AddressLine3": newaddress.AddressLine3,
            "CountryId": "string",
            "PostalCode": postalcode,
            "Mobile": user?.MobileNo,
            "Phone": "string",
            "Fax": "string",
            "IsDefault": true,
            "IsActive": true,
            "CreatedBy": "string",
            "CreatedOn": new Date(),
            "ChangedBy": "string",
            "ChangedOn": new Date(),
        }

        fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerDeliveryAddress/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(temp)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.Status === true && data.Code === 200) {
                    toast.success('Address Added')
                    getaddress(user)
                    setShow(false)
                }
                else {
                    toast.error('Error Adding Address')
                }
            })
        // console.log(temp)

    }


    const getdatafrompostalcode = async () => {
        let url = `https://developers.onemap.sg/commonapi/search?searchVal=${postalcode}&returnGeom=N&getAddrDetails=Y&pageNum=1`
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.results[0])
        if (data.results[0]) {
            let temp = {
                AddressLine1: '',
                AddressLine2: '',
                AddressLine3: data.results[0].ADDRESS,
            }
            setnewaddress(temp)
        }
    }


  


    const deleteaddressfunc = (addressobj) => {
       fetch(`http://154.26.130.251:134/B2CCustomerDeliveryAddress/Remove?OrganizationId=1&CustomerId=${user.B2CCustomerId}&DeliveryId=${addressobj.DeliveryId}&UserName=${user.EmailId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.Status === true && data.Code === 200) {
                    toast.success('Address Deleted')
                    getaddress(user)
                }
                else {
                    toast.error('Error Deleting Address')
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Error Deleting Address')
            })
    }

    return (
        <div className='useraddress'>
            {
                !show && <h1 className='mainhead1'>Your Address</h1>
            }
            {
                !show && <div className='addressin'>

                    {savedaddresses.map((address, index) => {
                        return (
                            <div className='address' key={index}>
                                {
                                    address.AddressLine1.length > 0 &&
                                    <span>
                                        {address.AddressLine1},
                                    </span>

                                }
                                {
                                    address.AddressLine2.length > 0 &&
                                    <span>
                                        {address.AddressLine2},
                                    </span>
                                }

                                {
                                    address.AddressLine3.length > 0 &&
                                    <span>
                                        {address.AddressLine3}
                                    </span>
                                }

                                <div className='delbtn'
                                
                                onClick={() => {
                                    deleteaddressfunc(address)
                                }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {
                !show && <div className='addnewbtn' onClick={() => setShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            }
            {show && <div className='addnew'>
                <h1 className='mainhead1'>Add New Address</h1>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Postal Code<span>*</span></label>
                        <input type='text' name='name' id='name'
                            onChange={(e) => setpostalcode(e.target.value)}
                        />
                        <button
                            onClick={() => getdatafrompostalcode()}
                        >Get Address</button>
                    </div>

                </div>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='address1'>Address Line 1<span>*</span></label>
                        <input type='text' name='address1' id='address1'
                            value={newaddress.AddressLine1}
                            onChange={(e) => setnewaddress({ ...newaddress, AddressLine1: e.target.value })}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='address2'>Address Line 2</label>
                        <input type='text' name='address2' id='address2'
                            value={newaddress.AddressLine2}
                            onChange={(e) => setnewaddress({ ...newaddress, AddressLine2: e.target.value })}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='address3'>Address Line 3</label>
                        <input type='text' name='address3' id='address3' 
                            value={newaddress.AddressLine3}
                            onChange={(e) => setnewaddress({ ...newaddress, AddressLine3: e.target.value })}
                        />
                    </div>
                </div>

                <button className='mainbutton1'
                    onClick={() => {
                        addnewaddress(newaddress)
                        setShow(false)
                    }}
                >Save</button>
            </div>}
        </div>
    )
}

export default UserAddress