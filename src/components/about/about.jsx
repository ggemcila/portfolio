import "./about.scss";
import profilephoto from "../../assets/profilephoto.JPG";

export default function About() {
    return (
        <div className="aboutpage" id="aboutpage">

            <h1 className="about_title">About me</h1>

            <div className="aboutcontainer1">

                <div className="aboutsubcontainer">

                    <p className="aboutbody">
                        Junior Developer placed in Liverpool, but open to relocate within the UK.
                        <br/>
                        Master coding bootcamp at Codenation is where my interest on Web development began.
                        <br/>
                        I have experience working with Javascript, React.js and Mongo db for most of my projects and I like working with Python and Django too.
                        I am currently experimenting new technologies.
                        <br/>
                        As a Junior developer I am open to expand my knowledge through any opportunities on my way.
                    </p>
                    <div className="myinfos">
                        <a href="./assets/mycv.pdf" className="curriculumvitae">Curriculum vitae</a>

                        <form className="contactme">
                            <h3 className="contactme">Let's work together!</h3>
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>

                            <div class="group">
                                <input type="text" placeholder="Email"/>
                            </div>

                            <div class="group">
                                <input className="input1" type="text" placeholder="Message"/>
                            </div>

                            <input className="submitbutton" type="submit" value="Submit"/>

                        </form>
                </div>
            </div>

            <div> 
            <img src={profilephoto} alt="mypicture" className="mypicture"></img>
            </div>
        </div>




        </div >
    )
}