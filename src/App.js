
import React from 'react';
import './App.css';
import About from './components/about'
import Header from './components/header'
import Project from './components/projectExample'
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div class="headerSection"><Header /></div>
        <div class="aboutSection">
            <About />
          </div>
        <div class="projectSection">
          <Project />
          <Project />
          <Project />
          </div>
    </div>
  );
}

export default App;
