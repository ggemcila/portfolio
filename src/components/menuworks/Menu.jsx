import "./menu.scss";

function Menu({menuOpen,setMenuOpen}){ //pass props
    return(
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#quizapp">Quiz app</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#gamesreview">Games review app</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#weatherapp">Weather app</a>
                </li>
                


            
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro" className="hometext">Home</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;