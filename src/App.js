import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'
import { Button, Typography, TextField } from '@material-ui/core';

import { Provider } from './context'
import MapContainer from './components/MapContainer'
import PI from './components/PI'
import { Parallax } from "react-parallax";
import bg from './components/layout/iron_man.png'
import Nav from './components/layout/Nav'
import "./nav.css"
import Form from './components/layout/From';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 = bg;

const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


class App extends React.Component{

  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  render(){
    return (
      <Provider>
        <Router>
          <Nav></Nav>
          
          <Parallax bgImage={bg} strength={400}>
            <div style={{ height: '100vh' }}>

              </div>
          </Parallax>

          <Navbar></Navbar>


          <div style={{height: '300px'}}></div>

          <Parallax bgImage={image2} strength={500}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 400,
                  height: percentage * 400
                }}
              />
            </div>
          )}>
            <div style={{ height: 300 }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax> 




          <div className="container">
            
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </div>
        <Form></Form>
        </Router>
      </Provider>
    );
  }
}

export default App;
