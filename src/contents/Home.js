import React, {useContext}from 'react';
import Social from '../components/Social'
import { Text, LanguageContext } from '../languages/Language';

export default function Home() {
    const { dictionary } = useContext(LanguageContext)
    return (
        <div className="condiv home">
        <h1><Text tid="name" /></h1>
        <p><Text tid="prof"/></p>
        <h5>This is my portfolio site and it's just a template for now...</h5>
        <Social />
        </div>
        )
    }
    