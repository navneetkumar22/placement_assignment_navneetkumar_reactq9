import React, { useContext } from 'react';
import "../styles/About.css";
import picture from "../assets/picture.jpeg";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from '../Color';
import ThemeToggler from './ThemeToggler';

const Dashboard = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <section className='dashboard'
            style={{ color: `${currentTheme.textColor}`, backgroundColor: `${currentTheme.backgroundColor}` }}
        >
            <h1>Context API - Theme Switcher</h1>
            <div className='about'>
                <div className='photo'>
                    <img src={picture} alt='selfie' />
                </div>
                <div className='about-div'>
                    <div className='about-text'>
                        <h2>About <span className='text-span'>Me</span></h2>
                        <h4>Full Stack Engineer!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='resume'>
                        <button className='resume-btn'>Read More</button>
                    </div>
                </div>
            </div>
            <ThemeToggler />
        </section>
    )
}

export default Dashboard;