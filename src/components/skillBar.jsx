import React from "react"

const SkillBar = ({ subject, mark, fullMark }) => (
  <div id='skill-bar'>
    <div className="bar-wrapper">
      <p>{subject}</p>
      <span className="bar"
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
