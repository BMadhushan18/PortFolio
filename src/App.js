import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Qualifications from './pages/Qualifications';
import FirstProject from './pages/FirstProject';        // import
import SecondProject from './pages/SecondProject';      // import
import ThirdProject from './pages/ThirdProject';        // import
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/qualifications" element={<Qualifications />} />
        
          {/* New Project Detail Pages */}
        <Route path="/project/first" element={<FirstProject />} />
        <Route path="/project/second" element={<SecondProject />} />
        <Route path="/project/third" element={<ThirdProject />} />
      
      
      </Routes>
    </Router>
  );
}

export default App;
