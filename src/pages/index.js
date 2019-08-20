import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/common/navigation"
import Footer from "../components/common/footer"
import HeroSection from "../components/heroSection"
import { graphql } from "gatsby"

const IndexPage = (props) => {
  return (
    <>
      <SEO title='Home'/>
      <Navigation indexProps={props}/>
      <Layout>
        <HeroSection dataProps={props}/>
      </Layout>
      <Footer/>
    </>
  )
}

export const query = graphql`{
  portrait: file(relativePath: {eq: "portrait.png"}) {
    childImageSharp {
      fixed(width: 200, height: 200, fit: COVER, cropFocus: NORTH) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}`;

export default IndexPage
