import React, {Component} from 'react'
import '../App.css'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h2 className="contact-h2">Let's Chat!</h2>
          <div className="contactDiv">
            <a href="mailto:c.susie.run@gmail.com">
                <i className="fa fa-envelope fa-3x sociallinks contactLinks" aria-hidden="true"></i>
            </a>
            <a href="tel:+1-727-317-6741">
              <i className="fa fa-phone fa-3x sociallinks contactLinks" aria-hidden="true"></i>
            </a>
          </div>
      </div>
    )
  }
}
