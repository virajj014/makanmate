import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

    const uploadTestimonial = () => {

        if (!user) {
            toast.error("Please login to submit a testimonial")
            return
        }

        const getradiovalue = () => {
            var ele = document.getElementsByName('recommendation');
            for (let i = 0; i < ele.length; i++) {
                if (ele[i].checked) {
                    if (ele[i].value == 'Yes') {
                        return true
                    }
                    else {
                        return false
                    }
                }

                else {
                    return false
                }
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

        // alert(user.B2CCustomerId)
        // console.log(temp)

        fetch('http://154.26.130.251:134/B2CCustomerTestimonial/Getbycode?OrganizationId=1&CustomerId=' + user.B2CCustomerId)
            .then(response => response.json())
            .then(data => {
                if (data.Data[0].B2CCustomerId == user.B2CCustomerId) {
                    toast("You have already submitted a testimonial")
                }
                else {
                    fetch('http://154.26.130.251:134/B2CCustomerTestimonial/Create',
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
                                toast.success("Your request has been submitted successfully. We will get back to you soon.")
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
                className='mainhead1'
            >Leave a Testimonial</h2>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    experience: '',
                    favorite: '',
                    recommendation: ''
                }}
                validate={values => {
                    const errors = {};
                    // if (!values.name) {
                    //     errors.name = 'Required';
                    // }
                    // if (!values.email) {
                    //     errors.email = 'Required';
                    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    //     errors.email = 'Invalid email address';
                    // }
                    // if (!values.experience) {
                    //     errors.experience = 'Required';
                    // }
                    // if (!values.favorite) {
                    //     errors.favorite = 'Required';
                    // }
                    // if (!values.recommendation) {
                    //     errors.recommendation = 'Required';
                    // }
                    return errors;
                }}
                onSubmit={
                    () => uploadTestimonial()
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label>Enter Your Name <span>*</span></label>
                        <div className='form-input'>
                            <Field type='text' name='name' placeholder='Name'
                                value={user ? user.B2CCustomerName : ''}

                                disabled={user ? true : false}
                            />
                            <ErrorMessage name='name' component='div' className='error' />
                        </div>

                        <label>Enter Your Email <span>*</span></label>
                        <div className='form-input'>
                            <Field type='text' name='email' placeholder='Email'
                                value={user ? user.EmailId : ''}
                                disabled={user ? true : false}
                            />
                            <ErrorMessage name='email' component='div' className='error' />
                        </div>

                        <label>How was your overall experience with Makan Mate? <span>*</span></label>
                        <div className='form-input'>
                            <Field component='textarea' name='experience' placeholder=''
                                value={testimonial.OverallExperience}
                                onChange={(e) => setTestimonial({ ...testimonial, OverallExperience: e.target.value })}
                            />
                            <ErrorMessage name='experience' component='div' className='error' />
                        </div>

                        <label>What do you like best about Makan Mate? <span>*</span></label>
                        <div className='form-input'>
                            <Field component='textarea' name='favorite' placeholder=''
                                value={testimonial.LikesAboutMakanmate}
                                onChange={(e) => setTestimonial({ ...testimonial, LikesAboutMakanmate: e.target.value })}
                            />
                            <ErrorMessage name='favorite' component='div' className='error' />
                        </div>

                        <label>Would you recommend everyone to Makan Mate?  <span>*</span></label>
                        <div className='form-input'>
                            <div className='radio'>
                                <div>
                                    <Field type='radio' id='yes' name='recommendation' value='yes'
                                    />
                                    <label htmlFor='
yes'>Yes</label>
                                </div>
                                <div>
                                    <Field type='radio' id='no' name='recommendation' value='no'
                                    />
                                    <label htmlFor='no'>No</label>
                                </div>
                            </div>
                            <ErrorMessage name='recommendation' component='div' className='error' />
                        </div>

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
                        <button type='submit' disabled={isSubmitting}
                            className="mainbutton1"
                            onClick={() => {
                                uploadTestimonial()
                            }}
                        >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SubmitForm