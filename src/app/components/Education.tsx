import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import '../styles/Education.css';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Electrical and Electronics Engineering',
      institution: 'Aditya Engineering College',
      year: '2022',
      grade: 'CGPA 7.2',
      location: 'Andhra Pradesh, India',
      type: 'Bachelor\'s Degree'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      year: '2018',
      grade: '75%',
      location: 'Andhra Pradesh, India',
      type: 'Higher Secondary'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'ZPP High School',
      year: '2016',
      grade: 'GPA 8.7',
      location: 'Andhra Pradesh, India',
      type: 'Secondary Education'
    }
  ];

  const languages = ['Telugu', 'English'];

  const personalInfo = {
    dob: '04/05/2000',
    address: 'Navara, East Godavari, Andhra Pradesh',
    relocation: 'Yes'
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Background</h2>
          <p className="section-subtitle">
            Academic foundation and personal information
          </p>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            <h3 className="subsection-title">Educational Journey</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>
                <div className="education-details">
                  <div className="education-header">
                    <h4 className="degree-title">{edu.degree}</h4>
                    <span className="education-type">{edu.type}</span>
                  </div>
                  <h5 className="institution-name">{edu.institution}</h5>
                  <div className="education-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                    <div className="meta-item">
                      <Award size={16} />
                      <span>{edu.grade}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="additional-info">
            <div className="info-card">
              <h3 className="card-title">Languages</h3>
              <div className="languages-list">
                {languages.map((language, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{language}</span>
                    <div className="language-level">
                      <div className="level-indicator fluent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3 className="card-title">Personal Information</h3>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Date of Birth:</span>
                  <span className="info-value">{personalInfo.dob}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Address:</span>
                  <span className="info-value">{personalInfo.address}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Willing to Relocate:</span>
                  <span className="info-value highlight">{personalInfo.relocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;