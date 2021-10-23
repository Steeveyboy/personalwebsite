import React, {useState} from 'react'
import "./header.css"

function Header(){
    return (        
        <div className="header">
            <h1>Jonathon Steeves</h1>
            <ul>
                {/* <li href=""><a href="#books">Book Recommends</a></li> */}
                <li href=""><a href="#books">Book Recommends</a></li>
                <li href="" ><a href="#projects">Projects   </a></li>
                <li href=""><a href="#about">About   </a></li>
            </ul>
        </div>
        
    );
}

export default Header;