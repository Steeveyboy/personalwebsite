
import React from 'react';
import './App.css';
import About from './components/about'
import Header from './components/header'
import ProjectLeft from './components/projectLeftExample'
import ProjectRight from './components/projectRightExample'
import Books from './components/books'
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div class="headerSection"><Header /></div>
        <div class="aboutSection" id="about">
            <About />
          </div>
        <div class="projectSection" id="projects">
          <ProjectLeft imagePath="images/conwaysCrop.png" title="Conways Game of life"/>
          <ProjectRight imagePath="images/pathfinder2.png" title="Pathfinding Algorithm Visualiser"/>
          </div>
        <div class="booksSection" id="books">
          <Books />
        </div>
    </div>
  );
}

export default App;
