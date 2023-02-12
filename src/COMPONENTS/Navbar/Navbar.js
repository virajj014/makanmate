import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../ASSETS/logo.png'
import './Navbar.css'
const Navbar = () => {
    //navigation

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
                        <Link to='/' style={
                            { textDecoration: 'none', color: 'black' }
                        }><li>HOME</li></Link>
                        <Link to='/about' style={
                            { textDecoration: 'none', color: 'black' }
                        }><li>ABOUT</li></Link>

                        <Link to='/menu/cateringmenu/all' style={
                            { textDecoration: 'none', color: 'black' }
                        }><li>MENU</li></Link>
                        {/* open url  https://www.panseas.com/ on click panseas food */}
                        <a href='https://www.panseas.com/' target='_blank' style={
                            { textDecoration: 'none', color: 'black' }
                        }><li>PANSEAS FOOD</li></a>

                        <li>EVENT</li>
                        <li>CONTACT</li>

                        <Link to='/menu/cateringmenu/all' style={
                            { textDecoration: 'none', color: 'black' }
                        }>
                            <li>
                                <button>
                                    ORDER NOW
                                </button>
                            </li>
                        </Link>

                        < Link to='/cart' style={
                            { textDecoration: 'none', color: 'black' }
                        }>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar