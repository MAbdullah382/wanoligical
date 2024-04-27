import React from 'react'
import './footer.css'
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import footerlogo from '../../assets/logowhite.png'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom'
import usa from '../../assets/usa.png'
import pakistan from '../../assets/pakistan.png'
import germany from '../../assets/germany.png'
import flag from '../../assets/flag.png'
function Footer() {
    return (
        <div className='footer-main'>
            <div className='container py-5'>
                <div className="row footer-row1">
                    <div className="col-12 col-md-4 mt-4 mt-md-0 text-white ">
                        <div className='footer-logo'>
                            <img className='img-fluid' src={footerlogo} alt="" />
                        </div>
                        <div className='footer-icons'>
                            <div className='footer-fa-icons' ><GrFacebookOption /></div>
                            <div className='footer-in-icons' ><FaLinkedinIn /></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4 mt-md-0 text-white pt-1">
                        <div className='footer-2col'>
                            <div className='envelope-icon'> <FaEnvelope /></div>
                            <div className='email-text '>
                                <h3 className='mb-0'>Email us</h3>
                            </div>
                        </div>
                        <p className='footer-2col-link'> <Link to="/">info@wanologicalsolutions.com</Link></p>
                    </div>
                    <div className="col-12 col-md-4 mt-4 mt-md-0 text-white pt-1">
                        <div className='footer-2col'>
                            <div className='envelope-icon'> <FaPhone /></div>
                            <div className='email-text '>
                                <h3 className='mb-0'>Call us</h3>
                            </div>
                        </div>
                        <p className='footer-2col-link'> <Link to="/">+1832-591 1160
                            |
                            +92 42 32532127</Link></p>
                    </div>
                </div>
                <div className='row footer-row2 mt-5 text-white '>
                    <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0 ">
                        <div className='footer-2row'>
                            <img src={usa} alt="" />
                            <span>USA</span>
                        </div>
                        <div className='footer-2row-lower'>
                            <div className='location-icon'><TbWorld /></div>
                            <span>100 Glenborough Dr, Suite 400 Houston, TX 77067, Houston, Texas 77074, US</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0 ">
                        <div className='footer-2row'>
                            <img src={germany} alt="" />
                            <span>Germany</span>
                        </div>
                        <div className='footer-2row-lower'>
                            <div className='location-icon'><TbWorld /></div>
                            <span>Felsennelkenanger 18, 80937 Munich Germany</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0 ">
                        <div className='footer-2row'>
                            <img src={flag} alt="" />
                            <span>UAE</span>
                        </div>
                        <div className='footer-2row-lower'>
                            <div className='location-icon'><TbWorld /></div>
                            <span>Office Number: V0002, Al Murooj Complex. Downtown Dubai UAE</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0 ">
                        <div className='footer-2row'>
                            <img src={pakistan} alt="" />
                            <span>Pakistan</span>
                        </div>
                        <div className='footer-2row-lower'>
                            <div className='location-icon'><TbWorld /></div>
                            <span>Sadat Ave Aqil Jafferi opp. Jinnah Hospital, Lahore, Pakistan</span>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className='col-12  footer-menu'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="">Careers</Link></li>
                            <li><Link to="">Portfolio</Link></li>
                            <li><Link to="">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-12 copy-right d-flex align-items-center justify-content-center'>
                        <span className=''>Copyright © 2023 Wanologicalsolutions. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
