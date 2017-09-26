import React, { Component } from 'react';
import './App.css';
import '../components/About/About.css'
import '../components/Portfolio/Portfolio.css'
import '../components/Contact/Contact.css'
import '../components/Skills/Skills.css'
import '../components/Resume/Resume.css'

import About from '../components/About/About.js'
import Portfolio from '../components/Portfolio/Portfolio.js'
import Contact from '../components/Contact/Contact.js'
import Skills from '../components/Skills/Skills.js'
import Resume from '../components/Resume/Resume.js'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="header-top">
            <nav className= "navigation">
                <div className="flexNav">
                    <div className="nav flexDiv">
                      <a href="#" id="logoA">CODY.CLARK</a>
                        <ul>
                            <li className="navlink"><a href="#go-down">ABOUT</a></li>
                            <li className=" navlink"><a href="#gitHub">PORTFOLIO</a></li>
                            <li className=" navlink"><a href="#resume">RESUME</a></li>
                            <li className=" navlink"><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
                <div className="banner-michael">
                    <h1 id ="bannerHi">Hey, Hi & Hello</h1>
                    <div id="go-down" className="go-down">
                        <a href="#gitHub" className="downArrow">
                            <i className="fa fa-angle-down angle-down fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </section>
        <About />
        <Portfolio />
        <Contact />
        <Skills />
        <Resume />
        <section className="footer">
            <div className="footerRow">
                <p>&copy; 2017 CODY.CLARK</p>
                <div className="socialMediaLinks">
                    <a href="https://github.com/cclarks"><i className="fa fa-github fa-2x sociallinks" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/cody-clark-7b48b7124/"><i className="fa fa-linkedin fa-2x sociallinks" aria-hidden="true"></i></a>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
