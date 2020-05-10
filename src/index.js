import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import addImage from './add-image.js'

addImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV === 'production') {
  console.log("You're in production mode");
} else if (process.env.NODE_ENV === 'development') {
  console.log("You're in development mode");
}

helloWorldButton.notAMethod();
