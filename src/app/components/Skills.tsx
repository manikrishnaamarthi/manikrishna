import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'React Native', level: 80 },
        { name: 'JavaScript/TypeScript', level: 88 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Django', level: 92 },
        { name: 'Django REST Framework', level: 90 },
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 88 }
      ]
    },
    {
      title: 'Blockchain',
      skills: [
        { name: 'SUI Network', level: 85 },
        { name: 'Move Language', level: 80 },
        { name: 'NFT Minting', level: 82 },
        { name: 'Smart Contracts', level: 78 }
      ]
    },
    {
      title: 'AI & Database',
      skills: [
        { name: 'OpenAI API', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'Firebase', level: 90 },
        { name: 'CockroachDB', level: 75 }
      ]
    }
  ];

  const tools = [
    'Git', 'Docker', 'Vercel', 'GCP', 'Firebase Hosting', 
    'CI/CD', 'Postman', 'JWT', 'RESTful APIs'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-tag">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;