import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = ()=>{
    return(
        <>
        <div className='services' id='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_data.map((s,idx)=>{
                    return <div key={idx} className='services-format'>
                        <h3>{s.s_no}</h3>
                        <h2>{s.s_name}</h2>
                        <p>{s.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
        </>
    )
}
export default Services;