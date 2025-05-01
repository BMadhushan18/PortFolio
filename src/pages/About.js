import './About.css';
import { motion } from 'framer-motion';

const About = () => (
  <section className="about-section">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, I'm <span className="highlight">[Your Name]</span></h1>
      <p>A Passionate <span className="highlight">UI/UX Designer</span> & Web Developer</p>
      <button className="cta-button">Contact Me</button>
    </motion.div>
  </section>
);

export default About;
