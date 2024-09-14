import React, { useState } from 'react';
import Location from '../icons/location.svg';
import More from '../icons/more.svg';
import Cloud from '../icons/cloud.svg';
export default function MainHome(){

    const [coordinates, setCoordinates] = useState('X: -803.717 Y: 176.49, Z: 72.841');
    const [heading, setHeading] = useState('265.75');
    const [visibleOptions, setVisibleOptions] = useState({
      coordinates: true,  
      weather: true,
    });
    const [isRotated, setIsRotated] = useState(true);
    const [time, setTime] = useState({ hour: '13', minute: '06' });
  
    
    const [isOnFreezeTime, setIsOnFreezeTime] = useState(false);
    const [isOnFreezeWeather, setIsOnFreezeWeather] = useState(true);
  
    const handleCoordinatesChange = (e) => {
      setCoordinates(e.target.value);
    };
  
    const handleHeadingChange = (e) => {
      setHeading(e.target.value);
    };
  
    const copyCoordinates = () => {
      navigator.clipboard.writeText(coordinates);
    };
  
    const copyHeading = () => {
      navigator.clipboard.writeText(heading);
    };
  
    const toggleOptionContent = (id) => {
      setVisibleOptions(prevState => ({
        ...prevState,
        [id]: !prevState[id],
      }));
      setIsRotated(!isRotated);
    };
  
    const handleTimeInputChange = (e) => {
      const { id, value } = e.target;
      if (value.length <= 2) {
        setTime(prevTime => ({
          ...prevTime,
          [id]: value,
        }));
      }
    };
    
    const options = ["Sunny day", "Rainy day", "Cloudy day", "Windy day", "Stormy day"];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    };

    return(

        <div className='options'>
        <div className='option'>
        <div className='option-heading'>
            <img src={Location} alt='location-icon' className='heading-icon' />
            <h3>Current coordinates</h3>
            <img
            src={More}
            alt='more-icon'
            className={`more-icon ${visibleOptions['coordinates'] ? 'rotated' : ''}`}
            onClick={() => toggleOptionContent('coordinates')}
            />
        </div>
        {visibleOptions['coordinates'] && (
            <>
            <div className='option-content darker-bg'>
                <h4>Coordinates</h4>
                <div className='coordinates-container'>
                <input
                    type='text'
                    id='coordinates'
                    value={coordinates}
                    onChange={handleCoordinatesChange}
                />
                <button className='copy-button' onClick={copyCoordinates}>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                    </svg>
                </button>
                </div>
            </div>
            <div className='option-content darker-bg'>
                <h4>Heading</h4>
                <div className='heading-container'>
                <input
                    type='text'
                    id='heading'
                    value={heading}
                    onChange={handleHeadingChange}
                />
                <button className='copy-button' onClick={copyHeading}>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                    </svg>
                </button>
                </div>
            </div>
            </>
        )}
        </div>
        <div className='option'>
        <div className='option-heading'>
            <img src={Cloud} alt='cloud-icon' className='heading-icon' />
            <h3>Time and weather configuration</h3>
            <img
            src={More}
            alt='more-icon'
            className={`more-icon ${visibleOptions['weather'] ? 'rotated' : ''}`}
            onClick={() => toggleOptionContent('weather')}
            />
        </div>
        {visibleOptions['weather'] && (
            <div>
            <div className='option-content '>
                <h4>Set time</h4>
                <div className='time-container'>
                <input
                    type="number"
                    id="hour"
                    className='time-input'
                    value={time.hour}
                    onChange={handleTimeInputChange}
                />
                <input
                    type="number"
                    id="minute"
                    className='time-input'
                    value={time.minute}
                    onChange={handleTimeInputChange}
                />
                <button className='red-content-btn'>Apply</button>
                </div>
            </div>
            <div className='option-content darker-bg'>
                <h4>Weather</h4> 
                <div className="option-container">
                <button className="arrow-button" onClick={handlePrev}>
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L2 4L5 7" stroke="#525560" stroke-width="1.5"/>
                    </svg>
                </button>
                <div className="select-input">
                    {options[currentIndex]}
                </div>
                <button className="arrow-button" onClick={handleNext}>
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L4 4L1 1" stroke="#525560" stroke-width="1.5"/>
                    </svg>
                </button>
                </div>
                <button className='red-content-btn'>Apply</button>
            </div>
            <div className='option-content'>
                <h4>Freeze time</h4> 
                <div className={`toggle-switch ${isOnFreezeTime ? 'on' : ''}`} onClick={() => setIsOnFreezeTime(!isOnFreezeTime)}>
                <div className="toggle-knob"></div>
                </div>
            </div>
            <div className='option-content darker-bg'>
                <h4>Freeze weather status</h4> 
                <div className={`toggle-switch ${isOnFreezeWeather ? 'on' : ''}`} onClick={() => setIsOnFreezeWeather(!isOnFreezeWeather)}>
                <div className="toggle-knob"></div>
                </div>
            </div>
            </div>
        )}
        </div>
        </div>
)}