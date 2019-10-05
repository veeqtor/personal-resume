import React, { PureComponent } from "react"
import SkillBar from "./skillBar"
import data from "../data/siteData"

class Skills extends PureComponent {
  render() {
    return (
      <div id='skills'>
        <h3>skills</h3>
        <div className="soft">
          {data.softSkills.map((skill, index) =>
            <SkillBar key={`skill.subject` + index} subject={skill.subject}
                      mark={`${skill.mark}%`}
                      fullMark={skill.fullMark}/>)}
        </div>

        <div className="tech">
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
