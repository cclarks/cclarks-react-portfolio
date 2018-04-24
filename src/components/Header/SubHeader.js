import React, { Component } from 'react';

export default class SubHeader extends Component {
    render() {
        return(
            <section className="subheader-section">
                <div className="banner-michael">
                    <span className="sub-header1">Hey</span>
                    <span className="sub-header2">Hi</span>
                    <span className="sub-header3">Hello</span>
                    <div id="go-down" className="go-down">
                        <a href="#gitHub" className="downArrow">
                            <i className="fa fa-angle-down angle-down fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
        </section>
        )
    }
}