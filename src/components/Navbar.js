import React, { useState } from 'react';
import { Text } from '../languages/Language';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';

export default function Navbar() {

    const [state, setState] = useState({'NavItemActive':''})

    const activeitem=(x)=>
    {
        if(state.NavItemActive.length>0){
            document.getElementById(state.NavItemActive).classList.remove('active');
        }
        setState({'NavItemActive':x},()=>{
            document.getElementById(state.NavItemActive).classList.add('active');
        });
    };
    return (
        <nav className="glass">
        <img src={profilepic} className="profilepic"></img>
        <h2><Text tid="name" /></h2>
        <p><Text tid="specialization" /></p>
        <ul>
        <Navitem item=<Text tid="home"/> tolink="/"  activec={activeitem}></Navitem>
        <Navitem item=<Text tid="aboutme"/> tolink="/about"  activec={activeitem}></Navitem>
        <Navitem item=<Text tid="portfolio"/> tolink="/portfolio"  activec={activeitem}></Navitem>
        </ul>
        </nav>
    )
}