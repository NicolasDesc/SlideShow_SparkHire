import React, { Component } from 'react';

// props contain the argument passed from Slider.js
const LeftArrow = (props) => {
  return (
  	// return the left arrow displayed and if the arrow is clicked then props.previousSlide is called
	// previousSlide is define in Slider.js
    <div className="backArrow" onClick={props.previousSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;
