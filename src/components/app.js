import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';

import Homepage from './homepage';
import Explore from './explore';

library.add(faSearch)

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Pixel Pusher</h1>

        <Homepage />
        <Explore />
      </div>
    );
  }
}