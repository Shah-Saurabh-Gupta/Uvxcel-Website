import React from 'react'
import Banner from '../../components/shared/Banner'
import './Products.css'

function Products() {
  return (
    <>
      <Banner title={'Products'} />
      <div className="product-container">
        {/* <h3 className="title">Services</h3> */}
        <div className="box-container">
          <div className="box">
            <span className="number">01</span>
            <i className="fas fa-code"></i>
            <h3>Customer Outreach - Improve Website To Capture New Customers</h3>
            <p>Tracking webpages consumption and user behavior to improve the website for better outreach with new and existing customers. Work on the frontend and backend to deliver the correct information (data maps, charts, and forms) as per the customer heatmap on the website. Improve the website content and increase localized SEO to capture more customers by delivering the right content at the right place.</p>
          </div>
          <div className="box">
            <span className="number">02</span>
            <i className="fas fa-paint-brush"></i>
            <h3>Online Email Campaign - Enhance User Engagement W/ Machine Learning</h3>
            <p>Personalized campaign emails to the subscribers and visitors on the website or virtual seminars. Email campaigns addressed to the customer have more chances of getting a response back than a regular one. It helps make the most from a virtual seminar, website visit & online conference, for the visitor and help them to make faster decisions.</p>
          </div>
          <div className="box">
            <span className="number">03</span>
            <i className="fas fa-bullhorn"></i>
            <h3>Ecommerce Chatbot - Improving User Experience W/ AI & ML</h3>
            <p>Improving User Experience for an ecommerce customer is a big challenge, which is where we step in and implement Artificial Intelligence (AI) and Machine Learning (ML) based modules. Understanding what customers are looking for based on the inputs to the questions will leverage the set of data to be improved and translated in a better way to guide them to the product or service they are looking for OR get status updates on their orders. If a product of interest is identified then the relevant product/s will be shown to the customer to choose from or the relevant categories are shown.</p>
          </div>
          <div className="box">
            <span className="number">04</span>
            <i className="fas fa-mobile"></i>
            <h3>Data Services</h3>
            <p>1. Built team to perform ongoing standardized framework and configuration based ETL development using SQL Server Integration Services for 35+ clients to track telecom data into a centralized data repository<br />
              2. Built team to deliver ongoing canned standard reports using SQL Server Reporting Services, integrated into portal or subscribed on email or file servers<br />
              3. Delivered managed PROD Support, DBA and deployment services<br />
              4. Delivered automated, configuration based data retention solution as per legal requirements and to adhere to GDPR, PII and PCI compliance.<br />
              5. Delivered Migration Services to latest SQL Server version including porting to Geo redundant servers.<br />
              6. Provided managed services to deliver adhoc database development</p>
          </div>
          <div className="box">
            <span className="number">05</span>
            <i className="fas fa-mobile"></i>
            <h3>BI & DW Solutions</h3>
            <p>1. Right from scratch design, modelling and development of department specific Data Marts and a centralized Enterprise Data Warehouse<br />
              2. Designed hundreds of facts and dimensions including conformed dimensions and built ETL processes to load them from numerous data sources (files - csv, excel, xml etc and DB's - Access, Oracle, MySQL, SQL Server for different source applications)<br />
              3. Creation of Tabular model cubes using Azure Analysis services and development of numerous measures using DAX - Delivered interactive Dashboards using Power BI and Paginated Reports using Power BI Premium to deliver actionable decision making capabilities across different user groups<br />
              4. Provided managed and secured access through Active Directory Groups, Role based access to analytics and dashboard</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
