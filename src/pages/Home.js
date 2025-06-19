import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './Home.css';
import profilePic from '../images/img1.png';
import skillsPic from '../images/img4.jpg';
import projectPic from '../images/img5.jpg';
import qulificationPic from '../images/img7.jpg';
import cvFile from '../doc/CV_Bawantha.pdf';

const Home = () => {
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const portfolioRef = useRef(null);
  const statsRef = useRef(null);

  // Page loading animation
  useEffect(() => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
      if (loader) loader.classList.add('loaded');
      setTimeout(() => {
        setHeroVisible(true);
        if (loader) loader.style.display = 'none';
      }, 1000);
    }, 1500);
  }, []);

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Parallax hero
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const heroParallax = Math.min(scrollPosition * 0.4, heroHeight / 2);
        heroSection.style.backgroundPositionY = `${heroParallax}px`;
      }

      // Portfolio cards
      if (portfolioRef.current) {
        const portfolioTop = portfolioRef.current.getBoundingClientRect().top;
        if (portfolioTop < windowHeight * 0.75) {
          setCardsVisible(true);
        }
      }

      // Stats
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

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.setAttribute('download', 'CV(Bawantha).pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Page Loader */}
      <div className="page-loader">
        <div className="loader-content">
          <div className="loader-spinner" />
          <div className="loader-text">Loading Portfolio</div>
          <div className="loader-progress">
            <div className="loader-progress-bar" />
          </div>
        </div>
      </div>

      <div className="home-page">
        {/* Hero Section */}
        <section className={`hero-section ${heroVisible ? 'visible' : ''}`}>
          <div className="hero-overlay" />
          <div className="hero-particles" />
          <div className="hero-content">
            <div className="profile-container">
              <div className="profile-photo-wrapper">
                <div className="profile-circle circle-1" />
                <div className="profile-circle circle-2" />
                <img className="profile-photo" src={profilePic} alt="Profile" />
                <div className="profile-outline" />
              </div>
            </div>
            <div className="intro-text">
              <div className="text-animation-wrapper">
                <h1>
                  Hello, I&apos;m <span className="highlight">Bawantha Madhushan</span>
                </h1>
              </div>
              <div className="title-wrapper">
                <h2 className="profession">FullStack Web Developer</h2>
                <div className="animated-bar" />
              </div>
              <p className="bio">
                I am a third-year BSc (Hons) Information Technology
student at SLIIT with strong full-stack development
experience. I have built web applications using React,
Node.js (Express), Spring Boot and databases such as
MySQL and MongoDB. I work well in agile teams, write
clean code, and solve problems with attention to detail.
              </p>
              <div className="cta-buttons">
                <button
                  className="primary-btn"
                  onClick={() => navigate('/projects')}
                >
                  <span className="btn-text">View Projects</span>
                  <span className="btn-icon">→</span>
                </button>
                <button
                  className="secondary-btn"
                  onClick={handleDownloadCV}
                >
                  <span className="btn-text">Download the CV</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={portfolioRef} className="portfolio-section">
          <div className="section-heading">
            <h2 className="main-heading">Explore My Work</h2>
            <div className="heading-underline" />
          </div>
          <div className={`card-container ${cardsVisible ? 'cards-visible' : ''}`}>
            <div className="card-wrapper" style={{ animationDelay: '0.1s' }}>
              <Card
                title="Skills"
                image={skillsPic}
                link="/skills"
                iconClass="fa-solid fa-code"
              />
            </div>
            <div className="card-wrapper" style={{ animationDelay: '0.3s' }}>
              <Card
                title="Projects (Group)"
                image={projectPic}
                link="/projects"
                iconClass="fa-solid fa-diagram-project"
              />
            </div>
            <div className="card-wrapper" style={{ animationDelay: '0.5s' }}>
              <Card
                title="Qualifications"
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
                <span className="stat-number">3+</span>
              </div>
              <span className="stat-label">Projects Completed</span>
            </div>
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
