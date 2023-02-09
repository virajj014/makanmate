import React from 'react'
import logo from '../../ASSETS/logo.png'
import './Navbar.css'
const Navbar = () => {
    const [scroll, setScroll] = React.useState(false)
    const windowheight = window.innerHeight;
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    return (
        <div className={scroll ? 'nav background' : 'nav'}>
            <div className='navin'>
                <div className='navleft'>
                    {/* <span>MAKAN MATE</span> */}
                    <img src={logo} alt='logo' />
                </div>
                <div className='navright'>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>MENU</li>
                        <li>PANSEAS FOOD</li>
                        <li>EVENT</li>
                        <li>CONTACT</li>
                        <li>ORDER NOW</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar