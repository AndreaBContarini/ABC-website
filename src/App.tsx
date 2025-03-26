import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

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
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className={`py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start justify-between">
              {/* Left side - Profile */}
              <div className="md:w-1/4 text-center mb-8 md:mb-0 flex flex-col items-center">
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
                    href="https://x.com/andreabelli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm flex items-center ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  >
                    <span className="mr-2">🐦</span> Twitter
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

              {/* Middle - Bio */}
              <div className="md:w-2/4 px-4">
                <div className="mb-8">
                  <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    👋🏼 Hey there, I'm Andrea!
                  </h1>
                  <div className="space-y-6">
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      I'm a physicist passionate about Computational Physics and Machine Learning. Currently, I'm pursuing my Master's degree at the University of Geneva, in Switzerland.
                    </p>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      🔬 My research interests lie in Computer Vision, AI-driven automation, and data analysis. My latest projects include Visual Tracking in Spinning Top Simulations and Machine Learning applications in Medical Imaging.
                    </p>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      🛠️ I'm the Co-Founder & Chief AI Solutions Architect at Martes AI, where I develop AI-driven automation tools for business processes. I have experience working with automation platforms like Make, n8n, and Voiceflow.
                    </p>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      📊 Previously, I worked as a Data Analyst intern at SAS Institute, focusing on Customer Intelligence and CRM analytics, and as an Account Manager Assistant at Randstad.
                    </p>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      📚 Beyond work, I enjoy sharing knowledge as a tutor in math and physics, and I'm always eager to explore new AI applications!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Project Image */}
              <div className="md:w-1/4 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Automation Concept"
                  className="rounded-lg shadow-xl w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Selection Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/research-projects" className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-lg p-6 transition-all duration-300`}>
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Research & AI Projects
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Explore my machine learning, computer vision, and AI research projects.
                </p>
              </Link>
              <Link to="/automation-projects" className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-lg p-6 transition-all duration-300`}>
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  AI Automation Solutions
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Discover my AI automation solutions and industrial applications.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;