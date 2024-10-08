import React, { useState } from 'react';
import More from '../icons/more.svg';
import Website from '../icons/website-red.svg';

export default function MainTools() {
    const [clickedStates, setClickedStates] = useState({});

    const handleSvgClick = (id) => {
        setClickedStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    const [isRotated, setIsRotated] = useState(false);
    const [visibleOptions, setVisibleOptions] = useState({
        Editor: true,
    });
    const [showNewPreset, setShowNewPreset] = useState(false);

    const toggleOptionContent = (id) => {
        setVisibleOptions((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
        setIsRotated(!isRotated);
    };

    const handleCreatePreset = () => {
        setShowNewPreset(true);
    };

    const handleGoBack = () => {
        setShowNewPreset(false);
    };

    const removeContent = (e) => {
        const button = e.target;

   
        let parentDiv = button.closest('.option-content') || button.closest('.presets-option');
        
        if (parentDiv) {
            parentDiv.remove();
        }
    };

    return (
        <div className='options editor-options'>
            {!showNewPreset ? (
                <>
                    <div className='option'>
                        <div className='option-heading'>
                            <img src={Website} alt="world-icon" className='heading-icon' />
                            <h3>World Editor</h3>
                            <img
                                src={More}
                                alt='more-icon'
                                className={`more-icon ${visibleOptions['Editor'] ? 'rotated' : ''}`}
                                onClick={() => toggleOptionContent('Editor')}
                            />
                        </div>

                        {visibleOptions['Editor'] && (
                            <div className='scrollable-content'>
                                <div>
                                    <div className='option-content'>
                                        <h5 className='editor-subtitle'>Random named preset #5</h5>
                                        <div className='preset-btns'>
                                            <button onClick={() => handleSvgClick(1)}>
                                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className={clickedStates[1] ? 'svg-clicked' : ''} 
                                                    
                                                >
                                                    <path d="M8 3.3C7.42135 3.3 6.86639 3.53178 6.45722 3.94436C6.04805 4.35695 5.81818 4.91652 5.81818 5.5C5.81818 6.08348 6.04805 6.64306 6.45722 7.05564C6.86639 7.46822 7.42135 7.7 8 7.7C8.57865 7.7 9.13361 7.46822 9.54278 7.05564C9.95195 6.64306 10.1818 6.08348 10.1818 5.5C10.1818 4.91652 9.95195 4.35695 9.54278 3.94436C9.13361 3.53178 8.57865 3.3 8 3.3ZM8 9.16667C7.03558 9.16667 6.11065 8.78036 5.4287 8.09272C4.74675 7.40509 4.36364 6.47246 4.36364 5.5C4.36364 4.52754 4.74675 3.59491 5.4287 2.90728C6.11065 2.21964 7.03558 1.83333 8 1.83333C8.96442 1.83333 9.88935 2.21964 10.5713 2.90728C11.2532 3.59491 11.6364 4.52754 11.6364 5.5C11.6364 6.47246 11.2532 7.40509 10.5713 8.09272C9.88935 8.78036 8.96442 9.16667 8 9.16667ZM8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0Z" fill="white"/>
                                                </svg>
                                            </button>
                                            <button>
                                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.97444 11.1959H0V8.22146L8.01621 0.20525C8.14767 0.0738285 8.32595 0 8.51183 0C8.69772 0 8.87599 0.0738285 9.00746 0.20525L10.9907 2.18775C11.0558 2.25285 11.1075 2.33017 11.1428 2.41527C11.1781 2.50037 11.1963 2.59159 11.1963 2.68372C11.1963 2.77585 11.1781 2.86707 11.1428 2.95217C11.1075 3.03727 11.0558 3.11459 10.9907 3.17969L2.97444 11.1959ZM0 12.598H12.6184V14H0V12.598Z" fill="white"/>
                                                </svg>
                                            </button>
                                            <button className='remove-btn' onClick={removeContent}>
                                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 0.666667H8.25L7.46429 0H3.53571L2.75 0.666667H0V2H11M0.785714 10.6667C0.785714 11.0203 0.951275 11.3594 1.24597 11.6095C1.54067 11.8595 1.94037 12 2.35714 12H8.64286C9.05963 12 9.45932 11.8595 9.75402 11.6095C10.0487 11.3594 10.2143 11.0203 10.2143 10.6667V2.66667H0.785714V10.6667Z" fill="white"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='bottom-sticky-btn'>
                        <button onClick={handleCreatePreset}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM9.062 4.312C9.062 4.04678 8.95664 3.79243 8.76911 3.60489C8.58157 3.41736 8.32722 3.312 8.062 3.312C7.79678 3.312 7.54243 3.41736 7.35489 3.60489C7.16736 3.79243 7.062 4.04678 7.062 4.312V7.062H4.312C4.04678 7.062 3.79243 7.16736 3.60489 7.35489C3.41736 7.54243 3.312 7.79678 3.312 8.062C3.312 8.32722 3.41736 8.58157 3.60489 8.76911C3.79243 8.95664 4.04678 9.062 4.312 9.062H7.062V11.812C7.062 12.0772 7.16736 12.3316 7.35489 12.5191C7.54243 12.7066 7.79678 12.812 8.062 12.812C8.32722 12.812 8.58157 12.7066 8.76911 12.5191C8.95664 12.3316 9.062 12.0772 9.062 11.812V9.062H11.812C12.0772 9.062 12.3316 8.95664 12.5191 8.76911C12.7066 8.58157 12.812 8.32722 12.812 8.062C12.812 7.79678 12.7066 7.54243 12.5191 7.35489C12.3316 7.16736 12.0772 7.062 11.812 7.062H9.062V4.312Z" fill="white"/>
                            </svg>
                            Create New Preset
                        </button>
                    </div>
                </>
            ) : (
                <div className='new-preset'>
                    <div className='presets-heading'>
                        <div className='option-heading'>
                            <h4>Editing random presets</h4>
                        </div>
                        <div className='presets-option presets-option-heading'>
                        <h6>Enter model ID</h6>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM9.062 4.312C9.062 4.04678 8.95664 3.79243 8.76911 3.60489C8.58157 3.41736 8.32722 3.312 8.062 3.312C7.79678 3.312 7.54243 3.41736 7.35489 3.60489C7.16736 3.79243 7.062 4.04678 7.062 4.312V7.062H4.312C4.04678 7.062 3.79243 7.16736 3.60489 7.35489C3.41736 7.54243 3.312 7.79678 3.312 8.062C3.312 8.32722 3.41736 8.58157 3.60489 8.76911C3.79243 8.95664 4.04678 9.062 4.312 9.062H7.062V11.812C7.062 12.0772 7.16736 12.3316 7.35489 12.5191C7.54243 12.7066 7.79678 12.812 8.062 12.812C8.32722 12.812 8.58157 12.7066 8.76911 12.5191C8.95664 12.3316 9.062 12.0772 9.062 11.812V9.062H11.812C12.0772 9.062 12.3316 8.95664 12.5191 8.76911C12.7066 8.58157 12.812 8.32722 12.812 8.062C12.812 7.79678 12.7066 7.54243 12.5191 7.35489C12.3316 7.16736 12.0772 7.062 11.812 7.062H9.062V4.312Z" fill="white"/>
                        </svg>

                        </div>
                    </div>
                    <div className='object-list'>
                        <h4>Object list</h4>

                        <div className='presets-option'>
                            <h6>xs_prop_trophy_bandito_01a</h6>
                            <div className='preset-btns'>
                                <button>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.8437 0H4.86503C4.64178 0 4.42768 0.0884998 4.26982 0.24603C4.11196 0.403561 4.02328 0.617218 4.02328 0.84V3.36H1.49803C1.27478 3.36 1.06068 3.4485 0.902823 3.60603C0.744965 3.76356 0.656281 3.97722 0.656281 4.2V13.16C0.656281 13.3828 0.744965 13.5964 0.902823 13.754C1.06068 13.9115 1.27478 14 1.49803 14H10.4767C10.6999 14 10.914 13.9115 11.0719 13.754C11.2298 13.5964 11.3184 13.3828 11.3184 13.16V10.64H13.8437C14.0669 10.64 14.281 10.5515 14.4389 10.394C14.5968 10.2364 14.6854 10.0228 14.6854 9.8V0.84C14.6854 0.617218 14.5968 0.403561 14.4389 0.24603C14.281 0.0884998 14.0669 0 13.8437 0ZM9.63495 12.32H2.33978V5.04H9.63495V12.32ZM13.0019 8.96H11.3184V4.2C11.3184 3.97722 11.2298 3.76356 11.0719 3.60603C10.914 3.4485 10.6999 3.36 10.4767 3.36H5.70678V1.68H13.0019V8.96Z" fill="#525560"/>
                                    </svg>

                                </button>
                                <button className='eye-btn' onClick={() => handleSvgClick(2)}>
                                <svg width="17" height="11" viewBox="0 0 17 11"  xmlns="http://www.w3.org/2000/svg" className={clickedStates[2] ? 'svg-clicked' : ''} 
                                                    >
                                <path d="M8.76252 3.3C8.18266 3.3 7.62655 3.53178 7.21652 3.94436C6.8065 4.35695 6.57615 4.91652 6.57615 5.5C6.57615 6.08348 6.8065 6.64306 7.21652 7.05564C7.62655 7.46822 8.18266 7.7 8.76252 7.7C9.34238 7.7 9.89849 7.46822 10.3085 7.05564C10.7185 6.64306 10.9489 6.08348 10.9489 5.5C10.9489 4.91652 10.7185 4.35695 10.3085 3.94436C9.89849 3.53178 9.34238 3.3 8.76252 3.3ZM8.76252 9.16667C7.79608 9.16667 6.86923 8.78036 6.18586 8.09272C5.50249 7.40509 5.11858 6.47246 5.11858 5.5C5.11858 4.52754 5.50249 3.59491 6.18586 2.90728C6.86923 2.21964 7.79608 1.83333 8.76252 1.83333C9.72895 1.83333 10.6558 2.21964 11.3392 2.90728C12.0225 3.59491 12.4065 4.52754 12.4065 5.5C12.4065 6.47246 12.0225 7.40509 11.3392 8.09272C10.6558 8.78036 9.72895 9.16667 8.76252 9.16667ZM8.76252 0C5.11858 0 2.00665 2.28067 0.74585 5.5C2.00665 8.71933 5.11858 11 8.76252 11C12.4065 11 15.5184 8.71933 16.7792 5.5C15.5184 2.28067 12.4065 0 8.76252 0Z" fill="#525560"/>
                                </svg>




                                </button>
                                <button>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.82235 11.1959H0.841705V8.22146L8.87461 0.20525C9.00635 0.0738285 9.185 0 9.37127 0C9.55754 0 9.73619 0.0738285 9.86793 0.20525L11.8553 2.18775C11.9206 2.25285 11.9724 2.33017 12.0077 2.41527C12.0431 2.50037 12.0613 2.59159 12.0613 2.68372C12.0613 2.77585 12.0431 2.86707 12.0077 2.95217C11.9724 3.03727 11.9206 3.11459 11.8553 3.17969L3.82235 11.1959ZM0.841705 12.598H13.4864V14H0.841705V12.598Z" fill="#525560"/>
                                </svg>

                                </button>
                                <button className='remove-btn' onClick={removeContent}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9583 0.666667H9.20261L8.41526 0H4.47851L3.69115 0.666667H0.935425V2H11.9583M1.72278 10.6667C1.72278 11.0203 1.88868 11.3594 2.184 11.6095C2.47931 11.8595 2.87984 12 3.29748 12H9.59629C10.0139 12 10.4145 11.8595 10.7098 11.6095C11.0051 11.3594 11.171 11.0203 11.171 10.6667V2.66667H1.72278V10.6667Z" fill="#525560"/>
                                </svg>


                                </button>
                            </div>
                        </div>
                        <div className='presets-option'>
                            <h6>xs_prop_trophy_bandito_01a</h6>
                            <div className='preset-btns'>
                                <button>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.8437 0H4.86503C4.64178 0 4.42768 0.0884998 4.26982 0.24603C4.11196 0.403561 4.02328 0.617218 4.02328 0.84V3.36H1.49803C1.27478 3.36 1.06068 3.4485 0.902823 3.60603C0.744965 3.76356 0.656281 3.97722 0.656281 4.2V13.16C0.656281 13.3828 0.744965 13.5964 0.902823 13.754C1.06068 13.9115 1.27478 14 1.49803 14H10.4767C10.6999 14 10.914 13.9115 11.0719 13.754C11.2298 13.5964 11.3184 13.3828 11.3184 13.16V10.64H13.8437C14.0669 10.64 14.281 10.5515 14.4389 10.394C14.5968 10.2364 14.6854 10.0228 14.6854 9.8V0.84C14.6854 0.617218 14.5968 0.403561 14.4389 0.24603C14.281 0.0884998 14.0669 0 13.8437 0ZM9.63495 12.32H2.33978V5.04H9.63495V12.32ZM13.0019 8.96H11.3184V4.2C11.3184 3.97722 11.2298 3.76356 11.0719 3.60603C10.914 3.4485 10.6999 3.36 10.4767 3.36H5.70678V1.68H13.0019V8.96Z" fill="#525560"/>
                                    </svg>

                                </button>
                                <button onClick={() => handleSvgClick(3)}>
                                <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={clickedStates[3] ? 'svg-clicked' : ''} 
                                                    >
                                <path d="M8.76252 3.3C8.18266 3.3 7.62655 3.53178 7.21652 3.94436C6.8065 4.35695 6.57615 4.91652 6.57615 5.5C6.57615 6.08348 6.8065 6.64306 7.21652 7.05564C7.62655 7.46822 8.18266 7.7 8.76252 7.7C9.34238 7.7 9.89849 7.46822 10.3085 7.05564C10.7185 6.64306 10.9489 6.08348 10.9489 5.5C10.9489 4.91652 10.7185 4.35695 10.3085 3.94436C9.89849 3.53178 9.34238 3.3 8.76252 3.3ZM8.76252 9.16667C7.79608 9.16667 6.86923 8.78036 6.18586 8.09272C5.50249 7.40509 5.11858 6.47246 5.11858 5.5C5.11858 4.52754 5.50249 3.59491 6.18586 2.90728C6.86923 2.21964 7.79608 1.83333 8.76252 1.83333C9.72895 1.83333 10.6558 2.21964 11.3392 2.90728C12.0225 3.59491 12.4065 4.52754 12.4065 5.5C12.4065 6.47246 12.0225 7.40509 11.3392 8.09272C10.6558 8.78036 9.72895 9.16667 8.76252 9.16667ZM8.76252 0C5.11858 0 2.00665 2.28067 0.74585 5.5C2.00665 8.71933 5.11858 11 8.76252 11C12.4065 11 15.5184 8.71933 16.7792 5.5C15.5184 2.28067 12.4065 0 8.76252 0Z" fill="#525560"/>
                                </svg>




                                </button>
                                <button>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.82235 11.1959H0.841705V8.22146L8.87461 0.20525C9.00635 0.0738285 9.185 0 9.37127 0C9.55754 0 9.73619 0.0738285 9.86793 0.20525L11.8553 2.18775C11.9206 2.25285 11.9724 2.33017 12.0077 2.41527C12.0431 2.50037 12.0613 2.59159 12.0613 2.68372C12.0613 2.77585 12.0431 2.86707 12.0077 2.95217C11.9724 3.03727 11.9206 3.11459 11.8553 3.17969L3.82235 11.1959ZM0.841705 12.598H13.4864V14H0.841705V12.598Z" fill="#525560"/>
                                </svg>

                                </button>
                                <button className='remove-btn' onClick={removeContent}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9583 0.666667H9.20261L8.41526 0H4.47851L3.69115 0.666667H0.935425V2H11.9583M1.72278 10.6667C1.72278 11.0203 1.88868 11.3594 2.184 11.6095C2.47931 11.8595 2.87984 12 3.29748 12H9.59629C10.0139 12 10.4145 11.8595 10.7098 11.6095C11.0051 11.3594 11.171 11.0203 11.171 10.6667V2.66667H1.72278V10.6667Z" fill="#525560"/>
                                </svg>


                                </button>
                            </div>
                        </div>
                        <div className='presets-option'>
                            <h6>xs_prop_trophy_bandito_015a</h6>
                            <div className='preset-btns'>
                                <button>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.8437 0H4.86503C4.64178 0 4.42768 0.0884998 4.26982 0.24603C4.11196 0.403561 4.02328 0.617218 4.02328 0.84V3.36H1.49803C1.27478 3.36 1.06068 3.4485 0.902823 3.60603C0.744965 3.76356 0.656281 3.97722 0.656281 4.2V13.16C0.656281 13.3828 0.744965 13.5964 0.902823 13.754C1.06068 13.9115 1.27478 14 1.49803 14H10.4767C10.6999 14 10.914 13.9115 11.0719 13.754C11.2298 13.5964 11.3184 13.3828 11.3184 13.16V10.64H13.8437C14.0669 10.64 14.281 10.5515 14.4389 10.394C14.5968 10.2364 14.6854 10.0228 14.6854 9.8V0.84C14.6854 0.617218 14.5968 0.403561 14.4389 0.24603C14.281 0.0884998 14.0669 0 13.8437 0ZM9.63495 12.32H2.33978V5.04H9.63495V12.32ZM13.0019 8.96H11.3184V4.2C11.3184 3.97722 11.2298 3.76356 11.0719 3.60603C10.914 3.4485 10.6999 3.36 10.4767 3.36H5.70678V1.68H13.0019V8.96Z" fill="#525560"/>
                                    </svg>

                                </button>
                                <button onClick={() => handleSvgClick(4)}>
                                <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={clickedStates[4] ? 'svg-clicked' : ''} 
                                                    >
                                <path d="M8.76252 3.3C8.18266 3.3 7.62655 3.53178 7.21652 3.94436C6.8065 4.35695 6.57615 4.91652 6.57615 5.5C6.57615 6.08348 6.8065 6.64306 7.21652 7.05564C7.62655 7.46822 8.18266 7.7 8.76252 7.7C9.34238 7.7 9.89849 7.46822 10.3085 7.05564C10.7185 6.64306 10.9489 6.08348 10.9489 5.5C10.9489 4.91652 10.7185 4.35695 10.3085 3.94436C9.89849 3.53178 9.34238 3.3 8.76252 3.3ZM8.76252 9.16667C7.79608 9.16667 6.86923 8.78036 6.18586 8.09272C5.50249 7.40509 5.11858 6.47246 5.11858 5.5C5.11858 4.52754 5.50249 3.59491 6.18586 2.90728C6.86923 2.21964 7.79608 1.83333 8.76252 1.83333C9.72895 1.83333 10.6558 2.21964 11.3392 2.90728C12.0225 3.59491 12.4065 4.52754 12.4065 5.5C12.4065 6.47246 12.0225 7.40509 11.3392 8.09272C10.6558 8.78036 9.72895 9.16667 8.76252 9.16667ZM8.76252 0C5.11858 0 2.00665 2.28067 0.74585 5.5C2.00665 8.71933 5.11858 11 8.76252 11C12.4065 11 15.5184 8.71933 16.7792 5.5C15.5184 2.28067 12.4065 0 8.76252 0Z" fill="#525560"/>
                                </svg>




                                </button>
                                <button>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.82235 11.1959H0.841705V8.22146L8.87461 0.20525C9.00635 0.0738285 9.185 0 9.37127 0C9.55754 0 9.73619 0.0738285 9.86793 0.20525L11.8553 2.18775C11.9206 2.25285 11.9724 2.33017 12.0077 2.41527C12.0431 2.50037 12.0613 2.59159 12.0613 2.68372C12.0613 2.77585 12.0431 2.86707 12.0077 2.95217C11.9724 3.03727 11.9206 3.11459 11.8553 3.17969L3.82235 11.1959ZM0.841705 12.598H13.4864V14H0.841705V12.598Z" fill="#525560"/>
                                </svg>

                                </button>
                                <button className='remove-btn' onClick={removeContent}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9583 0.666667H9.20261L8.41526 0H4.47851L3.69115 0.666667H0.935425V2H11.9583M1.72278 10.6667C1.72278 11.0203 1.88868 11.3594 2.184 11.6095C2.47931 11.8595 2.87984 12 3.29748 12H9.59629C10.0139 12 10.4145 11.8595 10.7098 11.6095C11.0051 11.3594 11.171 11.0203 11.171 10.6667V2.66667H1.72278V10.6667Z" fill="#525560"/>
                                </svg>


                                </button>
                            </div>
                        </div>
                        <div className='bottom-sticky-btn'>
                  
                </div>

                    </div>
                    <div className='bottom-editor-btns editor-btns'>
                    <button className='red-btn' onClick={handleGoBack}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.63636 7.2662e-08H2.36364C1.73676 7.2662e-08 1.13556 0.249025 0.692293 0.692293C0.249025 1.13556 0 1.73676 0 2.36364V13.6364C6.78431e-05 14.2317 0.224804 14.8051 0.629293 15.242C1.03378 15.6788 1.58823 15.9469 2.18182 15.9927V9.63636C2.18182 9.20237 2.35422 8.78616 2.6611 8.47928C2.96798 8.1724 3.38419 8 3.81818 8H12.1818C12.6158 8 13.032 8.1724 13.3389 8.47928C13.6458 8.78616 13.8182 9.20237 13.8182 9.63636V15.9927C14.4118 15.9469 14.9662 15.6788 15.3707 15.242C15.7752 14.8051 15.9999 14.2317 16 13.6364V4.208C16.0001 3.89749 15.939 3.59 15.8202 3.30311C15.7014 3.01623 15.5272 2.75556 15.3076 2.536L13.464 0.692364C13.2444 0.472789 12.9838 0.298627 12.6969 0.179828C12.41 0.0610295 12.1025 -7.69179e-05 11.792 7.2662e-08H11.6364V4.18182C11.6364 4.39671 11.594 4.60949 11.5118 4.80803C11.4296 5.00656 11.309 5.18695 11.1571 5.3389C11.0051 5.49085 10.8247 5.61139 10.6262 5.69362C10.4277 5.77586 10.2149 5.81818 10 5.81818H5.27273C4.83874 5.81818 4.42252 5.64578 4.11564 5.3389C3.80877 5.03202 3.63636 4.61581 3.63636 4.18182V7.2662e-08ZM10.5455 7.2662e-08H4.72727V4.18182C4.72727 4.48291 4.97164 4.72727 5.27273 4.72727H10C10.1447 4.72727 10.2834 4.66981 10.3857 4.56751C10.488 4.46522 10.5455 4.32648 10.5455 4.18182V7.2662e-08ZM12.7273 16V9.63636C12.7273 9.4917 12.6698 9.35296 12.5675 9.25067C12.4652 9.14838 12.3265 9.09091 12.1818 9.09091H3.81818C3.67352 9.09091 3.53478 9.14838 3.43249 9.25067C3.33019 9.35296 3.27273 9.4917 3.27273 9.63636V16H12.7273Z" fill="white"/>
                    </svg>

                        Save 
                    </button>
                    <button className='dark-btn' onClick={handleGoBack}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.65685 2.65687C4.15715 1.15658 6.19198 0.313721 8.31371 0.313721C10.4354 0.313721 12.4703 1.15658 13.9706 2.65687C15.4709 4.15716 16.3137 6.19199 16.3137 8.31372C16.3137 10.4355 15.4709 12.4703 13.9706 13.9706C12.4703 15.4709 10.4354 16.3137 8.31371 16.3137C6.19198 16.3137 4.15715 15.4709 2.65685 13.9706C1.15656 12.4703 0.313708 10.4355 0.313709 8.31372C0.313708 6.19199 1.15656 4.15716 2.65685 2.65687ZM6.45685 4.95496C6.26931 4.76743 6.01496 4.66207 5.74974 4.66207C5.48452 4.66207 5.23017 4.76743 5.04263 4.95496C4.8551 5.1425 4.74974 5.39685 4.74974 5.66207C4.74974 5.92729 4.8551 6.18164 5.04263 6.36918L6.98718 8.31372L5.04263 10.2583C4.8551 10.4458 4.74974 10.7002 4.74974 10.9654C4.74974 11.2306 4.8551 11.4849 5.04263 11.6725C5.23017 11.86 5.48452 11.9654 5.74974 11.9654C6.01496 11.9654 6.26931 11.86 6.45685 11.6725L8.40139 9.72793L10.3459 11.6725C10.5335 11.86 10.7878 11.9654 11.053 11.9654C11.3183 11.9654 11.5726 11.86 11.7601 11.6725C11.9477 11.4849 12.053 11.2306 12.053 10.9654C12.053 10.7002 11.9477 10.4458 11.7601 10.2583L9.8156 8.31372L11.7601 6.36918C11.9477 6.18164 12.053 5.92729 12.053 5.66207C12.053 5.39685 11.9477 5.1425 11.7601 4.95496C11.5726 4.76743 11.3183 4.66207 11.053 4.66207C10.7878 4.66207 10.5335 4.76743 10.3459 4.95496L8.40139 6.89951L6.45685 4.95496Z" fill="#525560"/>
                    </svg>


                        Cancel
                    </button>
                </div>
                </div>
                
            )}

        </div>
    );
}
