import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import './Home.css';
import profilePic from '../images/img1.png';
import skillsPic from '../images/img4.jpg';
import projectPic from '../images/img5.jpg';
import qulificationPic from '../images/img7.jpg';

const Home = () => {
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const portfolioRef = useRef(null);
  const statsRef = useRef(null);
  
  // Page loading animation
  useEffect(() => {
    const loader = document.querySelector('.page-loader');
    
    // Simulate loading time
    setTimeout(() => {
      if (loader) {
        loader.classList.add('loaded');
      }
      
      setTimeout(() => {
       
        setHeroVisible(true);
        
        // Remove loader from DOM after animation
        if (loader) {
          loader.style.display = 'none';
        }
      }, 1000);
    }, 1500);
  }, []);
  
  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Parallax effect for hero section
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        
        const heroHeight = heroSection.offsetHeight;
        const heroParallax = Math.min(scrollPosition * 0.4, heroHeight / 2);
        heroSection.style.backgroundPositionY = `${heroParallax}px`;
      }
      
      // Check if portfolio section is in view
      if (portfolioRef.current) {
        const portfolioTop = portfolioRef.current.getBoundingClientRect().top;
        if (portfolioTop < windowHeight * 0.75) {
          setCardsVisible(true);
        }
      }
      
      // Check if stats section is in view
      if (statsRef.current) {
        const statsTop = statsRef.current.getBoundingClientRect().top;
        if (statsTop < windowHeight * 0.85) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Page Loader */}
      <div className="page-loader">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <div className="loader-text">Loading Portfolio</div>
          <div className="loader-progress">
            <div className="loader-progress-bar"></div>
          </div>
        </div>
      </div>
      
      <div className="home-page">
        {/* Hero Section */}
        <section className={`hero-section ${heroVisible ? 'visible' : ''}`}>
          <div className="hero-overlay"></div>
          <div className="hero-particles"></div>
          <div className="hero-content">
            <div className="profile-container">
              <div className="profile-photo-wrapper">
                <div className="profile-circle circle-1"></div>
                <div className="profile-circle circle-2"></div>
                <img 
                  className="profile-photo" 
                  src={profilePic}
                  alt="Profile" 
                />
                <div className="profile-outline"></div>
              </div>
            </div>
            <div className="intro-text">
              <div className="text-animation-wrapper">
                <h1>Hello, I'm <span className="highlight">Bawantha Madhushan</span></h1>
              </div>
              <div className="title-wrapper">
                <h2 className="profession">Web Developer</h2>
                <div className="animated-bar"></div>
              </div>
              <p className="bio">
              Hi, I'm Bawantha Madhushan, an undergraduate student at SLIIT Malabe pursuing a BSc (Hons) in Information Technology. I'm passionate about both frontend and backend development, with particular interest in MERN stack, React, Java, and Spring Boot
              </p>
              <div className="cta-buttons">
                <button className="primary-btn">
                  <span className="btn-text">View Projects</span>
                  <span className="btn-icon">→</span>
                </button>
                <button className="secondary-btn">
                  <span className="btn-text">Download the CV</span>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow-container">
              <span className="arrow"></span>
            </div>
          </div> */}
        </section>

        {/* Portfolio Section */}
        <section ref={portfolioRef} className="portfolio-section">
          <div className="section-heading">
            {/* <h3 className="pre-heading">PORTFOLIO</h3> */}
            <h2 className="main-heading">Explore My Work</h2>
            <div className="heading-underline"></div>
            {/* <p className="section-description">Discover my skills, projects, and professional achievements</p> */}
          </div>
          
          <div className={`card-container ${cardsVisible ? 'cards-visible' : ''}`}>
            <div className="card-wrapper" style={{ animationDelay: '0.1s' }}>
              <Card
                title="Skills & Expertise"
                // description="Technical capabilities and creative methodologies that drive my development process."
                image={skillsPic}
                link="/skills"
                iconClass="fa-solid fa-code"
              />
            </div>
            <div className="card-wrapper" style={{ animationDelay: '0.3s' }}>
              <Card
                title="Completed and Ongoing Projects"
                // description="A curated selection of my best work, case studies, and client success stories."
                image={projectPic}
                link="/projects"
                iconClass="fa-solid fa-diagram-project"
              />
            </div>
            <div className="card-wrapper" style={{ animationDelay: '0.5s' }}>
              <Card
                title="Qualifications"
                // description="Educational background, professional certifications, and continuous learning journey."
                image={qulificationPic}
                link="/qualifications"
                iconClass="fa-solid fa-graduation-cap"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="stats-section">
          <div className={`stats-container ${statsVisible ? 'stats-visible' : ''}`}>
            <div className="stat-item" style={{ animationDelay: '0.1s' }}>
              <div className="stat-circle">
                <span className="stat-number">-</span>
              </div>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item" style={{ animationDelay: '0.3s' }}>
              <div className="stat-circle">
                <span className="stat-number">5+</span>
              </div>
              <span className="stat-label">Projects Completed</span>
            </div>
            {/* <div className="stat-item" style={{ animationDelay: '0.5s' }}>
              <div className="stat-circle">
                <span className="stat-number">30+</span>
              </div>
              <span className="stat-label">Happy Clients</span>
            </div> */}
            <div className="stat-item" style={{ animationDelay: '0.7s' }}>
              <div className="stat-circle">
                <span className="stat-number">10+</span>
              </div>
              <span className="stat-label">Programming Languages and frameworks</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
