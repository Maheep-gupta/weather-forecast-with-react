import { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import HourWeather from './components/HourWeather';
import Navbar from './components/Navbar';
// import weatherData from './data';
// import weatherData from './data';



function App() {
  const [weatherData, setweatherData] = useState(null)
  const [location, setLocation] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    location===''?setweatherData(null):
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=1&aqi=no&alerts=no`)
      .then(response => response.json()).then((weatherJsonData) =>
        setweatherData(weatherJsonData)
        // setweatherData(null)

      )
      .catch(error =>
        setweatherData(null)
      )


  }






  return (
    <>
      <Navbar />
      <div className='customSearch p-2'>

        <form className="d-flex " onSubmit={handleSubmit}>
          <input className="form-control me-2" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Search" aria-label="Search" />
          <input className="btn btn-outline-success" type='submit' />
        </form>
      </div>


      {
        weatherData !== null ?
          <div className="App">
            <WeatherCard location={weatherData['location']} forecastCurrent={weatherData['current']} />
            <div className='box-hour-weather'>
              {weatherData['forecast'].forecastday[0].hour.map((hour, index) => {
                return (
                  index % 3 === 0 ? <HourWeather key={hour.time_epoch} hourWeather={hour} /> : null
                )

              })}
            </div>
          </div> : <div style={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>No location Selected</div>}

    </>
  )


}

export default App;
