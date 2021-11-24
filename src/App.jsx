import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Quizapp from "./components/quizapp/Quizapp";
import Weatherapp from "./components/weatherapp/Weatherapp"; 
import Gamesreview from "./components/gamesreview/Gamesreview";
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
       <Weatherapp/>
       <Gamesreview/>
       <About/>
     </div>
    </div>
  );
}

export default App;
