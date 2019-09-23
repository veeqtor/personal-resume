import React from "react"
import BackgroundImageSection from "./backgroundImage"
import Hero from "./hero"


const HeroSection = ({ heroPortrait }) => (
  <BackgroundImageSection id='bg-section' className='bg-image'>
    <Hero heroPortrait={heroPortrait}/>
  </BackgroundImageSection>
)

export default HeroSection
