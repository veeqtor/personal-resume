import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/common/navigation"
import Footer from "../components/common/footer"

const IndexPage = () => {
  return (
    <>
      <Navigation/>
      <Layout>
        <SEO title="Home"/>
        <h1>Hi people</h1>
        <p>Welcome to your new my new site.</p>
      </Layout>
      <Footer/>
    </>
  )
}

export default IndexPage
