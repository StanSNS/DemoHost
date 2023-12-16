import React, { useState, useRef } from 'react';
import videoBg from './Comp 1_2.mp4';
import './Hero.css';

function Hero() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const toggleContent = () => {
        const video = videoRef.current;

        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }

            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className='main'>
            <div className='controls'>
                <div>
                    <input
                        id='checkbox'
                        type='checkbox'
                        checked={isPlaying}
                        onChange={toggleContent}
                    />
                    <label className='switch' htmlFor='checkbox'>
                        {isPlaying ? 'Pause' : 'Play'}
                    </label>
                </div>
            </div>

            <video
                className='myVideo'
                ref={videoRef}
                src={videoBg}
                autoPlay
                loop
                muted
            />

            <div className='content'>
                <h1>Welcome</h1>
                <p>To my site.</p>
                <p>This is demo text</p>
            </div>
        </div>
    );
}

export default Hero;
