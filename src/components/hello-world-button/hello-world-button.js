import './hello-world-button.scss';

class HelloWorldButton {
  buttonCssClass = 'hello-world-button' // class property

  render() {
    const button = document.createElement('button');
    button.classList.add(this.buttonCssClass);

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
