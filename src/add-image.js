import Dave from './grohl.jpg'

function addImage() {
  const image = document.createElement('img');

  image.width = 300;
  image.alt = 'Rock';
  image.src = Dave;

  console.log('trying to add image');
  

  document.body.appendChild(image);
}

export default addImage;
