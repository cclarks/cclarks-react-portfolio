import React, { Component } from 'react';
import SubHeader from './SubHeader';

export default class Header extends Component {
    render() {
        return (
            <div>
                <section className="header-top">
                    <nav className= "navigation">
                        <div className="flexNav">
                            <div className="nav flexDiv">
                            <a id="logoA">CODY.CLARK</a>
                                <ul>
                                    <li className="navlink"><a href="#go-down">ABOUT</a></li>
                                    <li className=" navlink"><a href="#gitHub">PORTFOLIO</a></li>
                                    <li className=" navlink"><a href="#resume">RESUME</a></li>
                                    <li className=" navlink"><a href="#contact">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                        <SubHeader/>
                    </nav>
                </section>
            </div>
        )
    }
}