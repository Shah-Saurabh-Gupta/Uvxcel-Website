import React from 'react'
import './CareersList.css'

function CareersList() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    return (
        <>
        {/* <i className="fas fa-times-circle"></i> -----> for job not Available
        <i className="fas fa-check-circle"></i> -----> for jobs Available */}
            <div className="careers__list-container">
                <ul className="careers-ul">
                    <li className="careers-li">
                        <span className="number">SNo.</span>
                        <span className="name">Designation</span>
                        <span className="points">Working Loction</span>
                        <span className="badge">Availability</span>
                    </li>
                    <li className="careers-li" onClick={() => openInNewTab('https://in.indeed.com/jobs?q=uvXcel%20IT%20Solutions&from=vj&l=Pune%2C%20Maharashtra&vjk=6e42ac4718f1d7f7')}>
                        <span className="number">1</span>
                        <span className="name">Typescript Developer</span>
                        <span className="points">Temporarily Remote</span>
                        <span className="badge"><i className="fas fa-check-circle"></i></span>
                    </li>
                    <li className="careers-li" onClick={() => openInNewTab('https://in.indeed.com/jobs?q=uvXcel%20IT%20Solutions&from=vj&l=Pune%2C%20Maharashtra&vjk=c7eb64a64649451c')}>
                        <span className="number">2</span>
                        <span className="name">Full Stack Developer</span>
                        <span className="points">Remote</span>
                        <span className="badge"><i className="fas fa-check-circle"></i></span>
                    </li>
                    <li className="careers-li" onClick={() => openInNewTab('https://in.indeed.com/jobs?q=uvXcel%20IT%20Solutions&from=vj&l=Pune%2C%20Maharashtra&vjk=1ae3d29863c60b93')}>
                        <span className="number">3</span>
                        <span className="name">Automation Test Engineer</span>
                        <span className="points">Temporarily Remote</span>
                        <span className="badge"><i className="fas fa-check-circle"></i></span>
                    </li>
                    <li className="careers-li" onClick={() => openInNewTab('https://goo.gl/maps/8cDqEWi6VAhg5rSo8')}>
                        <span className="number">4</span>
                        <span className="name">Senior Data Engineer</span>
                        <span className="points">Temporarily Remote</span>
                        <span className="badge"><i className="fas fa-check-circle"></i></span>
                    </li>
                    <li className="careers-li" onClick={() => openInNewTab('https://in.indeed.com/jobs?q=uvXcel%20IT%20Solutions&from=vj&l=Pune%2C%20Maharashtra&vjk=bab6807ed08697d1')}>
                        <span className="number">5</span>
                        <span className="name">Python Developer</span>
                        <span className="points">Temporarily Remote</span>
                        <span className="badge"><i className="fas fa-check-circle"></i></span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CareersList
