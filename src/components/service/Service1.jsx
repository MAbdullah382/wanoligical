import React, { useState } from 'react'
import './services.css'
import servicepage from '../../assets/webh.png'
import ServicesModal from './ServicesModal'
function Service1() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='service-wrapper'>
            <div className='container'>
                <div className='row service1-row'>
                    <div className='col-12 col-md-6'>
                        <div className='content'>
                            <h1>Advance Your Business With high performing web apps</h1>
                            <h2 className='my-4'>We build modern, smooth and highly scalable web applications to simplify business processes for you</h2>
                        </div>
                        <div className='service-btn mt-5'>
                            <button onClick={() => setToggle(!toggle)} className='left-btn'>REQUEST A CALL</button>

                            {toggle && <ServicesModal toggle={toggle} setToggle={setToggle} />}
                            <button className='right-btn'>QUICK QUOTE</button>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src={servicepage} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service1
