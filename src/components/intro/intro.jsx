import "./intro.scss";
export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="titleIntro">
                Hi I'm Gemcila, Junior Web Developer who believes that aesthetically pleasing design is more usable, creates a positive response and encourages participation
            </div>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left"></div>
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="assets/bombhome.png" alt="" className="imghome" />
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
