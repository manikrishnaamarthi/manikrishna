import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="header">
      {/* Uncomment this section if you want to restore the navigation */}
      {/* <div className="header-container">
        <div className="logo">
          <span>AM</span>
        </div>
        <nav className="desktop-nav">
          <button className="nav-link">Home</button>
          <button className="nav-link">About</button>
          <button className="nav-link">Projects</button>
          <button className="nav-link" onClick={scrollToContact}>Contact</button>
        </nav>
        <button className="mobile-menu-toggle" onClick={toggleMobileNav}>
          ☰
        </button>
        <nav className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
          <button className="mobile-nav-link">Home</button>
          <button className="mobile-nav-link">About</button>
          <button className="mobile-nav-link">Projects</button>
          <button className="mobile-nav-link" onClick={scrollToContact}>Contact</button>
        </nav>
      </div> */}
      <div className="section__container header__container">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <p>Hello I'm</p>
        <h1>Manikrishna</h1>
        <h2 className="section__title">Full-Stack <span>Developer</span></h2>
        <p className="hero-description">
          Welcome to my developer portfolio! I'm Manikrishna, a skilled and creative
          full-stack developer and team leader with a passion for building scalable FinTech
          applications, blockchain integrations, and AI-powered solutions.
        </p>
        <div className="action__btns">
          <button onClick={scrollToContact} className="btn">
            Say Hello
          </button>
          <a
            href="/Amarthi_Manikrishna_Final_Resume_compressed.pdf"
            download="Amarthi_Manikrishna_Resume.pdf"
            className="btn video"
          >
            <span>Download Resume</span>
            <Download size={24} />
          </a>
        </div>
        <div className="social__icons">
          <a href="https://www.linkedin.com/in/manikrishna-amarthi-001427217/" className="icon" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/manikrishnaamarthi" className="icon" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="mailto:maniamarthi@gmail.com" className="icon" target="_blank" rel="noopener noreferrer">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;