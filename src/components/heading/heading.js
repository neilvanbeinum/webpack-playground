import './heading.scss'

class Heading {
  render(pageName) {
    const heading = document.createElement('h2');
    heading.classList.add('heading');
    heading.textContent = `Hey there this is page ${pageName}`;

    document.body.appendChild(heading);
  }
}

export default Heading;
