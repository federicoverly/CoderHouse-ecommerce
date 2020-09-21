import React from 'react';
import './Hero.css'; 
import janine_hero from "./hero.jpg";

const Hero = ({welcome_message}) => {
    
    let styles = {
        backgroundImage:`url(${janine_hero})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100vh',
        width:'100wh',
    };

    return (
        <div className="janineHero" style={ styles }>
            <div className="janineHeroMessage">
            <h1> {welcome_message} </h1>
            </div>
        </div>
    );
}

export default Hero;