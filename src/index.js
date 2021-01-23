import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';
var ScrollAnim = require('rc-scroll-anim');
var ScrollParallax = ScrollAnim.Parallax;
ReactDOM.render(

  <ParallaxProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ParallaxProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
