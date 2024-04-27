import React from 'react'
import './servicesmodal.css'
import { IoClose } from "react-icons/io5";
function ServicesModal({ toggle, setToggle }) {

    return (
        <div className='modal-container'>
            <div className='modal-box'>
                <div className='close-icon'>
                    <div className='icon-border'>
                        <IoClose onClick={() => setToggle(!toggle)} />
                    </div>
                </div>
                <div className='modal-second-box'>
                    <p>Contact us about anything related to services. We’ll do our best to get back to you as soon as possible.</p>

                </div>
                <div className='modal-form'>
                    <div className="form-group">
                        <input type="text" placeholder='Name *' />
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" placeholder='Your Email Address *' />
                    </div>
                    < div className="form-group mt-2">
                        <input type="text" placeholder='Your Phone number *' />
                    </div>
                    <div className='btn-box'> <button className='form-btn'>SUBMIT</button></div>
                </div>

            </div>
        </div>
    )
}

export default ServicesModal
