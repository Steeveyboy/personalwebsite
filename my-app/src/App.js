
import React from 'react';
import './App.css';
import About from './components/about'
import Header from './components/header'
import ProjectLeft from './components/projectLeftExample'
import ProjectRight from './components/projectRightExample'
import Books from './components/books'
import Footer from './components/footer'
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div class="headerSection"><Header /></div>
        <div class="aboutSection" id="about">
            <About />
          </div>
        <div class="projectSection" id="projects">
          <ProjectLeft imagePath="./images/conwaysCrop.png" title="Conways Game of life" text={conwaysText} />
          <ProjectRight imagePath="./images/pathfinder2.PNG" title="Pathfinding Algorithm Visualiser" text={pathfindingText}/>
          </div>
        <div class="booksSection" id="books">
          <Books />
        </div>
        <div class="footerSection"><Footer /></div>
    </div>
  );
}

const conwaysText = <p>Conways Game of Life presents an instance of cellular automata
  where the user can contribute to the games evolution or destruction,
  through setting the initial state.
  In my version Conways Game of life, the player is allowed to alter the
  state of the cells at any point of the game and alter the course of the
  simulation. The population of the simulation is also tracked throughout the
  game and graphed using chart.js, if iterested you can play the game 
  <a href="https://steeveyboy.github.io/ConwaysChartOfLife"> <b>here.</b></a>
  </p>;

const pathfindingText = <p>
  As a first attempt at learning about artificial intelligence,
  I decided to create a program to visualise various search algorithms, 
  including Dijkstra's algorithm and the a* algorithm. I programmed this project in python and
  used tkinter and pygame to make the ui. The source code for this project can be found on my github <a href="https://github.com/Steeveyboy/MyProjects/tree/main/PathFinder"><b>here</b></a>.
  </p>;



export default App;
