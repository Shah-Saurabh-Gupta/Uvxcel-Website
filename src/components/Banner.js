import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <>
            <div className="how-it-works">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="flex">
                        <div>
                            <span className="fas fa-home"></span>
                            <h4>How we started</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                        <div>
                            <span className="fas fa-dollar-sign"></span>
                            <h4>Our Work Culture</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                        <div>
                            <span className="fas fa-chart-line"></span>
                            <h4>Our Vision</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
