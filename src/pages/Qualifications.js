import React, { useEffect, useRef } from 'react';
import './Qualifications.css';

const Qualifications = () => {
  const sliitLogoRef = useRef(null);
  const mahanamaLogoRef = useRef(null);

  useEffect(() => {
    // Animation for the logos
    const sliitLogo = sliitLogoRef.current;
    const mahanamaLogo = mahanamaLogoRef.current;

    if (sliitLogo && mahanamaLogo) {
      // Observer for animation on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('logo-animate');
            
            // Add glow effect when in view
            const logoWrapper = entry.target.closest('.logo-wrapper');
            if (logoWrapper) {
              logoWrapper.classList.add('logo-glow');
            }
          }
        });
      }, { threshold: 0.3 });

      observer.observe(sliitLogo);
      observer.observe(mahanamaLogo);

      return () => {
        observer.unobserve(sliitLogo);
        observer.unobserve(mahanamaLogo);
      };
    }
  }, []);

  return (
    <div className="qualifications-horizontal-page">
      <div className="section-header">
        <h5 className="subtitle">BACKGROUND</h5>
        <h2 className="title">My Qualifications</h2>
        <div className="accent-line"></div>
        {/* <p className="description">
          Educational background, professional certifications, and continuous learning journey.
        </p> */}
      </div>

      {/* Education Timeline Section */}
      <div className="timeline-section">
        <h3 className="section-title">Academic Education</h3>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022 - 2026</div>
            <div className="timeline-content">
              <div className="qualification-card horizontal">
                <div className="logo-wrapper">
                  <div className="logo-spinner">
                    <div className="logo-container" ref={sliitLogoRef}>
                      <div className="logo-highlight-effect"></div>
                      <img 
                        src="https://yt3.googleusercontent.com/L0B1dMHxYJ6H7PCp0YCG6GEdnytThdsMTb5HyajBWDwc8oJaKByR_M1F7Cfvccx9ykAerCwBGw=s900-c-k-c0x00ffffff-no-rj" 
                        alt="SLIIT Logo" 
                        className="institution-logo"
                      />
                    </div>
                  </div>
                  <div className="logo-reflection"></div>
                </div>
                <div className="qualification-content">
                  <h4>BSc (Hons) in Information Technology – Information Technology</h4>
                  <p className="qualification-institute">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <ul className="qualification-details">
                    <li>UnderGraduate Student </li>
                    <li>Specialising in Information Technology</li>
                    <li>Currently in the 3rd year</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018 - 2020</div>
            <div className="timeline-content">
              <div className="qualification-card horizontal">
                <div className="logo-wrapper">
                  <div className="logo-spinner">
                    <div className="logo-container" ref={mahanamaLogoRef}>
                      <div className="logo-highlight-effect"></div>
                      <img 
                        src="https://images.seeklogo.com/logo-png/33/2/mahanama-college-logo-png_seeklogo-338649.png" 
                        alt="Mahanama College Logo" 
                        className="institution-logo"
                      />
                    </div>
                  </div>
                  <div className="logo-reflection"></div>
                </div>
                <div className="qualification-content">
                  <h4>Advanced Level</h4>
                  <p className="qualification-institute">Mahanama College</p>
                  <ul className="qualification-details">
                    <li>Combined Mathematics: C</li>
                    <li>Physics: S</li>
                    <li>Chemistry: S</li>
                    <li>General English: C</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Timeline Section */}
      <div className="timeline-section">
        <h3 className="section-title">Professional Certifications</h3>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <div className="qualification-card">
                <h4>Google UX Design Certificate</h4>
                <p className="qualification-institute">Google</p>
                <p className="qualification-description">
                  Professional certification focusing on design thinking, user research, 
                  wireframing, prototyping, and usability testing.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <div className="qualification-card">
                <h4>Certified UI/UX Designer</h4>
                <p className="qualification-institute">ABC Design Institute</p>
                <p className="qualification-description">
                  Comprehensive certification in user interface design, user experience principles, 
                  and interaction design methodologies.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <div className="qualification-card">
                <h4>Adobe Creative Suite Certification</h4>
                <p className="qualification-institute">Adobe</p>
                <p className="qualification-description">
                  Mastery of Adobe's creative applications including Photoshop, Illustrator, 
                  XD, and InDesign for professional design work.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020</div>
            <div className="timeline-content">
              <div className="qualification-card">
                <h4>Front-End Web Developer</h4>
                <p className="qualification-institute">Udacity</p>
                <p className="qualification-description">
                  Nanodegree program covering HTML5, CSS3, JavaScript, React.js, and responsive web design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Skills Section
      <div className="skills-section">
        <h3 className="section-title">Additional Skills</h3>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skills-grid">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">Java</div>
              <div className="skill-item">C#</div>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <div className="skills-grid">
              <div className="skill-item">React</div>
              <div className="skill-item">Angular</div>
              <div className="skill-item">Vue.js</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Express</div>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Design Tools</h4>
            <div className="skills-grid">
              <div className="skill-item">Figma</div>
              <div className="skill-item">Adobe XD</div>
              <div className="skill-item">Photoshop</div>
              <div className="skill-item">Illustrator</div>
              <div className="skill-item">Sketch</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Qualifications;