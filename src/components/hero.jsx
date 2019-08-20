import React from "react"
import Img from "gatsby-image"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"
import data from "../data/siteData"

export default ({ data: { data: { portrait } } }) => {
  return (
    <div id='hero'>
      <div className='head-shot'>
        <Img fixed={portrait.childImageSharp.fixed} className='head-shot-img'/>
      </div>
      <div className='description'>
        <p className='description-intro'>Hello, I'm</p>
        <h1 className='description-name'>{data.userInfo.name}</h1>
        <h3 className='description-title'>{data.userInfo.title}</h3>
        <p className='description-location'>{data.userInfo.location}</p>
        <div className='social-media-icons'>
          <a href={data.userInfo.socialMediaLinks.facebook}>
            <span className='facebook'><FaFacebookF/></span>
          </a>
          <a href={data.userInfo.socialMediaLinks.twitter}>
            <span className='twitter'><FaTwitter/></span>
          </a>
          <a href={data.userInfo.socialMediaLinks.gitHub}>
            <span className='github'><FaGithub/></span>
          </a>
          <a href={data.userInfo.socialMediaLinks.linkedIn}>
            <span className='linkedIn'><FaLinkedinIn/></span>
          </a>
        </div>
      </div>
    </div>
  )
}
