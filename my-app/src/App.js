
import React from 'react';
import './App.css';
import About from './components/about'
import Header from './components/header'
import ProjectLeft from './components/projectLeftExample'
import ProjectRight from './components/projectRightExample'
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div class="headerSection"><Header /></div>
        <div class="aboutSection">
            <About />
          </div>
        <div class="projectSection">
          <ProjectLeft imagePath="images/conwaysCrop.png" title="Conways Game of life"/>
          <ProjectRight imagePath="images/conwaysCrop.png" title="Reeses Puffs"/>
          {/* <Project /> */}
          </div>
    </div>
  );
}

export default App;
