import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="footerRow">
                    <p>&copy; 2017 CODY.CLARK</p>
                    <div className="socialMediaLinks">
                        <a href="https://github.com/cclarks">github</a>
                        <a href="https://www.linkedin.com/in/cody-clark-7b48b7124/">linkedin</a>
                    </div>
                </div>
            </section>
        )
    }
}