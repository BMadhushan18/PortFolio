import { useState, useEffect, useMemo } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState([]);
  
  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'languages', name: 'Languages' },
    { id: 'tools', name: 'Tools' }
  ];
  
  // ✅ Wrap skills array with useMemo and dependency []
  const skills = useMemo(() => [
    { 
      name: 'HTML5', 
      logo: 'https://img.icons8.com/color/200/html-5.png', 
      category: 'frontend',
      proficiency: 70
    },
    { 
      name: 'CSS', 
      logo: 'https://img.icons8.com/color/200/css3.png', 
      category: 'frontend',
      proficiency: 70
    },
    { 
      name: 'JavaScript', 
      logo: 'https://img.icons8.com/color/200/javascript.png', 
      category: 'frontend',
      proficiency: 80
    },
    { 
      name: 'React', 
      logo: 'https://img.icons8.com/color/200/react-native.png', 
      category: 'frontend',
      proficiency: 90
    },
    { 
      name: 'MERN Stack', 
      logo: 'https://img.icons8.com/color/200/mongodb.png', 
      category: 'tools',
      proficiency: 90
    },
    { 
      name: 'Java', 
      logo: 'https://img.icons8.com/color/200/java-coffee-cup-logo.png', 
      category: 'languages',
      proficiency: 80
    },
    { 
      name: 'Spring Boot', 
      logo: 'https://img.icons8.com/color/200/spring-logo.png', 
      category: 'backend',
      proficiency: 70
    },
    { 
      name: 'C++', 
      logo: 'https://img.icons8.com/color/200/c-plus-plus-logo.png', 
      category: 'languages',
      proficiency: 60
    },
    { 
      name: 'C', 
      logo: 'https://img.icons8.com/color/200/c-programming.png', 
      category: 'languages',
      proficiency: 60
    },
    { 
      name: 'Python', 
      logo: 'https://img.icons8.com/color/200/python.png', 
      category: 'languages',
      proficiency: 70
    },
    { 
      name: 'Power BI', 
      logo: 'https://img.icons8.com/color/200/power-bi.png', 
      category: 'tools',
      proficiency: 60
    },
    { 
      name: 'MySQL', 
      logo: 'https://img.icons8.com/color/200/mysql-logo.png', 
      category: 'backend',
      proficiency: 70
    },
    { 
      name: 'PHP', 
      logo: 'https://img.icons8.com/officel/200/php-logo.png', 
      category: 'backend',
      proficiency: 60
    },
    { 
      name: 'Git', 
      logo: 'https://img.icons8.com/color/200/git.png', 
      category: 'tools',
      proficiency: 90
    },
    { 
      name: 'Ai Handling', 
      logo: 'https://www.edigitalagency.com.au/wp-content/uploads/ChatGPT-logo-PNG-medium-size-white-green-background.png', 
      category: 'tools',
      proficiency: 100
    },
  ], []);  // ✅ correct dependency array (empty)

  useEffect(() => {
    const filteredSkills = activeCategory === 'all' 
      ? skills 
      : skills.filter(skill => skill.category === activeCategory);
    
    setAnimatedSkills([]);
    
    const timer = setTimeout(() => {
      setAnimatedSkills(filteredSkills);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeCategory, skills]);  // ✅ correct dependencies

  return (
    <div className="enhanced-skills-container">
      <div className="enhanced-skills-header">
        <h1>Technical Skills</h1>
        <p>My technical toolkit and proficiency levels</p>
      </div>
      
      <div className="enhanced-category-tabs">
        {skillCategories.map(category => (
          <button 
            key={category.id}
            className={activeCategory === category.id ? 'active' : ''}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="enhanced-skills-showcase">
        {animatedSkills.map((skill, index) => (
          <div 
            className="enhanced-skill-card" 
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="enhanced-skill-icon">
              <img src={skill.logo} alt={`${skill.name} logo`} />
            </div>
            <h3>{skill.name}</h3>
            <div className="enhanced-progress-container">
              <div 
                className="enhanced-progress-bar" 
                style={{ width: `${skill.proficiency}%` }}
              >
                <span className="enhanced-progress-value">{skill.proficiency}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
