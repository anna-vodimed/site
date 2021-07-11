import React, { useContext, useState } from 'react';
import Social from '../components/Social';
import { Text, LanguageContext } from '../languages/Language';

export default function Contact() {
    const { dictionary } = useContext(LanguageContext)
    return (
        <div className="condiv contact">
        <h1 className="subtopic"><Text tid="contact"/></h1>
        <a href="#"><div className="back3 glass"><Text tid ="resume" /></div></a>
        <a href="mailto:youremail@gmail.com"><div className="back3 back4 glass"><Text tid="contact" /></div></a>
        <Social />
        </div>
    )
}
    
