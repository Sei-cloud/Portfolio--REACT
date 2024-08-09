import React from 'react';
import '../assets/css/app.css';

const Resume = () => (
  <section id="resume">
    <div className="resume-content">
      <h1>Resume</h1>
      <div className="resume-section">
        <h2>Front-End Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="resume-section">
        <h2>Back-End Skills</h2>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <a href="../assets/resume.pdf" download="resume.pdf" className="download-resume">
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
