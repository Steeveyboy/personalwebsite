import "./about.css";

function about(){
    return (
        <div className="aboutPage">
            <h2><u>About me</u></h2>
            <img id="headshot" src="/images/mecircle.png" alt="Headshot of Jonathon Steeves"></img>
            <div className="aboutText">
                <p>
                I am an Ottawa-based Data Scientist II. Since graduating from Carleton University with a Bachelor of Computer Science (Honours) and an Economics minor, my work has focused heavily on systems architecture, data pipelines, and large language model infrastructure using Python. I am deeply interested in the intersection of AI and quantitative finance, building tools like agent-based risk engines, and leading discussions on the latest industry research. Whether I am securing RAG applications or exploring systematic trading, I enjoy tackling complex, data-driven problems.    
                </p>
            </div>
            <a href="https://github.com/Steeveyboy?tab=repositories">Github</a>
            <a href="https://www.linkedin.com/in/jonathon-s-763ab211a/"> LinkedIn</a>
            <a href="/images/JonathonSteeves.pdf"> Resume</a>
        </div>
    );
}

export default about;