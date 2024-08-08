import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./assets/css/app.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header"; 
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
