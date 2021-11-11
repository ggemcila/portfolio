import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Quizapp from "./components/quizapp/Quizapp";
import Landingpage from "./components/landingpage/Landingpage";
import Weatherapp from "./components/weatherapp/Weatherapp";
import Moviereview from "./components/moviereview/Moviereview";
import Menu from "./components/menuworks/Menu";
import About from "./components/about/about";
import "./app.scss";
import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Quizapp/>
       <Moviereview/>
       <Weatherapp/>
       <Landingpage/>
       <About/>
     </div>
    </div>
  );
}

export default App;
