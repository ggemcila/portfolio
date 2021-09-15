import "./intro.scss";
export default function intro() {
    
    const data =[
        {id:"1",
        title: "Quiz app",
        img: "./assets/bombhome.png",
    },
    {id:"2",
        title: "Weather app",
        img: "./assets/bombabout.png",
    },
    {id:"3",
        title: "Movie review page",
        img: "./assets/bombaccount.png",
    },
];
    return (
        <div className="intro" id="intro">
            <div className="titleIntro">
                Hi I'm Gemcila, Junior Web Developer who believes that aesthetically pleasing design is more usable, creates a positive response and encourages participation.
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
            <img src="assets/arrow.png" alt="" className="arrow left" />
            <img src="assets/arrow.png" alt="" className="arrow right" />
        </div>
    )
}
