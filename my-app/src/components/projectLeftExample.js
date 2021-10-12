import React, {useState} from 'react';
import "./projectExample.css";

function projectExample({imagePath, title, text}){
    return (        
        <div className="project">
            <img id="projectImage" class="imgLeft" src={imagePath} alt=""></img>
            <div>            
                <h1>{title}</h1>
                <p>THIS Is a project for the sday 
                    I have never wondered what a better project could be
                    Who made this project, MOre and MORe and more and more tesxt
                    because we need to fill up this projectImage, I wonder what coudl be done
                    My god 
                    <a href="https://steeveyboy.github.io/ConwaysChartOfLife"> <b>Game</b></a>
                </p>
            </div>

        </div>
    );
}

export default projectExample;