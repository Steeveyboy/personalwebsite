import "./projectExample.css";

function projectExample({imagePath, title, text}){
    return (
        <div className="project">
            <img id="projectImage" className="imgLeft" src={imagePath} alt={title}></img>
            <div>
                <h1>{title}</h1>
                {text}
            </div>
        </div>
    );
}

export default projectExample;