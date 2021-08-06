import React, {useContext}from 'react';
import Social from '../components/Social'
import { Text } from '../languages/Language';

export default function Home() {
    return (
        <div className="condiv home">
        <h1><Text tid="name" /></h1>
        <p><Text tid="specialization"/></p>
        <h5><Text tid="home-description" /></h5>
        <Social />
        </div>
        )
    }
    