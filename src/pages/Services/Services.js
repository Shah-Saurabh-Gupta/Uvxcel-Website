import React from 'react'
import Banner from '../../components/shared/Banner';
import './Services.css'

function Services() {
    return (
        <>
            <Banner title={"Services"} />
            <div className="service-container">
                <div className="box-container">
                    <div className="box">
                        <span className="number">01</span>
                        <span className="icon-style"><i className="fas fa-code"></i></span>
                        <h3>Infrastructure Management</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> OnPrem Infra Management<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Cloud Management<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Hybrid Management<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Database Management<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Network & Storage Management<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Backup & Recovery Management</p>
                    </div>
                    <div className="box">
                        <span className="number">02</span>
                        <span className="icon-style"><i className="fas fa-paint-brush"></i></span>
                        <h3>E-commerce</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> eCommerce Product Development and Integration<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> eCommerce Platform Analysis, Fitment, Recommendations<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> eCommerce Platform Services and Implementation<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Omni-Channel Implementation<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Integrations with Backoffice Systems like WMS, OMS, ERP, Logistics</p>
                    </div>
                    <div className="box">
                        <span className="number">03</span>
                        <span className="icon-style"><i className="fas fa-bullhorn"></i></span>
                        <h3>Business Intelligence</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Data Sources Management<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Data Warehousing<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Real-time BI<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Corporate Performance Management( CPM)<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> OLAP (Online Analytical Processing)</p>
                    </div>
                    <div className="box">
                        <span className="number">04</span>
                        <span className="icon-style"><i className="fas fa-mobile"></i></span>
                        <h3>E-learning</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span>Interactive Web-Based Learning<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Simulation Based Learning<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Scenario Based Learning<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Gamification<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> SaaS Application Offerings<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Individual Applications<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Custom Learning Modules</p>
                    </div>
                    <div className="box">
                        <span className="number">05</span>
                        <span className="icon-style"><i className="fab fa-wordpress"></i></span>
                        <h3>Application Development</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Dnyanda - An education app for students from under-privileged section.</p>
                    </div>
                    <div className="box">
                        <span className="number">06</span>
                        <span className="icon-style"><i className="fas fa-tools"></i></span>
                        <h3>Product Engineering</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Ideation & Conceptualization<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Business Analysis<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Architecture & Design<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Development<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Test Automation<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Release Management & DevOps<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Sustained Engineering & Support</p>
                    </div>
                    <div className="box">
                        <span className="number">07</span>
                        <span className="icon-style"><i className="fas fa-moon"></i></span>
                        <h3>Mobile Applicatons</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Mobile App Development<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Cross Platform<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> UI/ UX and Security<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Digital Innovation<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Connecting across touchpoints</p>
                    </div>
                    <div className="box">
                        <span className="number">08</span>
                        <span className="icon-style"><i className="fas fa-sun"></i></span>
                        <h3>Software as Service offering</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> SaaS offerings for Education Institutes, Medical Facilities, Groceries, Essential Goods and MSMEs.</p>
                    </div>
                    <div className="box">
                        <span className="number">09</span>
                        <span className="icon-style"><i className="fas fa-rocket"></i></span>
                        <h3>Entreprise Applications and Data Architecture</h3>
                        <p><span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Business Centric Architecture<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Smart & Adaptable<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Collaboration & Governance<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Secure & Resilient<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Robust & Scalable<br />
                            <span className="arrow-style"><i className="fas fa-arrow-right"></i></span> Centralized Management</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
