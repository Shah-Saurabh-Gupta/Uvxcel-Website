import React from 'react'
import { Link } from 'react-scroll'
import './AboutBanner.css'

function AboutBanner(props) {
    return (
        <>
            <div className="how-it-works">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="flex">
                        <div>
                            <span className="fas fa-home"></span>
                            <h4 className="scrollh4"><Link to="beginning" smooth={true} duration={1000}>How we started</Link></h4>
                            {/* <p>Set up by a group of friends with personal experience over a century</p> */}
                        </div>
                        <div>
                            <span className="fas fa-moon"></span>
                            <h4 className="scrollh4"><Link to="workCulture" smooth={true} duration={1000}>Our Work Culture</Link></h4>
                            {/* <p>To leverage the discrete yet associated experience to partner with our clients to simplify their operations</p> */}
                        </div>
                        <div>
                            <span className="fas fa-chart-line"></span>
                            <h4 className="scrollh4"><Link to="vision" smooth={true} duration={1000}>Our Vision</Link></h4>
                            {/* <p> We aim to emerge as the preferred technology partner for our clients by powering them through innovative focused solutions</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner
