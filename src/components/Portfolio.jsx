import React from 'react';
import '../assets/css/app.css';
import githubIcon from '../assets/images/github-icon.png'; 

const Portfolio = () => (
    
  <section id="my-works" className="my-works">
        <h1>Portfolio</h1>
    <div className="work">
      <a href="https://sei-cloud.github.io/CSS-Snippet/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          CSS-Snippet
          <a href="https://github.com/Sei-cloud/css-snippet" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/CSS-Snippet.png" alt="CSS Snippet" />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/Horiseon-Home/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Horiseon-WebPage
          <a href="https://github.com/Sei-cloud/horiseon-home" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/digital-marketing-meeting.jpg" alt="Horiseon" />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/mini-project/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Demo WebPage
          <a href="https://github.com/Sei-cloud/mini-project" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Demo-Webpage.png" alt="Demo Webpage" />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/mini-project/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Demo WebPage
          <a href="https://github.com/Sei-cloud/mini-project" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Demo-Webpage.png" alt="Demo Webpage" />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/mini-project/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Demo WebPage
          <a href="https://github.com/Sei-cloud/mini-project" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Demo-Webpage.png" alt="Demo Webpage" />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/mini-project/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Demo WebPage
          <a href="https://github.com/Sei-cloud/mini-project" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Demo-Webpage.png" alt="Demo Webpage" />
      </a>
    </div>
  </section>
);

export default Portfolio;
