import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: ''
        }
    }

    render() {
        return (
            <div className='header-wrapper'>
                <div className="links-wrapper">
                    <div className="nav-links">
                        <a href="homepage.js">Home</a>
                    </div>

                    <div className="nav-links">
                        <a href="explore.js">Explore</a>
                    </div>

                    <div className="nav-links">
                        <a href="about.js">About</a>
                    </div>
                    
                    <div className="nav-links">
                        <a href="contact.js">Contact</a>
                    </div>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search My Stuff" />

                    <div className="icon">
                        
                        <FontAwesomeIcon icon="search" />
                    </div>
                </div>
            </div>
            
            // <div className="content-wrapper">
            //     <div className="slider-image-wrapper">
            //         <h1>My Photoshop Work</h1>
            //     </div>
            // </div>
        )
    }
}