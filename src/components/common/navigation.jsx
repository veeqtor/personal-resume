import React, { Component } from "react"
import { navigate } from "@reach/router"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import data from "../../data/siteData"

class Navigation extends Component {
  state = {
    navOpen: false,
  }

  navigateTo = (path) => {
    if (this.state.navOpen) {
      this.setState({
        ...this.state,
        navOpen: !this.state.navOpen,
      })
    }
    navigate(path)
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
            <Link to="/">
              <img src={logo} alt='Logo'/>
              <span>
                {data.brand}
              </span>
            </Link>
          </div>
          <ul className={`nav-links ${this.state.navOpen ? "nav-links--open" : ""}`}>
            {data.navLinks.map((link, index) => {
              const fadeIn = { "animation": `navFadeIn 0.5s ease-in-out forwards ${index / 5}s` }
              return (
                <li key={index}
                    style={this.state.navOpen ? fadeIn : {}}
                    onClick={() => this.navigateTo(link.path)}>
                  <span className={hash === link.path ? "active" : ""}>
                    {link.name}
                  </span>
                </li>)
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
