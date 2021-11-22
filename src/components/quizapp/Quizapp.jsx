import "./quizapp.scss";
import bombhome from "../../assets/bombhome.png";


export default function Quizapp() {
    return (
        <div className="quizapp" id="quizapp">
            <h1 className="title">Quiz app</h1>
            <div className="container">
                <div className="technologies">
                    <div className="technology">Mongo db</div>
                    <div className="technology">Express</div>
                    <div className="technology">React JS</div>
                    <div className="technology">Node JS</div>
                    <div className="technology">Adapted for desktop, tablet and mobile</div>
                </div>
                <a href='https://magnetic-2021.herokuapp.com/'><img src={bombhome} className="bombhome"></img></a>
            </div>
            <div className="description">
                Knowledge Bomb is a general knowledge quiz designed to test the user's skills against the clock.
                Answer 10 questions before the timer ends and the bomb explodes.
                The questions could be either multiple choice or true or false.
                The more answers you get right, the more time you have and the higher your score.
                But run out of time and it is game over!
            </div>
        </div>
    )
}

