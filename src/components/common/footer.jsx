import React from "react"
import data from "../../data/siteData"

const Footer = () => {
  return (
    <footer id="contact">
      <h3 className="footer-header">Get in touch</h3>
      <div className="footer-contacts wow fadeInUp"
           data-wow-duration="2s"
           data-wow-offset="50"
      >
        <ul>
          <li><a href={data.userInfo.socialMediaLinks.twitter}
                 target='_blank' rel="noopener noreferrer"
                 className='tw'>TW</a></li>
          <li><a href={data.userInfo.socialMediaLinks.linkedIn}
                 target='_blank' rel="noopener noreferrer"
                 className='in'>IN</a></li>
          <li><a href={data.userInfo.socialMediaLinks.facebook}
                 target='_blank' rel="noopener noreferrer"
                 className='fb'>FB</a></li>
          <li><a href={`mailto:${data.userInfo.email}`}
                 target='_blank' rel="noopener noreferrer"
                 className='mail'>EMAIL</a></li>
        </ul>
      </div>
      <div className="footer-sub wow fadeInUp"
           data-wow-duration="2s">
        <span>&copy; {new Date().getFullYear()}, Victor Nwokeocha</span>
      </div>
    </footer>
  )
}

export default Footer
