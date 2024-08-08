import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './assets/css/app.css'; 

const AboutMe = () => (
  <section id="about-me">
    <img src="./assets/images/profile.png" alt="profile" id="profile" height="80px" width="80px" />
    <p><span>I'm Sei, a web developer</span> I build, design, and create amazing websites.</p>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="my-works">
    <div className="work">
      <a href="https://sei-cloud.github.io/CSS-Snippet/">
        <header>CSS-Snippet</header>
        <img src="./assets/images/CSS-Snippet.png" alt="snippet" />
      </a>
    </div>
    {/* More work items */}
  </section>
);

const Contact = () => (
  <section id="contact">
    <form>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
);

const Resume = () => (
  <section id="resume">
    <a href="./assets/Resume.pdf" download>Download Resume</a>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      {/* Add more proficiencies */}
    </ul>
  </section>
);

const App = () => {
  return (
    <Router>
      <header className="header">
        <h1>Sei.</h1>
        <nav>
          <ul>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <footer>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a>
      </footer>
    </Router>
  );
};

export default App;
