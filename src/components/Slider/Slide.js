import React, { Component } from 'react';

// props contain the three arguments passed from Slider.js
const Slide = (props) => {
  const current = props.background[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
  // return the image displayed in a right
  return <div className="slide" style={styles.imageBackground}></div>
}

export default Slide;
