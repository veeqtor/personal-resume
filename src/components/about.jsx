import React from "react"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"
import angular from "../images/angular.svg"
import python from "../images/python.svg"
import react from "../images/reactjs.svg"
import javascript from "../images/javascript.svg"
import html5 from "../images/html5.svg"
import css3 from "../images/css3.svg"
import flask from "../images/flask_logo.svg"
import django from "../images/django.svg"
import data from "../data/siteData"

const AboutSection = ({ dataProps: { data: { aboutPortrait } } }) => {
  return (
    <div id='about'>
      <div className='about-description'>
        <h3>About Me</h3>
        <p>{data.userInfo.description}</p>
        <div className='about-description-framework-icons'>
          <a href="#!" target='_blank'>
            <img height='35px' src={python} alt="Python"/>
          </a>
          <a href="#!" target='_blank'>
            <img height='35px' src={django} alt="Python"/>
          </a>
          <a href="#!" target='_blank'>
            <img height='35px' src={flask} alt="Python"/>
          </a>
          <br/>
          <a href="#!" target='_blank'>
            <img height='35px' src={javascript} alt="Javascript"/>
          </a>
          <a href="#!" target='_blank'>
            <img height='35px' src={angular} alt="Angular"/>
          </a>
          <a href="#!" target='_blank'>
            <img height='35px' src={react} alt="Reactjs"/>
          </a>
          <br/>
          <a href="#!" target='_blank'>
            <img height='35px' src={html5} alt="Html5"/>
          </a>
          <a href="#!" target='_blank'>
            <img height='35px' src={css3} alt="CSS3"/>
          </a>
        </div>
        <a href={data.userInfo.gitResume} target='_blank'>
          <span><FaGithub/></span>
          <span>&nbsp;Github Resume</span></a>
      </div>
      <div className='about-image'>
        <Img fixed={aboutPortrait.childImageSharp.fixed}
             className='about-image-portrait'/>
      </div>
    </div>
  )
}


export default AboutSection
