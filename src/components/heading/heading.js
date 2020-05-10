import './heading.scss'

class Heading {
  render() {
    const heading = document.createElement('h2');
    heading.classList.add('heading');
    heading.textContent = 'Hey there';

    document.body.appendChild(heading);
  }
}

export default Heading;
