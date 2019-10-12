/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../style/main.scss"
import WOW from "wow.js"

const Layout = ({ children }) => {
  const wow = new WOW({
    mobile: false,
  })

  wow.init()

  return (
    <>
      <main id="layout">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
