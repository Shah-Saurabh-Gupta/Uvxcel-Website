import React from 'react'
import './Banner.css'

function Banner(props) {
    return (
        <>
            <div className="banner__title">
                <h3>{props.title}</h3>
            </div>
        </>
    )
}

export default Banner
