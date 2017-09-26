import React, {Component} from 'react'
import '../App.css'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <section id="about">
          <h2 id = "workHard">working hard & being nice to people</h2>
          <div id = "workDesDiv" >
          <p id="workDesc1">Front end developer with a love for the textural subtleties of life </p>
          <p id="workDesc2">How about we get to know each other?</p>
          </div>
          <div className="socialDiv">
              <a href="https://github.com/cclarks" id="gitHub" className="sociallinks gitHub">
                  <i className="fa fa-github fa-3x" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/cody-clark-7b48b7124/" className="sociallinks linkIn">
                  <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
              </a>
          </div>
      </section>
    )
  }
}
