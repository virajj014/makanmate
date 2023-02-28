import React, { useEffect } from 'react'
import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Footer from '../Footer/Footer'
import SubmitForm from './SubmitForm'
import './Testimonials.css'
// import logo from '../../ASSETS/logo.png'

const Testimonials = () => {

    let logo = "data:image/jpeg;base64,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"

    let ratingValue = 4;
    const [testimonials1, setTestimonials1] = useState([])

    const gettestimonials = async () => {
        fetch(process.env.REACT_APP_BACKEND_URL+'/B2CCustomerTestimonial/GetAll?OrganizationId=1')
            .then(response => response.json())
            .then(data => {
                console.log(data.Data)
                setTestimonials1(data.Data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        gettestimonials()
    }, [])
    return (
        <div className='testimonials'>
            <h2
                className='mainhead1'
            >Testimonials From Our Happy Customers</h2>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="testimonialcarousel"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >

                {
                    testimonials1.map((testimonial) => {
                        return (
                            <div className='card'>
                                <h1>{testimonial.B2CCustomerName}</h1>
                                <p>{testimonial.LikesAboutMakanmate}</p>

                                <div className='star-rating'>
                                    {
                                        testimonial.RatingValue >= 1 ?
                                            <div className='star1'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>

                                            :

                                            <div className='star'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                    }

                                    {
                                        testimonial.RatingValue >= 2 ?
                                            <div className='star1'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>

                                            :

                                            <div className='star'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                    }



                                    {
                                        testimonial.RatingValue >= 3 ?
                                            <div className='star1'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>

                                            :

                                            <div className='star'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                    }

                                    {
                                        testimonial.RatingValue >= 4 ?
                                            <div className='star1'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>

                                            :

                                            <div className='star'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>

                                    }
                                    {
                                        testimonial.RatingValue >= 5 ?
                                            <div className='star1'

                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                            :
                                            <div className='star'

                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
            <br />
            <SubmitForm />

        </div>
    )
}

export default Testimonials