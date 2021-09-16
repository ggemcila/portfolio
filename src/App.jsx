import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Quizapp from "./components/quizapp/Quizapp";
import Landingpage from "./components/landingpage/Landingpage";
import Weatherapp from "./components/weatherapp/Weatherapp";
import Moviereview from "./components/moviereview/Moviereview";
import Menu from "./components/menu/Menu";
import "./app.scss";

function App() {
  return (
    <div className="app">
     <Topbar/>
     <Menu/>
     <div className="sections">
       <Intro/>
       <Quizapp/>
       <Moviereview/>
       <Weatherapp/>
       <Landingpage/>
     </div>
    </div>
  );
}

export default App;
