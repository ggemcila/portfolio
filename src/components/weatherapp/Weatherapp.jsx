import "./weatherapp.scss";
import weathertoday from "../../assets/weathertoday.png";
import sky from "../../assets/sky.jpg";

export default function Weatherapp() {
    return (
        <div className="containerweather"> 
        <div className="weatherapp" id="weatherapp">
           <img src={weathertoday} className="weathertoday"></img>  
        </div>
        <div className="weatherinfo">
            <img src={sky} className="sky"></img>
        </div>
        </div>
        
        
    )
}
