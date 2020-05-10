import DaveImage from './components/dave-image/dave-image.js'
import Heading from './components/heading/heading.js';
import React from 'react';

const heading = new Heading();
heading.render('dave');

console.dir(React);

const daveImage = new DaveImage();
daveImage.render();
