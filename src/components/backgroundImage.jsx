import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"


const BackgroundImageSection = ({ id, className, children }) => (
  <StaticQuery query={graphql` query {
        img: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `} render={data => {
    return (
      <BackgroundImage Tag="section"
                       id={id}
                       className={className}
                       fluid={data.img.childImageSharp.fluid}>
        <div className='overlay'/>
        {children}
      </BackgroundImage>
    )
  }
  }
  />
)

BackgroundImageSection.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
}

BackgroundImageSection.defaultProps = {
  className: ``,
  id: ``,
}


export default BackgroundImageSection
