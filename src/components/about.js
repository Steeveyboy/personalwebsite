import React, {useState} from 'react'
import "./about.css"
//import {Link} from 'react-router-dom';

function about(){
    return (        
        <div className="aboutPage">
            <h2><u>About me</u></h2>
            <img id="headshot" src="https://media-exp1.licdn.com/dms/image/C4D03AQGlTTC2OFKpaw/profile-displayphoto-shrink_800_800/0/1546448505470?e=1631145600&v=beta&t=2ppTk9pPNxEPDN_jnjLIBwtKP2_-u8F1AV7AyVxdcB0"></img>
            <div class="aboutText">
                <p>I am a third year student Carleton University taking Computer Sceince with a minor in Economics. 
                I use several programming languages including Java, C/C++, Javascript, Python. 
                I am currently learning tools such as <b>Scikit-Learn</b> and practicing <b>Machine Learning </b> techniques so that I can improve at my job as a Data Analyst at Shared Services Canada.
                I outside of work I enjoy reading, sailing, playing frisbee, and soccer. I am currently looking for work as per my Co-op Program, and am interested in any opporunities that involve Systems Engineering or Data Science.</p>
            </div>
            <a href="https://github.com/Steeveyboy/MyProjects">Github</a> 
            <a href="https://www.linkedin.com/in/jonathon-s-763ab211a/"> LinkedIn</a> 
            <a> Resume</a>
        </div>
        
    );
}

export default about