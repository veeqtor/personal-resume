import React, { PureComponent } from "react"
import SkillBar from "./skillBar"
import data from "../data/siteData"

class Skills extends PureComponent {
  render() {
    return (
      <div id='skills'>
        <h3 className="wow fadeIn"
            data-wow-duration="2s"
            data-wow-offset="100"
        >skills</h3>
        <div className="soft wow fadeInUp"
             data-wow-duration="1s"
             data-wow-offset="50">
          {data.softSkills.map((skill, index) =>
            <SkillBar key={`skill.subject` + index} subject={skill.subject}
                      mark={`${skill.mark}%`}
                      fullMark={skill.fullMark}/>)}
        </div>

        <div className="tech wow fadeInUp"
             data-wow-duration="2s"
             data-wow-offset="50">
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
