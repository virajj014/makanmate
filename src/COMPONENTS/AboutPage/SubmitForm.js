import React, { useState, useEffect } from 'react'
import './SubmitForm.css'
import { Rating } from 'react-simple-star-rating'
import { toast } from 'react-toastify';

const SubmitForm = () => {
    const [ratingValue, setRatingValue] = useState(0)
    const [user, setUser] = useState(null)

    const getuserdata = (e) => {
        let user = localStorage.getItem('token')
        if (user && JSON.parse(user)) {
            setUser(JSON.parse(user)[0])
        }
    }

    useEffect(() => {
        getuserdata()
    }, [])

    const [testimonial, setTestimonial] = useState(
        {
            LikesAboutMakanmate: '',
            OverallExperience: '',
        }
    )

    const uploadTestimonial = (e) => {
        e.preventDefault()
        if (!user) {
            toast.error("Please login to submit a testimonial")
            return
        }

        const getradiovalue = () => {
            var ele = document.getElementsByName('RecomendMakanmate');
            for (var i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    return ele[i].value;
            }
        }
        // getradiovalue()
        let temp = {
            "OrgId": 1,
            "B2CCustomerId": user.B2CCustomerId,
            "B2CCustomerName": user.B2CCustomerName,
            "EmailId": user.EmailId,
            "OverallExperience": testimonial.OverallExperience,
            "LikesAboutMakanmate": testimonial.LikesAboutMakanmate,
            "RecomendMakanmate": getradiovalue(),
            "RatingValue": ratingValue,
            "CreatedBy": user.B2CCustomerName,
            "CreatedOn": new Date(),
        }


        fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerTestimonial/Getbycode?OrganizationId=1&CustomerId=' + user.B2CCustomerId)
            .then(response => response.json())
            .then(data => {
                if (data.Data[0].B2CCustomerId == user.B2CCustomerId) {
                    toast("You have already submitted a testimonial")
                }
                else {
                    fetch(process.env.REACT_APP_BACKEND_URL + '/B2CCustomerTestimonial/Create',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(temp),
                        }
                    )
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            if (data.Message == "Sucess") {
                                toast.success("Your request has been submitted successfully. Thanks FOr Your Response.")
                            }
                            else {
                                toast.error("Something went wrong. Please try again later.")
                            }
                        })
                }
            })

    }

    return (
        <div className='submitform'>
            <h2
                className='mainhead3'
            >Leave a Testimonial</h2>


            <form>
                <div className='form-container'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name"
                            value={user?.B2CCustomerName}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email"
                            value={user?.EmailId}
                            disabled
                        />
                    </div>
                </div>



                <div className="form-group">
                    <label>How was your overall experience with Makan Mate? <span>*</span></label>
                    <textarea id="message" rows="3" placeholder="Enter your response"
                        onChange={(e) => setTestimonial({ ...testimonial, OverallExperience: e.target.value })}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>What do you like best about Makan Mate? <span>*</span></label>
                    <textarea id="message" rows="3" placeholder="Enter your response"
                        onChange={(e) => setTestimonial({ ...testimonial, LikesAboutMakanmate: e.target.value })}
                    ></textarea>
                </div>
                <div className="form-container">
                    <div className="form-group">
                        <label>Would you recommend everyone to Makan Mate?  <span>*</span></label>
                        {/* radio yes no */}
                        <div
                        style={{ display: 'flex', justifyContent: 'flex-start' }}
                        >
                            <div className="form-check">
                                <input type="radio" name="RecomendMakanmate" id="flexRadioDefault1" value="Yes" />
                                <label htmlFor="flexRadioDefault1"

                                >
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" name="RecomendMakanmate" id="flexRadioDefault2" value="No" />
                                <label htmlFor="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Star Rating</label>
                        <div className='star-rating'>
                            {
                                ratingValue >= 1 ?
                                    <div className='star1'
                                        onClick={() => setRatingValue(1)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>

                                    :

                                    <div className='star'
                                        onClick={() => setRatingValue(1)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                            }

                            {
                                ratingValue >= 2 ?
                                    <div className='star1'
                                        onClick={() => setRatingValue(2)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>

                                    :

                                    <div className='star'
                                        onClick={() => setRatingValue(2)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                            }



                            {
                                ratingValue >= 3 ?
                                    <div className='star1'
                                        onClick={() => setRatingValue(3)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>

                                    :

                                    <div className='star'
                                        onClick={() => setRatingValue(3)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                            }

                            {
                                ratingValue >= 4 ?
                                    <div className='star1'
                                        onClick={() => setRatingValue(4)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>

                                    :

                                    <div className='star'
                                        onClick={() => setRatingValue(4)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>

                            }
                            {
                                ratingValue >= 5 ?
                                    <div className='star1'
                                        onClick={() => setRatingValue(5)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    :
                                    <div className='star'
                                        onClick={() => setRatingValue(5)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                            }
                        </div>
                    </div>
                </div>

                <button
                    onClick={(e) => {
                        uploadTestimonial(e)
                    }}
                >Submit</button>
            </form>
        </div>
    )
}

export default SubmitForm