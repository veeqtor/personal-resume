import React, { Component } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from "../../images/logo.svg"
import data from "../../data/siteData"

class Navigation extends Component {
  state = {
    navOpen: false,
  }

  toggleNav = () => {
    this.setState({
      ...this.state,
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    const {
      indexProps: {
        location: {
          hash,
        },
      },
    } = this.props

    return (
      <nav id='navigation'>
        <header>
          <div className='logo'>
            <AnchorLink href="#layout">
              <img src={logo} alt='Logo'/>
              <span>
                {data.brand}
              </span>
            </AnchorLink>
          </div>
          <ul className={`nav-links ${this.state.navOpen ? "nav-links--open" : ""}`}>
            {data.navLinks.map((link, index) => {
              const fadeIn = { "animation": `navFadeIn 0.5s ease-in-out forwards ${index / 5}s` }
              return (
                <li key={index}
                    style={this.state.navOpen ? fadeIn : {}}>
                  <AnchorLink href={link.path}>
                  <span className={hash === link.path ? "active" : ""}>
                    {link.name}
                  </span>
                  </AnchorLink>
                </li>
              )
            })}
          </ul>

          <div className={`mobile-btn ${this.state.navOpen ? "toggled" : ""}`}
               onClick={() => this.toggleNav()}>
            <span/>
            <span/>
            <span/>
          </div>
        </header>
      </nav>
    )
  }
}

export default Navigation
