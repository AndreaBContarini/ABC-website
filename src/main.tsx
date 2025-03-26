import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ResearchProjects from './pages/ResearchProjects.tsx';
import AutomationProjects from './pages/AutomationProjects.tsx';
import Portfolio from './pages/Portfolio.tsx';
import CV from './pages/CV.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/research-projects" element={<ResearchProjects />} />
        <Route path="/automation-projects" element={<AutomationProjects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
