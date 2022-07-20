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
                <p>I am a fourth year student Carleton University studying Computer Science with a minor in Economics. 
                I use several programming languages including C++, Javascript, and Python, and enjoy making robots to automate monotonous tasks. 
                I currently work as a Data Scientist at the Department of Finance Canada.
                Right now I am learning tools such as <b>Scikit-Learn</b> and practicing <b>Machine Learning </b> techniques with a focus on natural language processing.
                Outside of work I enjoy reading, sailing, playing frisbee, and karate. I am currently accepting clients and am open for contract work.</p>
            </div>
            <a href="https://github.com/Steeveyboy?tab=repositories">Github</a> 
            <a href="https://www.linkedin.com/in/jonathon-s-763ab211a/"> LinkedIn</a> 
            <a href="./images/JonathonSteeves.pdf"> Resume</a>
        </div>
    );
}

export default about;