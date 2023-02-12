import React from 'react'
import Testimonials from '../COMPONENTS/AboutPage/Testimonials'
import Footer from '../COMPONENTS/Footer/Footer'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './About.css'
import payimg from '../COMPONENTS/Footer/pay.png'
const About = () => {


    // add show up animation to left and right divs

    return (
        <div>
            <div className='about'>
                <Navbar />
                <div className='c1'>
                    <img src={"https://makanmate.com/wp-content/uploads/2022/09/catering-chef-cooking-1536x864.jpg"} alt='about' />
                    <h1>ABOUT US</h1>
                </div>

                <div className='c11'>
                    <h1>History of Makan Mate</h1>
                    <p>Started from a small stall in Bugis Street, Makan Mate has grown to cater to industrial workers as well as catering functions for the cost and health conscious. In addition, we have been serving a growing clientele in the Western part of Singapore. You will discover – to your delight – a wide variety of tasty menus that include healthy options at reasonable prices. Our dishes contain no MSG, low salt and low oil. We look forward to hearing from you and we thank you for visiting Makan Mate.


                    </p>
                </div>

                <div className='c11'>
                    <h1>Engage our Food Catering Services</h1>
                    <p>Worry no more about preparing or cooking food in your parties and events! Entrust the job to Makan Mate and enjoy your day with ease and peace of mind. Contact us today at (65) 6264 2233 ext 16-21 to discuss your catering preferences and we’ll be happy to explain our catering offers and packages.</p>
                </div>

                <div className='c11'>
                    <h1>Exceptional Catering Services</h1>
                    <p>If you’re looking for a caterer for birthday parties, engagement parties, or other special occasions and you want these to be extra fun and memorable for you and your guests, choose Makan Mate. With help from our dedicated team, holding your event becomes easier than ever. We deliver food promptly, arrive on time, and cater to all your needs adequately.

                        Whether you need a mini buffet catering for birthday parties or buffet catering for a corporate event, we got you covered! And as Halal caterers in Singapore, we provide catering services to religious functions including Malay wedding catering and Muslim wedding catering. Let us blow your guests away with classic wedding food that won’t disappoint!

                        Moreover, if you or your guests have a thing for Korean food, Makan Mate will surely incorporate authentic Korean dishes. Our Korean menu includes Japchae, Bibimbap, Korean Rice Cake, Cream of Red Bean Soup, and more.

                        All food portions catered and delivered by Makan Mate are described as generous. We make sure that we serve more than enough to make you and your guests pleased and satisfied.
                    </p>
                </div>

                <div className='c11'>
                    <h1>Wide Range of Food Options</h1>
                    <p>Food is ultimately a highlight of Makan Mate. Tasty, presentable, and easy to eat food. We are loved for our Makan Mate Cereal Prawn, Grilled Honey Boneless Chicken, Scrumptious Turkey Ham Fried Rice, Sautéed Garlicky Prawn, Black Tender Beef Loin, Vegan Yusheng Lo Hei, Smoked Salmon Lo Hei, Chicken Wings, and more.</p>
                </div>


                <Testimonials />
            </div>
            <div style={
                {
                    width: '100%',
                    height: '1px',
                }
            }></div>
            <Footer />
        </div>
    )
}

export default About