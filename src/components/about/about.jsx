import "./about.scss";
import profilephoto from "../../assets/profilephoto.JPG";
import emailjs from 'emailjs-com';

const About = ()=> {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            "service_h6ls2zm",
            "template_mrj9x6r", 
            e.target,
            "user_TMIJMNSsqenl3BGXOp70b"
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
    }
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
                        I have experience working with Javascript, React.js and Mongo db for most of my projects 
                        <br/>and I like working with Python and Django too.
                        I am currently experimenting new technologies.
                        <br/>
                        As a Junior developer I am open to expand my knowledge through any opportunities on my way.
                    </p>
                    <div className="myinfos">
                        <a href="#mycv" className="curriculumvitae">Curriculum vitae</a>

                        <form className="contactme" onSubmit={sendEmail}>
                            <h3 className="contactme">Let's work together!</h3>

                            <div className="form-control" >
                                <input type="text" name="name" placeholder="Name" />
                            </div>

                            <div className="form-control">
                                <input type="text" name="user_email" placeholder="Email"/>
                            </div>

                            <div className="form-control message">
                                <input type="text" name="message" row="4" placeholder="Message"/>
                            </div>

                            <input className="submitbutton" type="submit" value="Send"/>

                        </form>
                </div>
            </div>
 
        </div>




        </div >
    )
}

export default About;