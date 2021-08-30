import React from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import './ContactUs.css'

function ContactUs({ setOpenModal }) {

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            <div className="modal-card">
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <div className="modal-content-left">
                            <img id="modal-img" src="images/contactus.svg" alt="" />
                        </div>
                        <div className="modal-content-right">
                            <form className="modal-form form" id="form" action="mailto:marketing@uvxcel.com" method="GET" target="_blank">
                                <h1>We would love to hear from you. Send us a feedback!</h1>
                                <div className="form-validation">
                                    {/* <label htmlFor="username">Name</label> */}
                                    <input type="text" className="modal-input" id="name" name="username" placeholder="Enter your name" />
                                </div>
                                <div className="form-validation">
                                    {/* <label htmlFor="email">Email</label> */}
                                    <input type="email" className="modal-input" id="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-validation">
                                    {/* <label htmlFor="number">Number</label> */}
                                    <input type="number" className="modal-input" id="number" name="number" placeholder="Enter your number" />
                                </div>
                                <div className="form-validation">
                                    {/* <label htmlFor="number">Message</label> */}
                                    <textarea className="modal-textarea" placeholder="Enter your message" name="message" rows="5" cols="60" ></textarea>
                                </div>
                                <input type="submit" className="modal-input-btn" value="Send"></input>
                                <span className="modal-input-login">Want to goto home? Click <Link to="/" onClick={closeModal}>here</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs
