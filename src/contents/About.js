import React, { Component } from 'react';
import { Text, LanguageContext } from '../languages/Language';

class About extends Component {
    render() {
        return (
            <div className="condiv">
            
            <h2 className="abouthead">Info</h2>
            <p>JavaScript Full Stack Developer</p>
            <br></br>
            <p className="p10"><Text tid="about" />
            </p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Node</div>
            <div class="sk s6 glass">Node</div>
            <div class="sk s7 glass">Node</div>
            <div class="sk s8 glass">Node</div>
            </div>
            )
        }
    }
    
export default About