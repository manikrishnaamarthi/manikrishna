import React from 'react';
import { ExternalLink, Github, Smartphone, Shield, DollarSign, HandCoins } from 'lucide-react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Regenerative Wellness Booking App',
      description: 'A comprehensive 60-day therapy booking mobile application with intelligent session scheduling and real-time updates.',
      icon: <Smartphone size={24} />,
      technologies: ['React Native', 'Django', 'GCP', 'Real-time Database','React-js', 'Next-js'],
      features: [
        '60-day therapy program management',
        'Smart session scheduling algorithm',
        'Real-time notifications and updates',
        'User progress tracking',
        'Therapist dashboard'
      ],
      status: 'Live on Play Store',
      category: 'Mobile App'
    },
    {
      title: 'Blockchain KYC Platform',
      description: 'Secure identity verification platform leveraging SUI Blockchain technology with advanced authentication systems.',
      icon: <Shield size={24} />,
      technologies: ['React Native', 'Django', 'SUI Blockchain','React-js', 'Next-js', 'Move Language'],
      features: [
        'Decentralized identity verification',
        'JWT authentication system',
        'Fiat-to-NFT minting logic',
        'Secure document storage',
        'Compliance dashboard'
      ],
      status: 'Live on Play Store',
      category: 'Blockchain'
    },
    {
      title: 'Stablecoin Payment Platform',
      description: 'High-performance platform for stablecoin transactions, optimized for speed, scalability, and low transaction costs.',
      icon: <DollarSign size={24} />,
      technologies: ['React', 'Django', 'Blockchain APIs','React-js', 'Next-js'],
      features: [
        'Send/receive stablecoins',
        'Multi-wallet integration',
        'Transaction history',
        'Low-cost processing',
        'Advanced security protocols'
      ],
      status: 'Production Ready',
      category: 'FinTech'
    },
    {
      title: 'P2P Lending Platform',
      description: 'A peer-to-peer lending mobile application connecting borrowers and lenders with secure, transparent transactions.',
      icon: <HandCoins size={24} />,
      technologies: ['React Native', 'Node.js', 'CockroachDB', 'Django','React-js', 'Next-js'],
      features: [
        'Direct borrower-lender matching',
        'Automated credit scoring',
        'Secure loan agreements via smart contracts',
        'Real-time payment tracking',
        'Dispute resolution system'
      ],
      status: 'In Development',
      category: 'FinTech'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Innovative solutions spanning mobile apps, blockchain, and FinTech
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;