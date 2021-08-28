import React from 'react'
import './AboutBanner.css'

function AboutBanner() {
    return (
        <>
            <div className="how-it-works">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="flex">
                        <div>
                            <span className="fas fa-home"></span>
                            <h4>How we started</h4>
                            <p>Set up by a group of friends with personal experience over a century</p>
                        </div>
                        <div>
                            <span className="fas fa-dollar-sign"></span>
                            <h4>Our Work Culture</h4>
                            <p>To leverage the discrete yet associated experience to partner with our clients to simplify their operations</p>
                        </div>
                        <div>
                            <span className="fas fa-chart-line"></span>
                            <h4>Our Vision</h4>
                            <p> We aim to emerge as the preferred technology partner for our clients by powering them through innovative focused solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner
