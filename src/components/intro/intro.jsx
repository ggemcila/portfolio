import "./intro.scss";
export default function intro() {

    const[currentSlide,setCurrentSlide] =  useState(0);
    const data = [
        {
            id: "1",
            title: "Quiz app",
            img: "./assets/bombhome.png",
        },
        {
            id: "2",
            title: "Weather app",
            img: "./assets/bombabout.png",
        },
        {
            id: "3",
            title: "Landing page",
            img: "./assets/bombaccount.png",
        },
        {
            id: "4",
            title: "Movie review page",
            img: "./assets/bombaccount.png",
        },
    ];
    return (
        <div className="intro" id="intro">
            <div className="titleIntro">
                Hi I'm Gemcila, Junior Web Developer who believes that aesthetically pleasing design is more usable, creates a positive response and encourages participation.
            </div>
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left"></div>
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.img} alt="" className="imghome" />
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")}/>
            <img src="assets/arrow.png" alt="" className="arrow right"  onClick={() => handleClick()}/>
        </div>
    )
}
