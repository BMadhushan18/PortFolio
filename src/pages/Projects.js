import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Hotel Management System",
    part: "Booking Management",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/yourname/hotel-management",
    demo: "/project/first"
    // status: "Completed"
  },
  {
    title: "Cooking Skills Sharing Platform",
    part: "Cooking Post Management",
    tech: ["React", "Spring Boot", "MongoDB"],
    github: "https://github.com/yourname/cooking-platform",
    demo: "/project/second"
    // status: "Completed"
  },
  {
    title: "Tea Factory Management System",
    part: "Promotion Management",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/yourname/tea-factory-management",
    demo: "/project/third"
    // status: "Ongoing"
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div 
            className="project-horizontal-card"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* NEW Floating Label */}
            {/* <div className={`status-badge ${project.status.toLowerCase()}`}>
              {project.status}
            </div> */}

            <div className="project-content">
              <div className="project-info">
                <h2>{project.title}</h2>
                <p className="role"><strong>Role:</strong> {project.part}</p>
                <div className="badges-container">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="button-group">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn small-btn primary-btn">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn small-btn secondary-btn">Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
