// src/components/Portfolio.jsx

import React from 'react';
import './App.css'; // Ensure the CSS file is imported here

const Portfolio = () => {
    return (
        <section id="my-works" className="my-works">
            <div className="work">
                <a href="https://sei-cloud.github.io/CSS-Snippet/">
                    <header>CSS-Snippet</header>
                    <img src="../assets/images/CSS-Snippet.png" alt="CSS Snippet" />
                </a>
            </div>
            <div className="work">
                <a href="https://sei-cloud.github.io/Horiseon-Home/">
                    <header>Horiseon-WebPage</header>
                    <img src="/assets/images/digital-marketing-meeting.jpg" alt="Horiseon" />
                </a>
            </div>
            <div className="work">
                <a href="https://sei-cloud.github.io/mini-project/">
                    <header>Demo WebPage</header>
                    <img src="/assets/images/Demo-Webpage.png" alt="Demo Webpage" />
                </a>
            </div>
            {/* Add more works here */}
        </section>
    );
}

export default Portfolio;
