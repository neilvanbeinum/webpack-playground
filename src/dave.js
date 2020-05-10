import DaveImage from './components/dave-image/dave-image.js'
import Heading from './components/heading/heading.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('dave'));

const daveImage = new DaveImage();
daveImage.render();
