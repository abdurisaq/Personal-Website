import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import React, { useState } from 'react';
import ProjectPage from './pages/projects';
import ContactPage from './pages/contact';
import EducationTab from './pages/education';


function App() {
  const [page, setPage] = useState('home');

  const goToAboutMe = () => setPage('aboutMe');
  return (
    <div className="App">
      <Sidebar setPage={setPage} />
      <div className="content">
      {page === 'home' && <HomePage goToAboutMe={goToAboutMe} />}
      {page === 'aboutMe' && <AboutPage />}
      {page === 'projects' && <ProjectPage />}
      {page === 'contact' && <ContactPage />}
      {page === 'education' && <EducationTab />}
      </div>
    </div>
  );
}

export default App; 
