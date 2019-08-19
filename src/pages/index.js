import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/common/navigation"
import Footer from "../components/common/footer"

const IndexPage = (props) => {
  return (
    <>
      <SEO title='Home'/>
      <Navigation indexProps={props}/>
      <Layout>
        <p>Home</p>
      </Layout>
      <Footer/>
    </>
  )
}

export default IndexPage
