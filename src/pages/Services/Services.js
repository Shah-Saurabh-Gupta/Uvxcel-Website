import React, { useState } from 'react'
import { Button } from '../../components/Button';
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import ServiceModal from '../../components/ServiceModal/ServiceModal';
import Banner from '../../components/shared/Banner';
import './Services.css'

function Services() {
    return (
        <>
            <Banner title={"Services"} />
            <div className="service-container">
                {/* <h3 className="title">Services</h3> */}
                <div className="box-container">
                    <div className="box">
                        <span className="number">01</span>
                        <i className="fas fa-code"></i>
                        <h3>Infrastructure Management</h3>
                        <p>1. OnPrem Infra Management<br />
                            2. Cloud Management<br />
                            3. Hybrid Management<br />
                            4. Database Management<br />
                            5. Network & Storage Management<br />
                            6. Backup & Recovery Management</p>
                    </div>
                    <div className="box">
                        <span className="number">02</span>
                        <i className="fas fa-paint-brush"></i>
                        <h3>E-commerce</h3>
                        <p>1. eCommerce Product Development and Integration<br />
                            2. eCommerce Platform Analysis, Fitment, Recommendations<br />
                            3. eCommerce Platform Services and Implementation<br />
                            4. Omni-Channel Implementation<br />
                            5. Integrations with Backoffice Systems like WMS, OMS, ERP, Logistics</p>
                    </div>
                    <div className="box">
                        <span className="number">03</span>
                        <i className="fas fa-bullhorn"></i>
                        <h3>Business Intelligence</h3>
                        <p>1. Data Sources Management<br />
                            2. Data Warehousing<br />
                            3. Real-time BI<br />
                            4. Corporate Performance Management( CPM)<br />
                            5. OLAP (Online Analytical Processing)</p>
                    </div>
                    <div className="box">
                        <span className="number">04</span>
                        <i className="fas fa-mobile"></i>
                        <h3>E-learning</h3>
                        <p>1.Interactive Web-Based Learning<br />
                            2. Simulation Based Learning<br />
                            3. Scenario Based Learning<br />
                            4. Gamification<br />
                            5. SaaS Application Offerings<br />
                            6. Individual Applications<br />
                            7. Custom Learning Modules</p>
                    </div>
                    <div className="box">
                        <span className="number">05</span>
                        <i className="fab fa-wordpress"></i>
                        <h3>Application Development</h3>
                        <p>1. Dnyanda - An education app for students from under-privileged section.</p>
                    </div>
                    <div className="box">
                        <span className="number">06</span>
                        <i className="fas fa-tools"></i>
                        <h3>Product Engineering</h3>
                        <p>1. Ideation & Conceptualization<br />
                            2. Business Analysis<br />
                            3. Architecture & Design<br />
                            4. Development<br />
                            5. Test Automation<br />
                            6. Release Management & DevOps<br />
                            7. Sustained Engineering & Support</p>
                    </div>
                    <div className="box">
                        <span className="number">07</span>
                        <i className="fas fa-moon"></i>
                        <h3>Mobile Applicatons</h3>
                        <p>1. Mobile App Development<br />
                            2. Cross Platform<br />
                            3. UI/ UX and Security<br />
                            4. Digital Innovation<br />
                            5. Connecting across touchpoints</p>
                    </div>
                    <div className="box">
                        <span className="number">08</span>
                        <i className="fas fa-sun"></i>
                        <h3>Software as Service offering</h3>
                        <p>1. SaaS offerings for Education Institutes, Medical Facilities, Groceries, Essential Goods and MSMEs.</p>
                    </div>
                    <div className="box">
                        <span className="number">09</span>
                        <i className="fas fa-rocket"></i>
                        <h3>Entreprise Applications and Data Architecture</h3>
                        <p>1. Business Centric Architecture<br />
                            2. Smart & Adaptable<br />
                            3. Collaboration & Governance<br />
                            4 .Secure & Resilient<br />
                            5. Robust & Scalable<br />
                            6. Centralized Management</p>
                    </div>
                </div>
            </div>


            {/* <div className="agent">
                <div className="a-heading">
                    <h1>Services</h1>
                    <p>Lorem ipsum dolor sit amet consecteur adipisicing elit. Aperium consecutur</p>
                </div>
                <div className="b-container">
                    <ServiceCard image={serviceimg1} name="Website Development" />
                    <ServiceCard image={serviceimg2} name="Cloud Computing" />
                    <ServiceCard image={serviceimg3} name="AI and IOT" />
                </div>
            </div> */}
        </>
    )
}

export default Services
