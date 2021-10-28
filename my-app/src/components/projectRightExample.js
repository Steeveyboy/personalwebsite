import React, {Component, useState} from 'react';
import "./projectExample.css";



function projectExample({imagePath, title, text}){
    return (        
        <div className="project">
            <img id="projectImage" class="imgRight" src={imagePath} alt=""></img>
            <div>            
                <h1>{title}</h1>
                <p>
                    As a first attempt at learning about artificial intelligence,
                    I decided to create a program to visualise various search algorithms, 
                    including Dijkstra's algorithm and the a* algorithm. I programmed this project in python and
                    used tkinter and pygame to make the ui. The source code for this project can be found on my github <a href="https://github.com/Steeveyboy/MyProjects/tree/main/PathFinder"><b>here</b></a>.
                    
                </p>
            </div>

        </div>
    );
}

export default projectExample;