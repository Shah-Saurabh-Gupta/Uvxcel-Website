import React from 'react'
import Banner from '../../components/Banner'
import AboutImg from './aboutus2.svg'
import './AboutUs.css'
import AboutSection from '../../components/AboutSections/AboutSection'
import { aboutObjOne, aboutObjTwo, aboutObjThree } from './Data';

function AboutUs() {
    return (
        <div className="about-us">
            <Banner />
            <AboutSection {...aboutObjOne} />
            <AboutSection {...aboutObjTwo} />
            <AboutSection {...aboutObjThree} />
            {/* <div className="about">
                <div className="about-model">
                    <img src={AboutImg} alt="about image" />
                </div>
                <div className="about-text">
                    <h2>We are the best <br />IT Solutions Company</h2>
                    <p>uvXcel - is contradictorily a startup that has been set up by a group of like minded friends with collective professional experience of over a century (About 120 years and counting) in various domains and computer science technologies.



Each individual comes from similar culture, family background, academic qualification and more importantly with strong trust, values, principles, ethics and ambitions.

The core is to leverage the discrete yet associated experience to partner with our clients/ businesses to simplify their operations, provide advanced technology frameworks to make their business processes efficient, and enable them to self propel through smart cognitive digital solutions.



The wide variety of expertise ranging from Infrastructure Services, Business Intelligence, Data Architecture & Enterprise Applications, eCommerce, eLearning, Mobile Applications, AI & ML and IoT simply implies that uvXcel has a lot to offer under one umbrella.



We aim to emerge as the preferred technology partner for our clients/ businesses, by powering them through innovative focused solutions for their real life problems with the right blend of time, cost and quality that will assure the projected growth.



We strongly believe that the right partnership and collaboration lays the foundation for sustained growth and excellence, 

thus, United We Excel.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at enim faucibus, faucibus mauris non, placerat nunc.
                        Nulla et ornare lacus, vel sagittis mauris.
                        Ut rutrum purus metus, ac molestie magna vehicula quis.
                        Pellentesque sed nunc bibendum, aliquet urna quis, vestibulum orci.
                        Phasellus tellus sem, porta ut magna non, sagittis luctus lectus.
                        Nam faucibus sem sit amet aliquam consectetur. Suspendisse potenti.
                        Vestibulum vel laoreet neque, id placerat tortor.
                        Nullam facilisis mauris felis, ac pulvinar eros ullamcorper vitae.</p>
                    <button>View More Details</button>
                </div>
            </div> */}
        </div>
    )
}

export default AboutUs
