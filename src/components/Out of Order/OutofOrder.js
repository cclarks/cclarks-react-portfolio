import React, { Component } from 'react';
import StormClouds from './StormClouds';
require('./OutofOrder.css');
export default class OutofOrder extends Component {
    render() {
        return (
            <div>
                <h1 className="header">Out of Order</h1>
                <StormClouds />
                <h5 className="sub-header">yup really, CJ</h5>
            </div>
        )
    }
}