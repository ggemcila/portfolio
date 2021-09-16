import "./menu.scss";

function Menu(){
    return(
        <div className="menu">
            <ul>
                <li>
                    <a href="#intro">Quiz app</a>
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