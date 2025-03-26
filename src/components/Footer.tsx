import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Globe, Layers } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:andreabcontarini@gmail.com" className="hover:underline">
                andreabcontarini@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:andreabcontarini@martes-ai.com" className="hover:underline">
                andreabcontarini@martes-ai.com
              </a>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/portfolio"
              className="hover:text-blue-500 transition-colors"
            >
              <Layers className="h-6 w-6" />
            </Link>
            <a
              href="https://github.com/AndreaBContarini"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/andreabellicontarini/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.martes-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Andrea Belli Contarini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;