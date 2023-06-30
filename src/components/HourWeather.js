import React from 'react';

const HourWeather = (props) => {
  return (
    <div className='main-hour-weather'>
      <div className='hour-weather-value'>
        {/* time */}
        <div className='hour-time'>{(props.hourWeather.time).slice(10)} </div>

        {/* img */}
        <img className='hour-temp-img' height="40px" src={props.hourWeather.condition.icon} alt='weather condition' />

      </div>
      <div className='tempShow'>
        {/* temp */}
        <div className='hour-temp'>{props.hourWeather.temp_c}</div>

      </div>
    </div>
  )
}

export default HourWeather