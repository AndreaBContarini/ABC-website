import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ResearchProjects from './pages/ResearchProjects';
import AutomationProjects from './pages/AutomationProjects';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Function to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const researchProjects = [
    {
      title: 'Visual Tracking and Collision Recognition',
      description: 'Advanced simulation system for spinning top dynamics using computer vision and ML techniques.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Physics Simulation']
    },
    {
      title: 'Osteoporosis Detection in MRI Scans',
      description: 'Machine learning classification system for early detection of osteoporosis using MRI scan analysis.',
      technologies: ['PyTorch', 'Medical Imaging', 'Deep Learning', 'CNN']
    },
    {
      title: 'Jet Flavor Classification',
      description: 'Deep neural network implementation for particle physics jet classification in high-energy physics.',
      technologies: ['Python', 'Deep Learning', 'Particle Physics', 'Data Analysis']
    }
  ];

  const automationProjects = [
    {
      title: 'Business Process Automation Suite',
      description: 'End-to-end automation solution for streamlining business workflows using modern AI tools.',
      technologies: ['n8n', 'Make', 'Voiceflow', 'API Integration']
    },
    {
      title: 'Document Processing Pipeline',
      description: 'Automated system for processing and analyzing business documents using AI and ML techniques.',
      technologies: ['OCR', 'NLP', 'Workflow Automation', 'Data Extraction']
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            
            <main className="pt-16">
              {/* Hero Section */}
              <section className={`py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Left side - Profile */}
                    <div className="md:w-1/3 text-center mb-8 md:mb-0 flex flex-col items-center">
                      <img
                        src="https://i.ibb.co/LXzJRgsw/andrea.jpg"
                        alt="Andrea Belli Contarini"
                        className="rounded-full w-48 h-48 object-cover shadow-xl mb-4"
                      />
                      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Andrea Belli Contarini
                      </h2>
                      <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Physicist & AI Solutions Architect<br />University of Geneva
                      </p>
                      <div className="flex flex-col items-start space-y-2 mt-2">
                        <a 
                          href="https://www.martes-ai.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-sm flex items-center ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                        >
                          <span className="mr-2">🏢</span> Martes AI
                        </a>

                        <a
                          href="https://www.linkedin.com/in/andreabellicontarini/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm flex items-center ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                        >
                          <span className="mr-2">🔗</span> LinkedIn
                        </a>
                        <a
                          href="https://github.com/AndreaBContarini" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm flex items-center ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                        >
                          <span className="mr-2">🐙</span> Github
                        </a>
                      </div>
                    </div>

                    {/* Right side - Bio */}
                    <div className="md:w-2/3 px-4">
                      <div className="mb-8">
                        <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          👋🏼 Hey there, I'm Andrea!
                        </h1>
                        <div className="space-y-6">
                          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            I'm a <strong>physicist</strong> passionate about Computational Physics and Machine Learning. Currently, I'm pursuing my Physics Master's degree at Sapienza University of Rome and University of Geneva.
                          </p>
                          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            🔬 My research interests lie in <strong>Computer Vision, Machine Learning and AI-driven automations</strong>. My latest projects include Visual Tracking in Spinning Top Simulations and Machine Learning applications in Medical Imaging.
                          </p>
                          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            🛠️ I'm the <strong>Co-Founder of <a href="https://www.martes-ai.com" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}>Martes AI</a></strong>, an AI Automation Agency, where we develop AI-powered solutions for business processes. I have experience with automation platforms such as Make, n8n, and Voiceflow.
                          </p>
                          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            📊 Previously, I worked as a Data Analyst intern at <a href="https://www.sas.com" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}>SAS</a>, focusing on Customer Intelligence and CRM analytics.
                          </p>
                          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            📚 Beyond work, I enjoy sharing knowledge as a tutor in math, physics and computer science, and I'm always eager to explore new AI applications!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Portfolio Selection Section */}
              <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className={`text-3xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Discover my portfolio!
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link to="/research-projects" className={`group ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-lg p-6 transition-all duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 w-1 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-bottom"></div>
                      <div className="relative z-10">
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img 
                            src="/assets/research.png" 
                            alt="Research & AI Projects" 
                            className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          />
                        </div>
                        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:translate-x-2 transition-transform duration-300`}>
                        Research & AI Projects
                      </h2>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:translate-x-2 transition-transform duration-300`}>
                          Explore my machine learning, computer vision, and AI research projects.
                        </p>
                      </div>
                    </Link>
                    <Link to="/automation-projects" className={`group ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-lg p-6 transition-all duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 w-1 bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-bottom"></div>
                      <div className="relative z-10">
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img 
                            src="/assets/automation.png" 
                            alt="AI Automation Solutions" 
                            className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          />
                        </div>
                        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:translate-x-2 transition-transform duration-300`}>
                        AI Automation Solutions
                      </h2>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:translate-x-2 transition-transform duration-300`}>
                          Discover my AI automation solutions and industrial applications.
                      </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </main>

            <Footer isDarkMode={isDarkMode} />
          </div>
        } />
        <Route path="/research-projects" element={<ResearchProjects />} />
        <Route path="/research-projects/:projectSlug" element={<ResearchProjects />} />
        <Route path="/automation-projects" element={<AutomationProjects />} />
        <Route path="/automation-projects/:articleSlug" element={<AutomationProjects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Fall back route for 404 pages */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Pagina non trovata</h1>
            <p className="text-lg mb-8">La pagina che stai cercando non esiste.</p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Torna alla home
            </Link>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;