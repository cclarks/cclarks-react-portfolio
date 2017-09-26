import React, {Component} from 'react'
import '../App.css'
import './Skills.css'

export default class Skills extends Component {
  render() {
    return(
      <section className = "skills">
          <h2 className="skillsName">Skills</h2>
          <div className="skills-set skills-i">
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="skills-set2 skills-i">
            <i className="devicon-react-original"></i>
            <i className="devicon-photoshop-plain"></i>
            <i className="devicon-illustrator-plain"></i>
          </div>
      </section>
    )
  }
}
