import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';
// JSON schema validator
import Ajv from 'ajv';

require('./style.scss');
var ajv = new Ajv();

// Creation of the JSON schema
const schema = {
  "type":"array",
  "items":{
    "type":"object",
    "required":["created_at","name","status","type","updated_at","url","uuid"],
    "properties": {
      "created_at": {"type":"string"},
      "name": {"type":"string"},
      "status": {"type":"string"},
      "type": {"type":"string"},
      "updated_at": {"type":"string"},
      "url": {"type":"string"},
      "uuid": {"type":"string"} 
    }           
  }
}


export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // bacground will contain the image url array
      background: [],
      // content is the index used for "background" state property and navigate between each pictures
      current: undefined,
      // ready is used to know if valids url have been inserted in "background" state property
      ready: false
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  // componentWillMount() is invoked immediately before mounting occurs. It is specific to React.js
  // Gets the JSON file from the API and sets the background state property to array of images url "urlArray"
  componentWillMount() {
    let self = this;
    $.getJSON("http://api.new-feature.sparkhire.com/v1.0/companies/e9aafdd9-d9f3-455e-b495-58d087415857/photos",function(data){
    })
    // Error: API with wrong format
    .fail(function() {
      console.log("error bad API");
    })
    // if no failure to get the json array
    .done(function(data){
      // Check if the JSON file respect the schema pre-defined
      if(ajv.validate(schema, data)){
        // Sets the background state property to the 
        let urlArray = [];
        // each() is a synchronous function, we do not need to use a call back or a promise for asynchronous issues.
        $.each(data,function(i,item){
          //push each image url in the urlArray
          urlArray.push(item.url);
        });
        // sets background state with the urlArray. Sets current to 0 and ready to true.
        self.setState({ background: urlArray, current: 0, ready: true });
      }
      else{
        // return error if JSON file does not respect the schema
        console.log(ajv.errors);
      }
    });
  }

  render() {
    return (
      <div className="slider">
        {/* The Current Image*/}
        {
          this.state.ready ?
          /*if this.state.ready is true then image display */
          <Slide
          /* passing the three following arguments to Slide */
            background={this.state.background}
            current={this.state.current}
            ready={this.state.ready}
          />
          /* this.state.ready is false then nothing dispayed */
          : null
        }

        {/* Arrows */}
        <LeftArrow 
        /* passing the following argument to LeftArrow */
        previousSlide={this.previousSlide} />
        
        <RightArrow 
        /* passing the following argument to RightArrow */
        nextSlide={this.nextSlide} />

        {/* Dots */}
        <Dots
        /* passing the three following argument to Dots */
          numberOfDots={this.state.background.length}
          isCurrent={this.state.current}
          dotClick={this.dotClick}
         />

      </div>
    );
  }

  /* Handle cLicking of dots */
  dotClick(dotIndex) {
    this.setState({ current: dotIndex })
  }

  /* Previous & Next Slide Functionality */
  previousSlide() {

    if(this.state.current >= 1)
      this.setState({ current: this.state.current - 1 })
    if(this.state.current === 0)
      this.setState({ current: this.state.background.length - 1 })
  }

  nextSlide() {

    if((this.state.current >= 0) && (this.state.current !== this.state.background.length - 1))
      this.setState({ current: this.state.current + 1 })
    if(this.state.current === this.state.background.length - 1) {
      this.setState({ current: 0 })
    }
  }
} 

// end class
