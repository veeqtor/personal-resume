import React, { PureComponent } from "react"
import SkillBar from "./skillBar"
import data from "../data/siteData"

class Skills extends PureComponent {
  render() {
    return (
      <div id='skills'>
        <div className="soft">
          <h2>Soft skills</h2>
          {data.softSkills.map((skill, index) =>
            <SkillBar key={`skill.subject` + index} subject={skill.subject}
                      mark={`${skill.mark}%`}
                      fullMark={skill.fullMark}/>)}
        </div>

        <div className="tech">
          <h2>Tech skills</h2>
          {data.technicalSkills.map((skill, index) =>
            <SkillBar key={`skill.subject` + index} subject={skill.subject}
                      mark={`${skill.mark}%`}
                      fullMark={skill.fullMark}/>)}
        </div>
      </div>
    )
  }
}

export default Skills
