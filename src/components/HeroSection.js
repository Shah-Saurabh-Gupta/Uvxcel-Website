import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactUs from '../pages/ContactUs/ContactUs';
import { Button } from './Button'
import './HeroSection.css'


function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    // const [modalOpen, setModalOpen] = useState(false);
    // const openModal = () => {
    //     setModalOpen(prev => !prev);
    // }
    // const [showModal, setShowModal] = useState(false);
    // const openModal = () => {
    //     setShowModal(prev => !prev)
    // }

    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                {/* <Link to="/contact-us"> */}
                                <Button onClick={() => openInNewTab('https://undraw.co/search')} buttonSize='btn--wide' buttonColor='red'>{buttonLabel}</Button>
                                {/* {modalOpen && <ContactUs setOpenModal={setModalOpen} />} */}
                                {/* </Link> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
