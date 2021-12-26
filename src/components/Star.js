import React, { useState } from 'react'
import useSound from 'use-sound'
import star from '../00-music-box.mp3'
import './comp.css'

function Star() {
    const [play] = useSound(star);
    const [display, setDisplay] = useState("notdisplayed");

    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };
    
    const buttonstyle = {
        backgroundColor: 'transparent',
        color: 'rgb(16,16,16)', 
        height: '30%', 
        borderColor: 'transparent', 
        borderRadius: '3px',
        fontFamily: 'Roboto Mono'
    }

    return (
        <div>
            <div>
                <div
                    className="productbox"
                    onMouseEnter={e => showButton(e)}
                    onMouseLeave={e => hideButton(e)}
                >
                    <button 
                        className={display}
                        style={ buttonstyle }
                        onMouseEnter={() => play()} 
                    >
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Star
