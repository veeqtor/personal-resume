import React from "react"
import Img from "gatsby-image"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"
import data from "../data/siteData"

const HeroSection = ({ heroPortrait }) => (
  <div id='hero'>
    <div className='head-shot wow fadeInDown'
         data-wow-duration="2s">
      <Img fixed={heroPortrait.childImageSharp.fixed} className='head-shot-img'/>
    </div>
    <div className='description'>
      <p className='description-intro wow fadeInDown delay-1s'>Hello, I'm</p>
      <h1 className='description-name wow fadeInRight delay-1s'>{data.userInfo.name}</h1>
      <h3 className='description-title wow fadeInRight delay-2s'>{data.userInfo.title}</h3>
      <p className='description-location wow fadeInUp delay-2s'>{data.userInfo.location}</p>
      <div className='social-media-icons wow fadeInRight delay-2s'>
        <a href={data.userInfo.socialMediaLinks.facebook} target='_blank' rel="noopener noreferrer">
          <span className='facebook'><FaFacebookF/></span>
        </a>
        <a href={data.userInfo.socialMediaLinks.twitter} target='_blank' rel="noopener noreferrer">
          <span className='twitter'><FaTwitter/></span>
        </a>
        <a href={data.userInfo.socialMediaLinks.gitHub} target='_blank' rel="noopener noreferrer">
          <span className='github'><FaGithub/></span>
        </a>
        <a href={data.userInfo.socialMediaLinks.linkedIn} target='_blank' rel="noopener noreferrer">
          <span className='linkedIn'><FaLinkedinIn/></span>
        </a>
      </div>
    </div>
  </div>
)

export default HeroSection
