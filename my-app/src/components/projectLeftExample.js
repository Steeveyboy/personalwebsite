import React, {useState} from 'react';
import "./projectExample.css";

function projectExample({imagePath, title, text}){
    return (        
        <div className="project">
            <img id="projectImage" class="imgLeft" src={imagePath} alt=""></img>
            <div>            
                <h1>{title}</h1>
                {/* <p>Conways Game of Life presents an instance of cellular automata
                    where the user can contribute to the games evolution or destruction,
                    through setting the initial state.
                    In my version Conways Game of life, the player is allowed to alter the
                    state of the cells at any point of the game and alter the course of the
                    simulation. The population of the simulation is also tracked throughout the
                    game and graphed using chart.js, if iterested you can play the game 
                    <a href="https://steeveyboy.github.io/ConwaysChartOfLife"> <b>here.</b></a>
                </p> */}
                {text}
            </div>

        </div>
    );
}

export default projectExample;