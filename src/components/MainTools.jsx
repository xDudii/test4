import React, { useState } from 'react';
import Prop from '../icons/prop.svg';
import More from '../icons/more.svg';

export default function MainTools() {

    const [isRotated, setIsRotated] = useState(false);

    const [visibleOptions, setVisibleOptions] = useState({
        PropTool: true,
    });

    const toggleOptionContent = (id) => {
        setVisibleOptions(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
        setIsRotated(!isRotated);
    };

    return (
        <div className='options tools-options'>
            <div className='option'>
                <div className='option-heading'>
                    <img src={Prop} alt="prop-icon" className='heading-icon' />
                    <h3>Prop Tool</h3>
                    <img
                        src={More}
                        alt='more-icon'
                        className={`more-icon ${visibleOptions['PropTool'] ? 'rotated' : ''}`}
                        onClick={() => toggleOptionContent('PropTool')}
                    />
                </div>
                {visibleOptions['PropTool'] && (
                    <>
                        <div className='option-content'>
                            <h4>Prop model</h4>
                            <input type='text' className='text-input single-input' value='vv_prop_casino_slot_06a' />
                        </div>
                        <div className='option-content darker-bg'>
                            <h4>Target entity</h4>
                            <select className='text-input rotate-arrow single-input'>
                                <option>Select</option>
                            </select>
                        </div>
                        <div className='option-content'>
                            <h4>Animation</h4>
                            
                              <input type='text' className='text-input  first-input' value='Animation dict' />
                              <input type='text' className='text-input' value='Animation clip' />
                         
                        </div>
                        <div className='option-content darker-bg'>
                            <h4>Bones</h4>
                            <select className='text-input rotate-arrow single-input'>
                                <option>Select</option>
                            </select>
                        </div>
                        <div className='tools-buttons'>
                            <button className='red-tools-btn'>Copy native</button>
                            <button className='gray-tools-btn'>Edit offset</button>
                        </div>
                        
                    </>
                )}
            </div>
        </div>
    );
}
