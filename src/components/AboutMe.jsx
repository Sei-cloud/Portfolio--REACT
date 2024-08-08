import React from 'react';
import profile from '../assets/images/profile.png';

const AboutMe = () => (
    <section id="about-me" className="about-me">
        <img src={profile} alt="profile" id="profile" height="80px" width="80px" />
        <p><span>I'm Sei, a web developer</span> I build, design and create amazing websites.</p>
    </section>
);

export default AboutMe;
