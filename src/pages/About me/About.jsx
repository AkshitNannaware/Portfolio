import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container-about">
        <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="divider"></div>
            
            <h3 className={`about-subtitle ${isVisible ? 'animate' : ''}`}>My Coding Philosophy</h3>
            
            <div className={`about-points ${isVisible ? 'animate' : ''}`}>
              <div className="point-item">
                <div className="point-icon">-</div>
                <div className="point-content">
                  <h4>From Concept to Deployment</h4>
                  <p>I specialize in transforming abstract ideas into fully-functional digital products that solve real-world problems.</p>
                </div>
              </div>
              
              <div className="point-item">
                <div className="point-icon">-</div>
                <div className="point-content">
                  <h4>Full-Stack Proficiency</h4>
                  <p>With expertise spanning both frontend aesthetics and backend architecture, I build cohesive digital experiences.</p>
                </div>
              </div>
              
              <div className="point-item">
                <div className="point-icon">-</div>
                <div className="point-content">
                  <h4>Curiosity-Driven Development</h4>
                  <p>My journey began with dismantling websites to understand their workings, evolving into a passion for creating them.</p>
                </div>
              </div>
              
              <div className="point-item">
                <div className="point-icon">-</div>
                <div className="point-content">
                  <h4>Universal Accessibility</h4>
                  <p>I'm committed to building applications that provide seamless experiences across all devices and platforms.</p>
                </div>
              </div>
            </div>
            
            <div className={`about-stats ${isVisible ? 'animate' : ''}`}>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Complete</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">FullStack</span>
                <span className="stat-label">Deveploment</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+ Months</span>
                <span className="stat-label">Experience in technology</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">UI/UX</span>
                <span className="stat-label">Responsive Design Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;