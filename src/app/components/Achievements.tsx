import React from 'react';
import { Award, Smartphone, Cloud, Wrench, Brain, Shield, PenTool } from 'lucide-react';
import '../styles/Achievements.css';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Cloud size={24} />,
      title: 'Docker & GCP Deployment',
      description: 'Successfully hosted 2 live web applications using Docker on Google Cloud Platform',
      category: 'Cloud Infrastructure'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Cross-Platform Mobile Apps',
      description: 'Built and released 2 native mobile applications for Android (Play Store) and iOS (App Store)',
      category: 'Mobile Development'
    },
    {
      icon: <Shield size={24} />,
      title: 'ZK Login Authentication',
      description: 'Implemented secure Zero-Knowledge (ZK) Login and JWT-based authentication systems',
      category: 'Security'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI Workflow Integration',
      description: 'Successfully integrated AI workflows into production applications',
      category: 'Artificial Intelligence'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Reusable Django Systems',
      description: 'Created scalable and maintainable Django backend systems',
      category: 'Backend Development'
    },
    {
      icon: <PenTool size={24} />,
      title: 'UI/UX Design with Figma',
      description: 'Designed intuitive and user-friendly interfaces using Figma for web and mobile applications',
      category: 'UI/UX Design'
    },
    {
      icon: <Award size={24} />,
      title: 'Developer to Product Manager',
      description: 'Transitioned from leading development to managing product lifecycles, driving project success',
      category: 'Career Growth'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Milestones</h2>
          <p className="section-subtitle">
            Key accomplishments and recognition in my development and product management journey
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon-wrapper">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
              </div>
              <div className="achievement-content">
                <span className="achievement-category">{achievement.category}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-card">
            <div className="summary-content">
              <h3 className="summary-title">Professional Highlights</h3>
              <div className="highlights-list">
                <div className="highlight-item">
                  <span className="highlight-number">2</span>
                  <span className="highlight-text">Web apps hosted on GCP</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">2</span>
                  <span className="highlight-text">Native apps on Play Store & App Store</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-text">AI integrations completed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">3</span>
                  <span className="highlight-text">Major Django systems built</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-text">UI/UX designs created in Figma</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">1</span>
                  <span className="highlight-text">Product lifecycle managed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;