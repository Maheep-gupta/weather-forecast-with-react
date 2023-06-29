import React from 'react'
import '../App.css'
import locationIcon from './icon _location_.png'

import tempIcon from './icon _temperature_.png'


const WeatherCard = (props) => {
    return (
        <div className='card'>
            <div className='upperDiv'>
                <div className='location'>
                    {props.location.name}
                    <img src={locationIcon} alt='location' />
                </div>
                <div className='date'>
                    Date:-
                    {(props.forecastCurrent.last_updated).slice(0, 10)}
                    <br />
                    Time:-
                    {(props.forecastCurrent.last_updated).slice(10)}
                    
                </div>
            </div>

            <div className='lowerdiv'>
                <div className='tempDiv'>
                    <img src={tempIcon} alt='temperature Icon'/>
                    <span className='temp'>{props.forecastCurrent.temp_c}</span>
                    <img src={props.forecastCurrent.condition.icon} alt='weather Condition'  />
                </div>
            </div>
            <div className='cardBottom'>
                <div className='humid'>
                    <div className='title'>Humidity</div>
                    <div className='value'>{props.forecastCurrent.humidity}%</div>
                </div>
                <div className='visibile'>
                    <div className='title'>Visibility</div>
                    <div className='value'>{props.forecastCurrent.vis_km} km</div>
                </div>
                <div className='airPressure'>
                    <div className='title'>Air pressure</div>
                    <div className='value'>{props.forecastCurrent.pressure_mb} mb</div>
                </div>
                <div className='wind'>
                    <div className='title'>Wind</div>
                    <div className='value'>{props.forecastCurrent.wind_kph} kmph</div>
                </div>
            </div>
        </div >
    )
}

export default WeatherCard;