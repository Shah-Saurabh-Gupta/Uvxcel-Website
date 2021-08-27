import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import Logo from './logo.png'


function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <p className={lightText ? 'home__hero-heading' : 'home__hero-heading dark'}>{headline}<span className="subheading"> - United we Excel</span></p>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                {/* <Link to="/contact-us"> */}
                                <a href={Logo} download="Logo">
                                    <Button buttonSize='btn--wide' buttonColor='red'>{buttonLabel}</Button>
                                </a>
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
//onClick={() => openInNewTab('https://undraw.co/search')}