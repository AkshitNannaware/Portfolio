import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

function Experience() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="technical-skills" className="technical-skills" ref={sectionRef}>
      <div className="container-experience">
        <h2 className={`section-title-experience ${isVisible ? 'animate' : ''}`}>
          Technical Skills
        </h2>
        <p className={`section-subtitle ${isVisible ? 'animate' : ''}`}>
          My expertise across various technologies and tools
        </p>
        
        <div className={`skills-section ${isVisible ? 'animate' : ''}`}>
          {/* Frontend */}
          <div className="skills-category">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-table">
              <div className="skill-row">
                {['HTML/CSS','JavaScript','Tailwind CSS','React.js','Next.js'].map((tech, i) => (
                  <div key={i} className="skill-cell">
                    <div className="skill-item"><span className="skill-name">{tech}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skills-category">
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-table">
              <div className="skill-row">
                {['Node.js','Express.js','Java','MySQL','MongoDB'].map((tech, i) => (
                  <div key={i} className="skill-cell">
                    <div className="skill-item"><span className="skill-name">{tech}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skills-category">
            <h3 className="category-title">Tools & Technologies</h3>
            <div className="skills-table">
              <div className="skill-row">
                {['Git','Firebase','Vercel','Postman(API Testing)'].map((tech, i) => (
                  <div key={i} className="skill-cell">
                    <div className="skill-item"><span className="skill-name">{tech}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`experience-container ${isVisible ? 'animate' : ''}`}>
          <h3>Work Experience</h3>
          
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h4>Full Stack Developer</h4>
                <div className="experience-date">2024 - 2025</div>
              </div>
              <span className="company">Megabyte Solutions</span>
            </div>
            
            <p className="experience-description">
              Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for scalable architecture.
            </p>
            
            <ul className="experience-highlights">
              <li>Reduced application load time by 40% through optimization</li>
              <li>Led a team of 5 developers on major projects</li>
              <li>Streamlined database queries in MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;