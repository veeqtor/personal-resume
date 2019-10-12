import React from "react"

const SkillBar = ({ subject, mark, fullMark }) => (
  <div id='skill-bar'>
    <div className="bar-wrapper">
      <p
        className="bar wow fadeIn"
        data-wow-duration="2s"
        data-wow-offset="100"
      >{subject}</p>
      <span className="bar wow slideInLeft"
            data-wow-duration="2s"
            data-wow-offset="100"
            style={
              {
                width: `${mark}`,
                maxWidth: `${fullMark}`,
              }
            }>
        {mark}
      </span>
    </div>
  </div>
)

export default SkillBar
