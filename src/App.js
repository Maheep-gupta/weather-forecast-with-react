import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import HourWeather from './components/HourWeather';
// import Navbar from './components/Navbar';
// import weatherData from './data';
// import weatherData from './data';


function App() {
  const [weatherData, setweatherData] = useState(null)
  const [location, setLocation] = useState('India')
  useEffect(() => {
    try {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=1&aqi=no&alerts=no`)
        .then(response => response.json()).then((weatherJsonData) =>
          setweatherData(weatherJsonData)
          // setweatherData(null)

        )
    } catch (error) {
      setweatherData(null)
    }

  }, [])
  console.log(weatherData)
  console.log(process.env.API_KEY)



  return (
    <>
      {/* <Navbar /> */}
      {
        weatherData !== null ?
          <div className="App">
            {console.log(weatherData)}
            <WeatherCard location={weatherData['location']} forecastCurrent={weatherData['current']} />
            <div className='box-hour-weather'>
              {weatherData['forecast'].forecastday[0].hour.map((hour, index) => {
                return (
                  index % 3 === 0 ? <HourWeather key={hour.time_epoch} hourWeather={hour} /> : null
                )

              })}
            </div>
          </div> : <div>No lOcation Selected</div>}
    </>
  )


}

export default App;
