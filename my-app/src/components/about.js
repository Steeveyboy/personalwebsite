import React, {useState} from 'react';
import "./about.css";
//import headshot from "./my-app/public/images/mecircle";
//import {Link} from 'react-router-dom';

function about(){
    return (        
        <div className="aboutPage">
            <h2><u>About me</u></h2>
            <img id="headshot" src="./images/mecircle.png" alt=""></img>
            <div class="aboutText">
                <p>I am a third year student Carleton University taking Computer Science with a minor in Economics. 
                I use several programming languages including Java, C/C++, Javascript, and Python. I currently work as a student Software Developer at Shared Services Canada.
                Right now I am learning tools such as <b>Scikit-Learn</b> and practicing <b>Machine Learning </b> techniques.
                Outside of work I enjoy reading, sailing, playing frisbee, and soccer. I am currently looking for summer 2022 work opporunities, and am interested in anything that involves Systems Engineering or Data Science.</p>
            </div>
            <a href="https://github.com/Steeveyboy?tab=repositories">Github</a> 
            <a href="https://www.linkedin.com/in/jonathon-s-763ab211a/"> LinkedIn</a> 
            <a href="./images/JonathonSteeves.pdf"> Resume</a>
        </div>
        
    );
}

export default about;