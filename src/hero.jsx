import React from 'react';
import { database } from './firebase.js';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const history = useNavigate()
    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val)
            history('/')
        })
    }
    return (
        <div className="hero">
            <h1 className='hero-logo'>VastHub</h1>

            <div className='logout-button-container'>
                <button onClick={handleClick} className='logout-button'>LogOut</button>
            </div>

            <div className="hero-desc-div">
                <div className='hero-subsub-div hero-subsub-div1'><h2>A Dashboard made for Students </h2></div>
                <div className='hero-subsub-div'><img alt="sgpa" src="../college.png" /></div>
                <div className='hero-subsub-div hero-subsub-div2'><h2>Calculate Attendance, Cgpa, Sgpa and much more!</h2></div>
                
            </div>


        </div>
    );
}
export default Hero;