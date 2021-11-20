import "./topbar.scss";

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar" + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <a href="#intro" className="name">Gemcila Samini Gino Charlton</a>
                <a href="#aboutpage" className="about">About Me</a>
               <div className="myworks" onClick={()=>setMenuOpen(!menuOpen)}>Projects</div>
            </div>
        </div>
    )
}
