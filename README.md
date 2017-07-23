# SlideShow_SparkHire

## Work environment
I spent 5 hours on this project
I had two work environment:
* First, the development environment where I was running ``` npm start``` at the command prompt and I was loading my web page thanks
to http://localhost:8080. Moreover, I was working with live updating, thus, each time my code was changing the webpack was re-built.
This way, I was able to debug directly without having to run again ``` npm start``` to see possible errors in the building process and in the code.
* Second, the production environment created by the Webpack using ```npm run postinstall``` which is a build tool that puts all of my assets, including Javascript, font, and CSS, in nicolasSlideShow.js.
Thus, you just need index.html and nicolasSlideShow.js for production purpose.

## Coding journal
* I first looked for a react skeleton to build a simple app. Thanks to this skeleton, I was able to start working faster on the project.
* Then, I worked on how to retrieve the JSON file from the API using jQuery. Once I had the JSON file, I started working on how to display the images with a slideshow with standard back and forward functionality.
* Next, I started working on the build methodology using the webpack. Thus, it is now possible for you to create the ./dist/ directory by running ```npm run postinstall```. In fact, this directory contains index.html and nicolasSlideShow.js that are the two necessary files to run the application. The index.js file allows those two file to be created because it is used as the entry file for the webpack. Moreover, index.html is created based on the template located in the ./template/ directory.
* Then, I worked on making a functioning slideshow component that can also be reused easily by you in your own HTML file.
To do this, I decided to render the react component Slider (created in Slider.js) into the DOM in the supplied container defined 
in the index.html: document.getElementById("slideShow"). In all, it is now possible to integrate to your web page the slideShow component
by adding the library dependencies (jQuery, Bootstrap, Bootstrap font), the container <div id='slideShow'></div>, 
and the script <script type="text/javascript" src="nicolasSlideShow.js"></script>.
* Next, I decided to use AJV which is a JSON Schema validator to verify if the JSON array received from the API had a required schema.
* Finally, I documented the whole code to make it easy to read. 

## Installation
* Get the repository
```bash
git clone https://github.com/NicolasDesc/SlideShow_SparkHire.git
```
* Install node_modules directory and update the dist directory
```bash
cd SlideShow_SparkHire
npm install
```
* Open index.html located in the dist directory, into your browser
*Author: Nicolas Deschamps*
