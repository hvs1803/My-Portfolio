import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/About_profile.jpeg'

const About = () => {
    return (
        <div className='About' id='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate Frontend Developer with a strong foundation in creating responsive, user-friendly web interfaces using modern technologies like React and Tailwind CSS. I enjoy turning ideas into interactive digital experiences and take pride in writing clean, maintainable code.</p>
                        <p>Currently, I’m expanding my skill set by diving into backend development with Next.js, where I’m learning about server-side rendering, API routes, and full-stack application architecture. As a fresher in the tech industry, I’m constantly exploring new tools and best practices to grow as a well-rounded developer.</p>
                        <p>I’m eager to collaborate on meaningful projects, contribute to dynamic teams, and continue learning every day in this ever-evolving field.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '80%' }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>React.js</p><hr style={{ width: '80%' }} /></div>
                        <div className="about-skill"><p>Next.js</p><hr style={{ width: '50%' }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About;