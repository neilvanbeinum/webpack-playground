import Dave from './grohl.jpg'
import './dave-image.scss'

class DaveImage {
  render() {
    const image = document.createElement('img');

    image.width = 300;
    image.alt = 'Rock';
    image.src = Dave;
    image.classList.add('dave-image');

    console.log('trying to add image');

    document.body.appendChild(image);
  }
}

export default DaveImage;
