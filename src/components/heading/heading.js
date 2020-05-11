import './heading.scss'
import $ from 'jquery';

class Heading {
  render(pageName) {
    const heading = $('<h2>');
    heading.text(`Hey there this is page ${pageName}`);

   $('body').append(heading);
  }
}

export default Heading;
