import React from 'react'
import home2leftimg from '../../assets/vr.jpg'
import { FaMedal } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
function Home2() {
    return (
        <div className='mt-5 '>
            <div className='container'>
                <div className="row check">
                    <div className="col-12 col-lg-5        home2-left-content px-4">
                        <span className='my-4'>About company</span>
                        <h2>
                            Your Partner for
                            <br />
                            Software Innovation
                        </h2>
                        <p className='mt-3'>Welcome to our IT company, your ultimate partner for cutting-edge technology
                            solutions. We are a leading global firm specializing in web development, mobile application
                            development, custom software solutions, and games development. With a passion for innovation and
                            a commitment to excellence, we have been at the forefront of delivering high-quality, scalable,
                            and tailored solutions to clients worldwide.
                        </p>
                        <div className='row mt-4'>
                            <div className="col-6">
                                <div>
                                    <div className=' home2-icon'> <FaMedal /></div>
                                    <div className='home2-box-heading'>
                                        <h5 className='mb-4'>Experience</h5>
                                    </div>
                                    <p>Our great team of more than 1400 software experts.</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <div className=' home2-icon'> <FaGear /></div>
                                    <div className='home2-box-heading'>
                                        <h5 className='mb-4'>Quick Support</h5>
                                    </div>
                                    <p>We’ll help you test bold new ideas while sharing your</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 px-3 mt-5 mt-lg-0">
                        <div className='home2-right-img'>
                            <img className='img-fluid' src={home2leftimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2
