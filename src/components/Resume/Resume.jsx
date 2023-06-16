import React from 'react';
import "./resume.scss"
import fullResume from "../assets/RaiyaAYoung_CSS_Resume2023.pdf"


function Resume() {

    return (
        <div className="resume" id="resume">
            <h2>Raiya Young's Resume</h2>
            <p>Note: Please find a <a href={fullResume} target="_blank" rel="noreferrer">Downloadable Resume Here</a></p>
            {/* <p>INSERT TEXT HERE</p> */}
            <h3>Full Stack Development Experience</h3>
            <p>As a full stack developer in the Georgia Tech Full Stack Development Coding Bootcamp, I have developed proficiency with these technologies:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default Resume;