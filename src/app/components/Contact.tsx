import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'maniamarthi@gmail.com'
      };

      // Replace with your EmailJS credentials
      const serviceId = 'service_ua75qhi';
      const templateId = 'template_gkuczmq';
      const publicKey = '1u0kFsxB_HqqxxKVO';

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'maniamarthi@gmail.com',
      href: 'mailto:maniamarthi@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 9502728137',
      href: 'tel:+919502728137'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'East Godavari, Andhra Pradesh',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/manikrishna-amarthi-001427217/',
      color: '#0077B5'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/manikrishnaamarthi',
      color: '#333'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      href: 'mailto:maniamarthi@gmail.com',
      color: '#EA4335'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3 className="intro-title">Let's Connect</h3>
              <p className="intro-text">
                I'm always open to discussing new opportunities, innovative projects, 
                or collaborations in FinTech, Blockchain, and AI development.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': link.color } as React.CSSProperties}
                  >
                    {link.icon}
                    <span className="social-label">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    ✓ Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="success-message">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="error-message">
                  Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;