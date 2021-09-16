import "./topbar.scss";

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar" + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="name">Gemcila Samini Gino Charlton</div>
               <div className="about">About</div>
               <div className="myworks" onClick={()=>setMenuOpen(!menuOpen)}>Works</div>
            </div>
        </div>
    )
}
