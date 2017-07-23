import React from 'react';
import { render } from 'react-dom';
import Slider from './components/Slider/Slider';


var ReactDOM = require('react-dom');


// index.js is used as en entry for the webpack that creates the index.html and the nicolasSlideShow.js

// render the react component Slider into the DOM in the supplied container defined in the index.html: document.getElementById("slideShow")
ReactDOM.render(
  <Slider />,
  document.getElementById("slideShow")
);
