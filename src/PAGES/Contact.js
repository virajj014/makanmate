import React from 'react'
import { useState } from 'react';
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './Contact.css'
import Footer from '../COMPONENTS/Footer/Footer'
const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Add your own code here to submit the form data to your backend or server
    };


    return (
        <div className='contact'>
            <Navbar />
            <div className='header'>
                <img src={"https://makanmate.com/wp-content/uploads/2022/09/catering-chef-cooking-1536x864.jpg"} alt='about' />
                <h1>Contact Us</h1>
            </div>

            <div className='contactin'>
                <p className="description">
                    Feel free to tell us your catering preferences!
                    <br /><br />
                    At Makan Mate, we seek to accomodate your needs and customisations.<br />
                    Should you be interested to engage our <a>food catering services</a>,
                    our lines are open for enquiries and ordering.<br />
                    <br /><br />
                    <span>Mon to Fri</span> from <span>8.30am – 5.30pm</span><br />
                    <span>Saturday</span> from <span>8:30am – 3:00pm</span><br />
                    <br /><br />
                    <sapn>Address:</sapn><br />
                    35-B Fishery Port Road, Jurong Central Fish Market Singapore 619744<br />
                    <br /><br />
                    <span>Phone:</span> (65) 6264 2233 ext  16-21<br />
                    <span>Fax:</span> (65) 6265 0839<br />
                    <span>Website:</span> www.makanmate.com<br />
                    <span>Email:</span> order@makanmate.com<br />
                </p>

                <img src="https://makanmate.com/wp-content/uploads/2022/09/dessert-600x400.jpg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <label htmlFor="name">Name <span>*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="phone">Phone <span>*</span></label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                <label htmlFor="email">Email <span>*</span></label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="subject">Subject <span>*</span></label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
                <label htmlFor="message">Your Request Message <span>*</span></label>
                <textarea type="text" name="message" value={formData.message} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            <Footer/>
        </div>
    )
}

export default Contact