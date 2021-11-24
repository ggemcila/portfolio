import "./weatherapp.scss";
import weathertoday from "../../assets/weathertoday.png";

export default function Weatherapp() {
    return (
        <div className="containerweather"> 
        <div className="weatherapp" id="weatherapp">
           <img src={weathertoday} className="weathertoday"></img>
           <div className="technologies2">
               <div className="technology2">Node JS | Express Handlebars | APIs | Forms</div>
            </div>  
        </div>
        <div className="weatherinfo">
            <h1 className="title2">Weather app</h1>
            <div className="description2">
            Retrieve weather forecast for a particular location using OpenWeatherMap
            </div>
        </div>
        </div>
        
        
    )
}
