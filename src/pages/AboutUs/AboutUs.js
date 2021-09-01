import React from 'react'
import AboutBanner from '../../components/AboutSections/AboutBanner'
import './AboutUs.css'
import AboutSection from '../../components/AboutSections/AboutSection'
import { aboutObjOne, aboutObjTwo, aboutObjThree } from './Data';

function AboutUs() {

    return (
        <div className="about-us">
            <AboutBanner />
            <AboutSection {...aboutObjOne} />
            <AboutSection {...aboutObjTwo} />
            <AboutSection {...aboutObjThree} />
        </div>
    )
}

export default AboutUs
