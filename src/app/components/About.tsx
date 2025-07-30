import React from 'react';
import { Code, Database, Smartphone, Brain } from 'lucide-react';
import '../styles/About.css';
import profileImage from '../assets/profile.jpg'; // Replace with your image path

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Development',
      description: 'Expert in React, Django, and modern web technologies'
    },
    {
      icon: <Database size={24} />,
      title: 'Blockchain Integration',
      description: 'SUI Network, Move Language, and NFT development'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'React Native applications with real-time features'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI Solutions',
      description: 'OpenAI API integrations and intelligent workflows'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/mine.png" alt="Manikrishna" className="profile-pic" />
          </div>
          <div className="about-text">
            <p className="about-description">
              I'm a dynamic full-stack developer with hands-on experience in building scalable FinTech applications, blockchain integrations, and AI-powered solutions. My journey has been focused on delivering high-quality solutions using cutting-edge technologies like React, Django, and smart contract platforms.

              With a proven ability to lead projects from idea to deployment, I bring a strong focus on performance, UI/UX design, and business logic. My experience at GTPL has allowed me to work on live projects and collaborate cross-functionally on innovative FinTech products.
            </p>
            <button className="more-about-btn">More About</button>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                {highlight.icon}
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;