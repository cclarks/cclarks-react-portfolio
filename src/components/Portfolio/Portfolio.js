import React, {Component} from 'react'
import '../App.css'
import './Portfolio.css'

import work1 from "../../assets/portfolio1.png"
import work2 from "../../assets/portfolio2.png"

export default class Portfolio extends Component {
  render() {
    return (
      <section id= "portfolio">
          <div className="grid">
              <h2 id="portfolio-title">projects</h2>
              {/* <!-- WORK 1 --> */}
              <figure className="work1 workFigure">
                  {/* <!-- 1440 × 418 is the size for the images --> */}
                  <img src={work1} alt="" />
                  <figcaption>
                      <h2>Song List Suggestion App</h2>
                      <div className="description-paragraph">
                        <p>React project where I exercised my knowledge of state, props, and forms to create an application that shares the song that you are listening to or suggesting to other users.</p>
                      </div>
                  </figcaption>
              </figure>
              {/* <!-- WORK 2 --> */}
              <figure className = "work2 workFigure">
                  <img src={work2} alt="" />
                  <figcaption>
                      <h2>Javascript Calculator</h2>
                      <div className="description-paragraph">
                        <p>Javascript project where I exercised my knowledge of Javascript and CSS to create a beautiful working Calculator</p>
                      </div>
                  </figcaption>
              </figure>
          </div>
      </section>
    )
  }
}
