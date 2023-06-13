import React from 'react';
import "./about.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect (()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["marketer", "leader", "full stack developer", "badass"],   
       });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Raiya-portfolio.jpg" alt="raiya portfolio picture" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Raiya Young</h1>
                    <h3>Open source <span ref={textRef}></span></h3>
                    <p>INSERT TEXT HERE
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;