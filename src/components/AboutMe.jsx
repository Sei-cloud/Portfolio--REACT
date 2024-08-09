import React from 'react';
import '../assets/css/app.css';

const AboutMe = () => (
  <section id="about-me" className="about-me">
    <h1>About Me</h1>
    <div className="about-me-content">
      <img
        src="./assets/images/profile.png"
        alt="profile"
        id="profile"
        className="profile-image"
      />
      <div className="about-me-text">
        <div className="about-me-text-section">
          <p>
            <span>
              I'm Sei, a passionate web developer with expertise in modern technologies. I specialize in crafting engaging, user-friendly websites that are both functional and visually appealing. With a background in front-end and back-end development, I bring a comprehensive approach to building digital solutions.
            </span>
          </p>
        </div>
        <div className="about-me-text-section">
          <p>
            I build, design, and create amazing websites. My approach to development is driven by a passion for clean, user-centric design, and I strive to deliver high-quality, responsive websites that exceed expectations. Whether working on a new project or enhancing an existing one, my goal is to create solutions that are both functional and visually appealing.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
