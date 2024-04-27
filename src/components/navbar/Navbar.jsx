import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom'
import { MdClose, MdMenu } from "react-icons/md";

function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='nav-main'>

            <div className='container-lg nav-container'>
                <div className='logo'>
                    <img className='image-fluid' src={logo} alt="" />
                </div>
                <div className='nav-ul d-none d-lg-block'>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li><Link to="/about">About Us </Link> </li>
                        <li><Link to="/service">Services</Link> </li>
                        <li><Link to="">Portfolio</Link> </li>
                        <li><Link to="">Carrer</Link> </li>
                        <li><Link to=""><button className='nav-btn'> Hire a resource</button></Link></li>
                    </ul>
                </div>
                <div className='buger-menu d-lg-none ' >
                    {
                        toggle ?
                            <MdClose onClick={() => setToggle(!toggle)} />
                            :
                            <MdMenu onClick={() => setToggle(!toggle)} />
                    }


                </div>
            </div>
        </div>
    )
}

export default Navbar
