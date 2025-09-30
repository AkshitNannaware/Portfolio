import React, { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookMeeting = () => {
    closeMobileMenu();
    setShowBooking(true);
    setTimeout(() => {
      document.getElementById("book-meeting").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home">
              <span className="logo-text">Akshit</span>
              <span className="logo-dot">.</span>
            </a>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMobileMenu}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience&skills" className="nav-link" onClick={closeMobileMenu}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="https://cal.com/akshit-nannaware" target="_blank" rel="noopener noreferrer" className="nav-link cta-button" onClick={closeMobileMenu}>
                Book Meeting
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Booking Section */}
      {showBooking && (
        <section id="book-meeting" className="booking-section">
          <Cal
            namespace="30min"
            calLink="akshit-nannaware/30min"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </section>
      )}
    </>
  );
}

export default Navbar;