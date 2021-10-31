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
                <p>I am a third year student Carleton University taking Computer Sceince with a minor in Economics. 
                I use several programming languages including Java, C/C++, Javascript, and Python. 
                I am currently learning tools such as <b>Scikit-Learn</b> and practicing <b>Machine Learning </b> techniques so that I can improve at my job as a Data Analyst at Shared Services Canada.
                I outside of work I enjoy reading, sailing, playing frisbee, and soccer. I am currently looking for work as per my Co-op Program, and am interested in any opporunities that involve Systems Engineering or Data Science.</p>
            </div>
            <a href="https://github.com/Steeveyboy?tab=repositories">Github</a> 
            <a href="https://www.linkedin.com/in/jonathon-s-763ab211a/"> LinkedIn</a> 
            <a href="/images/JonathonSteeves.pdf"> Resume</a>
        </div>
        
    );
}

export default about;