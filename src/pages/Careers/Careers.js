import React from 'react'
import CareersList from '../../components/CareersList/CareersList'
import Banner from '../../components/shared/Banner'
import './Careers.css'

function Careers() {
    return (
        <>
            <Banner title={'Careers'} />
            <CareersList />
            <h2 className="second-heading">
                Alternatively candidates can fill in the Candidate Information Form below.
            </h2>
            <div className="form-styling">
                <iframe title='Candidate Info Form' samesite="secure" src="https://forms.office.com/Pages/ResponsePage.aspx?id=KYJsGaVSEkCuAuXGKlet7z1hY1rB2FtLvH1Xwu7VLa9UNkRBWEVCWjFUU0tWQUxaQUdVMFdXM0MzNS4u&embed=true" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true"> </iframe>
            </div>
        </>
    )
}

export default Careers
