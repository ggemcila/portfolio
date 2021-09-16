import "./menu.scss";

function Menu({menuOpen,setMenuOpen}){ //pass props
    return(
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#quizapp">Quiz app</a>
                </li>
                <li>
                    <a href="#moviereview">Movie Review</a>
                </li>
                <li>
                    <a href="#weatherapp">Weather app</a>
                </li>
                <li>
                    <a href="#landingpage">Landing page</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;