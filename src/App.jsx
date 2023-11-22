import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import React, { useState } from 'react';
import ProjectPage from './pages/projects';
import ContactPage from './pages/contact';
import EducationTab from './pages/education';
import Sidebar from './sidebar';

function App() {
  const [page, setPage] = useState('home');

  const goToAboutMe = () => setPage('aboutMe');
  const goToContactMe = () => setPage('contact');
  return (
    <div className="App">
      <Sidebar setPage={setPage} />
      <div className="content">
      {page === 'home' && <HomePage goToAboutMe={goToAboutMe} />}
      {page === 'aboutMe' && <AboutPage goToContactMe={goToContactMe}/>}
      {page === 'projects' && <ProjectPage />}
      {page === 'contact' && <ContactPage />}
      {page === 'education' && <EducationTab />}
      </div>
    </div>
  );
}

export default App; 