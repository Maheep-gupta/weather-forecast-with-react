import React from 'react';
import tempoImg from './icon _temperature_.png';

const HourWeather = (props) => {
  console.log(props)
  return (
    <div className='main-hour-weather'>
      <div className='hour-weather-value'>
        {/* time */}
        <div className='hour-time'>{(props.hourWeather.time).slice(10)} </div>

        {/* img */}
        <img className='hour-temp-img' height="40px" src={props.hourWeather.condition.icon} />

      </div>
      <div className='tempShow'>
        {/* temp */}
        <div className='hour-temp'>{props.hourWeather.temp_c}</div>

      </div>
    </div>
  )
}

export default HourWeather