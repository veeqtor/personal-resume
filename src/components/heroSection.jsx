import React from "react"
import BackgroundImageSection from "./backgroundImage"
import Hero from "./hero"


const HeroSection = ({dataProps}) => (
  <BackgroundImageSection id='bg-section' className='bg-image'>
    <Hero data={dataProps}/>
  </BackgroundImageSection>
)

export default HeroSection
