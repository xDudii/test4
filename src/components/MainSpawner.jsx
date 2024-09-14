import React, { useState } from 'react';
import redHuman from '../icons/red-human.svg';
import grayHuman from '../icons/gray-human.svg';
import Trash from '../icons/gray trash.svg';
import More from '../icons/more.svg';

export default function MainTools() {

    const [isRotated, setIsRotated] = useState(true);
    const [visibleSections, setVisibleSections] = useState({
        DogPed: true,
        SecDogPed: true,
    });


    const [expandedSections, setExpandedSections] = useState({
        DogPed: true,
        SecDogPed: true,
    });

    const [coordinates, setCoordinates] = useState('X: -803.717 Y: 176.49, Z: 72.841');
    const [xCoord, setXCoord] = useState('X: 36°');
    const [yCoord, setYCoord] = useState('Y: 176°');
    const [zCoord, setZCoord] = useState('Z: 72°');

    const handleDelete = (id) => {
        setVisibleSections((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    };

    const handleCoordinatesChange = (e) => setCoordinates(e.target.value);

    const copyCoordinates = () => navigator.clipboard.writeText(coordinates);

    const handleXChange = (e) => setXCoord(e.target.value);
    const handleYChange = (e) => setYCoord(e.target.value);
    const handleZChange = (e) => setZCoord(e.target.value);

    const copyXCoord = () => navigator.clipboard.writeText(xCoord);
    const copyYCoord = () => navigator.clipboard.writeText(yCoord);
    const copyZCoord = () => navigator.clipboard.writeText(zCoord);

    const toggleOptionContent = (id) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
        setIsRotated(!isRotated);
    };


    return (
        <div className='options editor-options'>
            <div className='option-heading'>
                        <img src={redHuman} alt="human-icon" className='heading-icon' />
                        <h3>Pew spawner</h3>
            </div>
            <div className='scrollable-content'>
                {visibleSections['DogPed'] && (
                    <div className='option'>
                        <div className='option-heading'>
                            <img src={grayHuman} alt="human-icon" className='heading-icon' />
                            <h3>Chihuahua hot dogs ped</h3>
                            <div className='heading-right'>
                                <img
                                    src={Trash}
                                    alt='delete-icon'
                                    className='delete-icon'
                                    onClick={() => handleDelete('DogPed')}
                                />
                                <img
                                    src={More}
                                    alt='more-icon'
                                    className={`more-icon ${expandedSections['DogPed'] ? 'rotated' : ''}`}
                                    onClick={() => toggleOptionContent('DogPed')}
                                />
                            </div>
                        </div>
                        {expandedSections['DogPed'] && (
                            <div>
                                    <div className='option-content darker-bg'>
                                        <h4>Model ID</h4>
                                        <input type='text' className='text-input single-input' value='mp_f_freemode_01' />
                                    </div>
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
                                        <h4>Rotation</h4>
                                        <div className='rotation-inputs-container'>
                                
                                            <div className='rotation-input'>
                                                <input
                                                    type='text'
                                                    value={xCoord}
                                                    onChange={handleXChange}
                                                />
                                                <button className='copy-button' onClick={copyXCoord}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        
                                            <div className='rotation-input'>
                                                <input
                                                    type='text'
                                                    value={yCoord}
                                                    onChange={handleYChange}
                                                />
                                                <button className='copy-button' onClick={copyYCoord}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        
                                            <div className='rotation-input'>
                                                <input
                                                    type='text'
                                                    value={zCoord}
                                                    onChange={handleZChange}
                                                />
                                                <button className='copy-button' onClick={copyZCoord}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className='option-content darker-bg'>
                                        <h4>Animation</h4>
                                        
                                        <input type='text' className='text-input  first-input' value='Animation dict' />
                                        <input type='text' className='text-input' value='Animation clip' />
                                
                                    </div>
                            </div>
                        )}
                    </div>
                )}

                {visibleSections['SecDogPed'] && (
                    <div className='option'>
                        <div className='option-heading'>
                            <img src={grayHuman} alt="human-icon" className='heading-icon' />
                            <h3>Second Chihuahua Ped</h3>
                            <div className='heading-right'>
                                <img
                                    src={Trash}
                                    alt='delete-icon'
                                    className='delete-icon'
                                    onClick={() => handleDelete('SecDogPed')}
                                />
                                <img
                                    src={More}
                                    alt='more-icon'
                                    className={`more-icon ${expandedSections['SecDogPed'] ? 'rotated' : ''}`}
                                    onClick={() => toggleOptionContent('SecDogPed')}
                                />
                            </div>
                        </div>
                        {expandedSections['SecDogPed'] && (
                            <div>
                                <div className='option-content darker-bg'>
                                        <h4>Model ID</h4>
                                        <input type='text' className='text-input single-input' value='mp_f_freemode_01' />
                                    </div>
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
                                        <h4>Rotation</h4>
                                        <div className='rotation-inputs-container'>
                                
                                            <div className='rotation-input'>
                                                <input
                                                    type='text'
                                                    value={xCoord}
                                                    onChange={handleXChange}
                                                />
                                                <button className='copy-button' onClick={copyXCoord}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        
                                            <div className='rotation-input'>
                                                <input
                                                    type='text'
                                                    value={yCoord}
                                                    onChange={handleYChange}
                                                />
                                                <button className='copy-button' onClick={copyYCoord}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        
                                            <div className='rotation-input'>
                                                <input
                                                    type='text'
                                                    value={zCoord}
                                                    onChange={handleZChange}
                                                />
                                                <button className='copy-button' onClick={copyZCoord}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3039 0H4.97054C4.81583 0 4.66746 0.0614583 4.55806 0.170854C4.44867 0.280251 4.38721 0.428624 4.38721 0.583333V3.5H1.47054C1.31583 3.5 1.16746 3.56146 1.05806 3.67085C0.948665 3.78025 0.887207 3.92862 0.887207 4.08333V13.4167C0.887207 13.5714 0.948665 13.7197 1.05806 13.8291C1.16746 13.9385 1.31583 14 1.47054 14H10.8039C10.9586 14 11.107 13.9385 11.2164 13.8291C11.3257 13.7197 11.3872 13.5714 11.3872 13.4167V10.5H14.3039C14.4586 10.5 14.607 10.4385 14.7164 10.3291C14.8257 10.2197 14.8872 10.0714 14.8872 9.91667V0.583333C14.8872 0.428624 14.8257 0.280251 14.7164 0.170854C14.607 0.0614583 14.4586 0 14.3039 0ZM10.2205 12.8333H2.05387V4.66667H10.2205V12.8333ZM13.7205 9.33333H11.3872V4.08333C11.3872 3.92862 11.3257 3.78025 11.2164 3.67085C11.107 3.56146 10.9586 3.5 10.8039 3.5H5.55387V1.16667H13.7205V9.33333Z" fill="#525560"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className='option-content darker-bg'>
                                        <h4>Animation</h4>
                                        
                                        <input type='text' className='text-input  first-input' value='Animation dict' />
                                        <input type='text' className='text-input' value='Animation clip' />
                                
                                    </div>
                            </div>
                        )}
                    </div>
                )}

   
            </div>


            
                <div className='bottom-sticky-btn'>
                    <button >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM9.062 4.312C9.062 4.04678 8.95664 3.79243 8.76911 3.60489C8.58157 3.41736 8.32722 3.312 8.062 3.312C7.79678 3.312 7.54243 3.41736 7.35489 3.60489C7.16736 3.79243 7.062 4.04678 7.062 4.312V7.062H4.312C4.04678 7.062 3.79243 7.16736 3.60489 7.35489C3.41736 7.54243 3.312 7.79678 3.312 8.062C3.312 8.32722 3.41736 8.58157 3.60489 8.76911C3.79243 8.95664 4.04678 9.062 4.312 9.062H7.062V11.812C7.062 12.0772 7.16736 12.3316 7.35489 12.5191C7.54243 12.7066 7.79678 12.812 8.062 12.812C8.32722 12.812 8.58157 12.7066 8.76911 12.5191C8.95664 12.3316 9.062 12.0772 9.062 11.812V9.062H11.812C12.0772 9.062 12.3316 8.95664 12.5191 8.76911C12.7066 8.58157 12.812 8.32722 12.812 8.062C12.812 7.79678 12.7066 7.54243 12.5191 7.35489C12.3316 7.16736 12.0772 7.062 11.812 7.062H9.062V4.312Z" fill="white"/>
                        </svg>
                        Create New one
                    </button>
                </div>
        </div>
    );
}
