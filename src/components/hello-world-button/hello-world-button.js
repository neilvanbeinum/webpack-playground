import './hello-world-button.css';

class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.classList.add('hello-world-button');

    button.textContent = "Let's Rock";

    button.addEventListener('click', () => {
      const p = document.createElement('p');
      p.textContent = 'Hey hey'
      p.classList.add('hello-world-text');
      document.body.appendChild(p);
    })

    document.body.appendChild(button);
  }
}

export default HelloWorldButton;
