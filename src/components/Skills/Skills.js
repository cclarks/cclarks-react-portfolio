import React, {Component} from 'react'
import '../App.css'
import './Skills.css'

export default class Skills extends Component {
  render() {
    return(
      <section className = "skills">
          <h2 className="skillsName">Skills</h2>
          <div className="skills-set skills-i">
            <i className="devicon-html5-plain skillsLinks"></i>
            <i className="devicon-css3-plain skillsLinks"></i>
            <i className="devicon-javascript-plain skillsLinks"></i>
          </div>
          <div className="skills-set2 skills-i">
            <i className="devicon-react-original skillsLinks"></i>
            <i className="devicon-photoshop-plain skillsLinks"></i>
            <i className="devicon-illustrator-plain skillsLinks"></i>
          </div>
      </section>
    )
  }
}
