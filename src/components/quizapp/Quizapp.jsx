import "./quizapp.scss";
import bombhome from "../../assets/bombhome.png";


export default function Quizapp() {
    return (
        <div className="quizapp" id="quizapp">
            <h1 className="title">Quiz app</h1>
            <div className="container">
                <div className="subtitleweather">Knowledge Bomb is a general knowledge quiz designed to test the user's skills against the clock</div>
                <a href='https://magnetic-2021.herokuapp.com/'><img src={bombhome} alt="quizapppage" className="bombhome"></img></a>
                </div>
                <div className="technologies">
                    <div className="technology">React.js | Node.js | Express | Mongo db | Animation | Figma | Logo designed by the team | Adapted for desktop, tablet and mobile </div>
                </div>
        </div>
    )
}

