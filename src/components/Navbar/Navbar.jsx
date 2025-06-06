import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState('home')
    const menuRef = useRef();

    const openMenu = () =>{
       menuRef.current.style.right="0";
    }

    const closeMenu = () =>{
        menuRef.current.style.right="-350px";
        
    }
//     const menuRef = useRef();

//   const showNavbar = () => {
//     if (menuRef.current) {
//       menuRef.current.style.right = '0'; // Open menu
//     }
//   };

//   const hideNavbar = () => {
//     if (menuRef.current) {
//       menuRef.current.style.right = '-350%'; // Close menu
//     }
//   };

    return (
        <>
            <div className='navbar'>
                <div className="logo"><AnchorLink className='anchor-link' href='#home'>HVS Portfolio</AnchorLink></div>
                <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>
                <ul ref={menuRef} className="nav-menu">

                    <img src={menu_close} alt=""  className='nav-mob-close' onClick={closeMenu}/>

                    <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => {
                        setMenu('home')
                    }}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>

                    <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => {
                        setMenu('about')
                    }}>About</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>

                    <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => {
                        setMenu('services')
                    }}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>

                    <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() => {
                        setMenu('projects')
                    }}>Projects</p></AnchorLink>{menu === "projects" ? <img src={underline} alt='' /> : <></>}</li>

                    <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => {
                        setMenu('contact')
                    }}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>

                </ul>
                <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            </div>
        </>
    )
}

export default Navbar;