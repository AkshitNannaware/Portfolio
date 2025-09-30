import React, { useState, useEffect, useRef } from "react";
import "./project.css";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "BookNest – Student Room Booking Website",
      description:
        "Built a full-stack room booking platform using React.js for the frontend and Node.js (Express) with MongoDB for the backend. Implemented user authentication with JWT, role-based access for students, owners, and admins, and features like room listing uploads with images, booking management, and user-specific dashboards.",
      category: "fullstack",
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "JWT"],
      image: "/Screenshot 2025-09-26 165113.png",
      liveLink:
        "https://booknest-m6h0qbduf-akshitnannaware.vercel.app",
      githubLink: "https://github.com/AkshitNannaware/BookNest",
    },
    {
      id: 2,
      title: "Country Web – Country Information Website",
      description:
        "Built a responsive website using HTML, CSS JavaScript and ReactJs to display real-time country data via a public API. Included features like search and filter to improve user experience.",
      category: "frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "API Integration",
      ],
      image: "/Screenshot 2025-09-26 165438.png",
      liveLink: "https://country-web-nine.vercel.app",
      githubLink: "https://github.com/AkshitNannaware/Country-Web",
    },
    {
      id: 3,
      title: "Pokémon Explorer – Pokémon Information Website",
      description:
        "Created an interactive website using HTML, CSS, JavaScript and ReactJs to display Pokémon data from a public API. Users can search, view images, types, and stats of various Pokémon in a responsive layout.",
      category: "frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "API Integration",
      ],
      image: "/Screenshot 2025-09-26 170050.png",
      liveLink: "https://pokemon-card-livid.vercel.app",
      githubLink: "https://github.com/AkshitNannaware/Pokemon-Card",
    },
    {
      id: 4,
      title: "Voice2Form – Speech to Form Filling website",
      description:
        "Developed a web application that converts voice input into structured form data. Implemented real-time speech recognition to allow users to fill forms hands-free, improving accessibility and usability. Built with React.js for the frontend and Node.js (Express) with MongoDB for the backend, ensuring seamless voice-to-text processing and data storage.",
      category: "fullstack",
      technologies: [
        "ReactJS",
        "Node.js",
        "Express",
        "MongoDB",
        "SpeechRecognition API",
      ],
      image: "/Screenshot 2025-09-26 170121.png",
      liveLink: "https://voice2form-4p4h.vercel.app",
      githubLink: "https://github.com/AkshitNannaware/Voice2form",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  // 👀 Scroll observer
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container-project">
        <h2
          className={`section-title-project ${isVisible ? "animate" : ""}`}
        >
          My Projects
        </h2>
        <p className={`section-subtitle ${isVisible ? "animate" : ""}`}>
          Here are some of the projects I've worked on
        </p>

        <div className={`filter-buttons ${isVisible ? "animate" : ""}`}>
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={filter === "frontend" ? "active" : ""}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={filter === "fullstack" ? "active" : ""}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
        </div>

        <div
          className={`projects-grid ${isVisible ? "animate" : ""}`}
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
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
}

export default Projects;