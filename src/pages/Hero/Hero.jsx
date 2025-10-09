import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = ["Full-Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      if (currentIndex < roles[currentRoleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + roles[currentRoleIndex][currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseTime);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, currentRoleIndex, roles]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
    });
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      {/* Animated Background with Gradient Mesh */}
      <div className="hero-background">
        <div className="gradient-mesh" style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}></div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
        <div className="noise-overlay"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="grid-pattern"></div>
      
      <div className="container-hero">
        <div className="hero-content">
          {/* Text Content with Staggered Animation */}
          <div className="hero-text">
            <div className="text-reveal">
              <h4 className="hero-greeting">
                Hello, I'm
              </h4>
            </div>
            
            <div className="name-reveal">
              <h1 className="hero-name">
                <span className="name-first">Akshit</span>
                <span className="name-last">Nannaware</span>
              </h1>
            </div>
            
            <div className="title-reveal">
              <h2 className="hero-title">
                I'm a <span className="typing-text">{currentText}</span>
                <span className="cursor">|</span>
              </h2>
            </div>
            
            <div className="description-reveal">
              <p className="hero-description">
                I craft <span className="highlight">seamless digital experiences</span> that blend 
                creativity with cutting-edge technology. Specializing in full-stack development 
                and intuitive design, I transform ideas into impactful digital solutions.
              </p>
            </div>
            
            {/* Enhanced Buttons with Icon */}
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span className="btn-content">
                  <span className="btn-text">View My Work</span>
                  <span className="btn-icon">→</span>
                </span>
                <div className="btn-shine"></div>
              </a>
              <a href="https://drive.google.com/file/d/1573hsYY5Pjqhw8v62nxPJIU6nwU3o1FY/view?usp=drivesdk" 
                 className="btn btn-secondary">
                <span className="btn-content">
                  <span className="btn-text">Download Resume</span>
                  <span className="btn-icon">↓</span>
                </span>
              </a>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="hero-social">
              <a href="https://github.com/AkshitNannaware" target="_blank" rel="noopener noreferrer" 
                 className="social-link" data-tooltip="GitHub">
                <i className="fab fa-github"></i>
                <span className="social-tooltip">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/akshitnannaware" target="_blank" rel="noopener noreferrer" 
                 className="social-link" data-tooltip="LinkedIn">
                <i className="fab fa-linkedin"></i>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a href="mailto:akshitnannaware@gmail.com" className="social-link" data-tooltip="Email">
                <i className="fas fa-envelope"></i>
                <span className="social-tooltip">Email</span>
              </a>
            </div>
          </div>
          
          {/* Enhanced Image Section with 3D Effect */}
          <div className="hero-image">
            <div className="image-container">
              <div className="image-wrapper">
                <img 
                  src="\WhatsApp Image 2025-09-17 at 20.32.39_049c16c0.webp" 
                  alt="Akshit Nannaware"
                  className="profile-img"
                  loading="eager"
                  decoding="async"
                />
                {/* Animated Border Gradient */}
                <div className="image-gradient-border"></div>
                
                {/* Background Glow Effect */}
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;