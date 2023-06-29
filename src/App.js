import { useState,useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import HourWeather from './components/HourWeather';
// import weatherData from './data';
// import weatherData from './data';


function App() {
  const [weatherData, setweatherData] = useState(null)
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=India&days=1&aqi=no&alerts=no`).then(response => response.json()).then((weatherJsonData) => 
        setweatherData(weatherJsonData)
        
   )
  }, [])
  console.log(weatherData)
  console.log(process.env.API_KEY)

  
   
  return (
    weatherData !== null ?
      <div className="App">
        {console.log(weatherData)}
        <WeatherCard location={weatherData['location']} forecastCurrent={weatherData['current']} />
        <div className='box-hour-weather'>
          {weatherData['forecast'].forecastday[0].hour.map((hour, index) => {
            return (
              index % 3 === 0? <HourWeather key={hour.time_epoch} hourWeather={hour} />:null
            )

          })}
        </div>
      </div> : null
  )

  
}

export default App;
