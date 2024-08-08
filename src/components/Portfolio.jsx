import React from 'react';

const Portfolio = () => (
  <section id="my-works" className="my-works">
    <div className="work">
      <a href="https://sei-cloud.github.io/CSS-Snippet/">
        <header>CSS-Snippet</header>
        <img src="./assets/images/CSS-Snippet.png" alt="CSS Snippet" />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/Horiseon-Home/">
        <header>Horiseon-WebPage</header>
        <img
          src="./assets/images/digital-marketing-meeting.jpg"
          alt="Horiseon"
        />
      </a>
    </div>
    <div className="work">
      <a href="https://sei-cloud.github.io/mini-project/">
        <header>Demo WebPage</header>
        <img src="./assets/images/Demo-Webpage.png" alt="Demo Webpage" />
      </a>
    </div>
  </section>
);

export default Portfolio;
