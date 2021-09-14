import "./intro.scss";
export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="titleIntro">
                Hi, I'm Gemcila! I believe 
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
