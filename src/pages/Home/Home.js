import React from 'react'
import HeroSection from '../../components/HeroSection'
import { homeObjOne } from './Data'

function Home() {
    return (
        <>
            <div id="home">
                <HeroSection {...homeObjOne} />
                {/* <HeroSection {...homeObjThree} /> */}
                {/* <HeroSection {...homeObjTwo} /> */}
                {/* <HeroSection {...homeObjFour} /> */}
            </div>
        </>
    )
}

export default Home
