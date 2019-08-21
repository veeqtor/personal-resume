import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/common/navigation"
import Footer from "../components/common/footer"
import HeroSection from "../components/heroSection"
import AboutSection from "../components/about"

const IndexPage = (props) => {
  return (
    <>
      <SEO title='Home'/>
      <Navigation indexProps={props}/>
      <Layout>
        <HeroSection dataProps={props}/>
        <AboutSection dataProps={props}/>
      </Layout>
      <Footer/>
    </>
  )
}

export const query = graphql`{
  heroPortrait: file(relativePath: {eq: "portrait.png"}) {
    childImageSharp {
      fixed(width: 200, height: 200, fit: COVER, cropFocus: NORTH) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  aboutPortrait: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fixed(height: 500, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}`;

export default IndexPage
