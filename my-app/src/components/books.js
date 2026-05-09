import "./books.css";

function books(){
    return (
        <div className="goodBooks">
            <h1>Three Good Books</h1>
            <div className="bookChoice">
                <img src="/images/theBomberMafia.jpg" alt="The Bomber Mafia book cover"></img>
                <div className="bookDescription">
                    <p><i>The Bomber Mafia</i> is a story of innovation in the face of chaos. Taking place during the second world war, <i>The Bomber Mafia</i> attempts to chronicle the attempt of military thinkers to bring precision bombing to the forefront of war.</p>
                </div>
            </div>
            <div className="bookChoice">
                <img src="/images/elonMuskBook.jpg" alt="Elon Musk book cover"></img>
                <div className="bookDescription">
                    <p>This authorized biography tells the story of Elon Musk. While often examining the string of failures that lead to his greatest successes, this book provides great insight into the motivations behind each of Musk&apos;s ventures.</p>
                </div>
            </div>
            <div className="bookChoice">
                <img src="/images/measureWhatMatters.jpg" alt="Measure What Matters book cover"></img>
                <div className="bookDescription">
                    <p><i>Measure what matters is in essence</i>, a book about how to set impossible goals, and somehow achieve them. Each chapter is a unique story about how prominent firms achieve their impossible, using a goal setting method that Doerr refers to as OKR&apos;s.</p>
                </div>
            </div>
        </div>
    );
}

export default books;