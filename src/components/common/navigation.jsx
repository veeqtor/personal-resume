import React, { Component } from "react"
import { Link } from "gatsby"

class Navigation extends Component {
  state = {

  }
  render() {
    const {siteTitle} = this.props;
    return (
        <nav id='navigation'>
          <header
            style={{
              background: `rebeccapurple`,
              marginBottom: `1.45rem`,
            }}
          >
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
              }}
            >
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  {siteTitle}
                </Link>
              </h1>
            </div>
          </header>
        </nav>
    )
  }
}

export default Navigation
