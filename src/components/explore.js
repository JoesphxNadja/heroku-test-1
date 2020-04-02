import React, { Component } from 'react';

export default class Explore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: ''
        }
    }

    render() {
        return (
            <div className='explore-wrapper'>
                <h1>Check out some of my work!</h1>
            </div>
        )
    }
}