import React, { Component } from 'react';

// props contain the argument passed from Slider.js
const RightArrow = (props) => {
	// return the right arrow displayed and if the arrow is clicked then props.nextSlide is called
	// nextSlide is define in Slider.js
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
