import React from 'react';
import './Hero.css';
import My_circle_pic from '../../assets/My_circle_pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () =>{
    return (
        <>
        <div className='hero' id='home'>
        <img src={My_circle_pic} alt="" />
        <h1><span>I'm Harsh Vardhan Saxena,</span> Frontend Developer based in INDIA.</h1>
        <p>I'm a passionate frontend developer who loves crafting clean, responsive, and interactive web interfaces.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
        </div>
        </>
    )
}
export default Hero;