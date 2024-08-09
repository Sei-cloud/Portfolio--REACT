import React from 'react';
import '../assets/css/app.css';
import githubIcon from '../assets/images/github-icon.png'; 

const Portfolio = () => (
    
  <section id="my-works" className="my-works">
        <h1>Portfolio</h1>
    <div className="work">
      <a href="https://home-cook-final-project.onrender.com/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Home-Cook
          <a href="https://github.com/Sei-cloud/Home-Cook--Final-Project" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Home-Cook.png" alt="HomeCook" />
      </a>
    </div>
    <div className="work">
      <a href="https://sam-cowman.github.io/Movie-Search/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Movie-Search
          <a href="https://github.com/Sam-Cowman/Movie-Search" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Movie-Search.png" alt="movieSearch" />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/mini-project/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Task-Board
          <a href="https://github.com/Sei-cloud/Task-Board" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Task-Board.png" alt="Demo Webpage" />
      </a>
    </div>
    <div className="work">
      <a href=" https://sei-cloud.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Weather-Dashboard
          <a href="https://github.com/Sei-cloud/Weather-Dashboard" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Weather-Dashboard.png" alt="Demo Webpage" />
      </a>
    </div>
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
      <a href="https://note-taker-express-js-sei-cloud.onrender.com/" target="_blank" rel="noopener noreferrer">
        <header className="work-header">
          Note-Taker
          <a href="https://github.com/Sei-cloud/Note-Taker---Express.js" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </header>
        <img src="./assets/images/Note-Taker.png" alt="Horiseon" />
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
  </section>
);

export default Portfolio;
