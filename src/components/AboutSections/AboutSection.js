import React from 'react'
import './AboutSection.css'


function AboutSection({
    id, lightBg, topLine, lightText, lightTextDesc, headline, description, img, alt, imgStart
}) {

    return (
        <>
            <section id={id}>
                <div className={lightBg ? 'about__hero-section' : 'about__hero-section darkBg'}>
                    <div className="container">
                        <div className="row about__hero-row"
                            style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                            <div className="col">
                                <div className="about__hero-text-wrapper">
                                    <div className="top-line">{topLine}</div>
                                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                    <p className={lightTextDesc ? 'about__hero-subtitle' : 'about__hero-subtitle dark'}>{description}</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="about__hero-img-wrapper">
                                    <img src={img} alt={alt} className="about__hero-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection
