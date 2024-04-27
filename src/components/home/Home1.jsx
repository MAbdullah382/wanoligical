import React from 'react'
import './home.css'
import homeleft from '../../assets/home-left.png'
import { ReactTyped } from "react-typed";
function Home1() {
    return (
        <div className='home-container mb-5'>
            <div className='container'>
                <div className="row align-items-center  home1-main">
                    <div className="col-12 col-lg-6 home1-left d-flex justify-content-center">

                        <img className='img-fluid home1-left-img' src={homeleft} alt="" />

                    </div>
                    <div className="col-12 col-lg-6 home1-right mt-5 mt-lg-0">
                        <div className='home1-right-content' >
                            <h4>
                            // Functional, Usability & Performance
                            </h4>
                            <h1>We are expert in</h1>
                            <h1 style={{ color: '#0095e8' }}>
                                <ReactTyped strings={
                                    [
                                        "WEB DEVELOPMENT",
                                        "PROJECT MANAGEME",
                                        "ANDROID APPLICATION"


                                    ]}
                                    typeSpeed={100}
                                    backSpeed={50}
                                    loop
                                />
                            </h1>
                            <p>We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1
