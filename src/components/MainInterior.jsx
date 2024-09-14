import React, { useState } from 'react';
import Chair from '../icons/redchair.svg';
import More from '../icons/more.svg';

export default function MainTools() {

    const [isRotated, setIsRotated] = useState(false);
    
    const [roomId, setRoomId] = useState('v_garagem');
    const [interiorId, setInteriorId] = useState('v_michael_g_lounge');
    const [timecycleId, setTimecycleId] = useState('current_timecycle');

    const handleInteriorIdChange = (e) => {
        setInteriorId(e.target.value);
    };

    const handleTimecycleIdChange = (e) => {
        setTimecycleId(e.target.value);
    };

    const copyTimecycleId = () => {
        navigator.clipboard.writeText(timecycleId);
    };
    

    const handleRoomIdChange = (e) => {
        setRoomId(e.target.value);
    };
    
    const copyRoomId = () => {
        navigator.clipboard.writeText(roomId);
    };
    
    const copyInteriorId = () => {
        navigator.clipboard.writeText(interiorId);
    };

    const [visibleOptions, setVisibleOptions] = useState({
        Interior: true,
    });
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
      };
  
    const options = ["Portal1", "Portal2", "Portal3",];
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleOptionContent = (id) => {
        setVisibleOptions(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
        setIsRotated(!isRotated);
    };

    const [isOnPortalsDebugging, setIsOnPortalsDebugging] = useState(false);
 
  
    return (
        <div>
        <div className='options editor-options'>
            <div className='option'>
                <div className='option-heading'>
                    <img src={Chair} alt="chair-icon" className='heading-icon' />
                    <h3>Interior debugger</h3>
                    <img
                        src={More}
                        alt='more-icon'
                        className={`more-icon ${visibleOptions['Interior'] ? 'rotated' : ''}`}
                        onClick={() => toggleOptionContent('Interior')}
                    />
                </div>
                {visibleOptions['Interior'] && (
                    <>
                                    <h3 className='interior-heading'>Interior information</h3>

                                    <div className='option-content '>
                                <h4>Current interior ID</h4>
                                <div className='interior-id-container'>
                                <input
                                    type='text'
                                    id='roomId'
                                    value={roomId}
                                    onChange={handleRoomIdChange}
                                />
                                <button className='copy-button' onClick={copyRoomId}>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                    </svg>
                                </button>
                                </div>
                            </div>
                            <div className='option-content darker-bg'>
                                <h4>Current room ID</h4>
                                <div className='room-id-container'>
                                    <input
                                        type='text'
                                        id='interiorId'
                                        value={interiorId}
                                        onChange={handleInteriorIdChange}
                                    />
                                    <button className='copy-button' onClick={copyInteriorId}>
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='option-content'>
                                <h4>Portals Debbuging</h4> 
                                <div className={`toggle-switch ${isOnPortalsDebugging ? 'on' : ''}`} onClick={() => setIsOnPortalsDebugging(!isOnPortalsDebugging)}>
                                <div className="toggle-knob"></div>
                                </div>
                            </div>

                            <div className='option-content darker-bg'>
                                <h4>Edit Flags</h4> 
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
                                <button className='red-content-btn'>MANAGE FLAGS</button>
                            </div>

                            <div className='option-content darker-bg'>
                                <h4>Timecycle</h4> 
                                <div className='flags-id-container'>
                                    <input
                                        type='text'
                                        id='timecycleId'
                                        value={timecycleId}
                                        onChange={handleTimecycleIdChange}
                                    />
                                    <button className='copy-button' onClick={copyTimecycleId}>
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                        </svg>
                                    </button>
                                </div>
                                <button className='red-content-btn'>Select Timecycle</button>
                            </div>
                        
                    </>
                )}
            </div>
            <div className='bottom-sticky-btn'>
                    <button >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.63636 7.2662e-08H2.36364C1.73676 7.2662e-08 1.13556 0.249025 0.692293 0.692293C0.249025 1.13556 0 1.73676 0 2.36364V13.6364C6.78431e-05 14.2317 0.224804 14.8051 0.629293 15.242C1.03378 15.6788 1.58823 15.9469 2.18182 15.9927V9.63636C2.18182 9.20237 2.35422 8.78616 2.6611 8.47928C2.96798 8.1724 3.38419 8 3.81818 8H12.1818C12.6158 8 13.032 8.1724 13.3389 8.47928C13.6458 8.78616 13.8182 9.20237 13.8182 9.63636V15.9927C14.4118 15.9469 14.9662 15.6788 15.3707 15.242C15.7752 14.8051 15.9999 14.2317 16 13.6364V4.208C16.0001 3.89749 15.939 3.59 15.8202 3.30311C15.7014 3.01623 15.5272 2.75556 15.3076 2.536L13.464 0.692364C13.2444 0.472789 12.9838 0.298627 12.6969 0.179828C12.41 0.0610295 12.1025 -7.69179e-05 11.792 7.2662e-08H11.6364V4.18182C11.6364 4.39671 11.594 4.60949 11.5118 4.80803C11.4296 5.00656 11.309 5.18695 11.1571 5.3389C11.0051 5.49085 10.8247 5.61139 10.6262 5.69362C10.4277 5.77586 10.2149 5.81818 10 5.81818H5.27273C4.83874 5.81818 4.42252 5.64578 4.11564 5.3389C3.80877 5.03202 3.63636 4.61581 3.63636 4.18182V7.2662e-08ZM10.5455 7.2662e-08H4.72727V4.18182C4.72727 4.48291 4.97164 4.72727 5.27273 4.72727H10C10.1447 4.72727 10.2834 4.66981 10.3857 4.56751C10.488 4.46522 10.5455 4.32648 10.5455 4.18182V7.2662e-08ZM12.7273 16V9.63636C12.7273 9.4917 12.6698 9.35296 12.5675 9.25067C12.4652 9.14838 12.3265 9.09091 12.1818 9.09091H3.81818C3.67352 9.09091 3.53478 9.14838 3.43249 9.25067C3.33019 9.35296 3.27273 9.4917 3.27273 9.63636V16H12.7273Z" fill="white"/>
                    </svg>

                        Save changes
                    </button>
                </div>
        </div>
  
            
        </div>
    );
}
