import React, { PureComponent } from "react"
import { FaDesktop } from "react-icons/fa"
import { FaBook } from "react-icons/fa"

import data from "../data/siteData"

class MyStory extends PureComponent {
  render() {
    return (
      <div id='experience'>
        <h3 className="wow fadeIn"
            data-wow-duration="1s"
            data-wow-offset="100"
        >My Story</h3>
        <div className='timeline'>
          <div className='icon-space'>
            <div className='icon-inner'>
              <span><FaBook/></span>
            </div>
          </div>
          <ul>
            {data.academicHistory.map((entry, index) => (
              <li className="wow slideInUp"
                  data-wow-duration="2s"
                  data-wow-offset="100"
                  key={`${entry.school + index}`}>
                <div className='content'>
                  <div className="time-title">
                    <h4>{entry.certification}</h4>
                    <h4>{entry.year}</h4>
                  </div>
                  <h5>{entry.school}</h5>
                  {entry.descriptions !== null && <span>
                    {entry.descriptions.length > 0 &&
                    <ul>
                      {
                        entry.descriptions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      }
                    </ul>}
                  </span>}
                </div>
              </li>
            ))}
            <div style={{ clear: "both" }}/>
          </ul>

          <div className='icon-space'>
            <div className='icon-inner'>
              <span><FaDesktop/></span>
            </div>
          </div>
          <ul>
            {data.careerHistory.map((entry, index) => (
              <li
                className="wow slideInUp"
                data-wow-duration="2s"
                data-wow-offset="100"
                key={`${entry.company + index}`}>
                <div className='content'>
                  <div className="time-title">
                    <h3>{entry.title}</h3>
                    <h4>{entry.year}</h4>
                  </div>
                  <h5>{entry.company}</h5>
                  <h5>{entry.location}</h5>
                  {entry.descriptions !== null && <span>
                    {entry.descriptions.length > 0 &&
                    <ul>
                      {
                        entry.descriptions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      }
                    </ul>}
                  </span>}
                </div>
              </li>
            ))}
            <div style={{ clear: "both" }}/>
          </ul>
        </div>
      </div>
    )
  }
}

export default MyStory

