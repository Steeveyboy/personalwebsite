import React, {useState} from 'react';
import "./books.css";

function books(){
    return (        
        <div className="goodBooks">
            <div>            
                <h1>Three Good Books</h1>
                <div class="bookChoice">
                    <img src="images/theBomberMafia.jpg" alt=""></img>
                    <p>This is a description but the description will be smaller than the book itself. The bomber mafia chronicals the story of general hansell and the quest to bring strategic bombing into the mode.</p>
                </div>
                <div class="bookChoice">
                    <img src="images/elonMuskBook.jpg" alt=""></img>
                    <p>This is a description but the description will be smaller than the book itself. The bomber mafia chronicals the story of general hansell and the quest to bring strategic bombing into the mode.</p>
                </div>
                <div class="bookChoice">
                    <img src="images/measureWhatMatters.jpg" alt=""></img>
                    <p>This is a description but the description will be smaller than the book itself. The bomber mafia chronicals the story of general hansell and the quest to bring strategic bombing into the mode.</p>
                </div>
            </div>
        </div>
    );
}

export default books;