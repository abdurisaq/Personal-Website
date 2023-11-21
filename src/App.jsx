import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import React, { useState } from 'react';


function App() {
  const [page, setPage] = useState('home');

  const goToAboutMe = () => setPage('aboutMe');
  return (
    <div className="App">
      
      {page === 'home' && <HomePage goToAboutMe={goToAboutMe} />}
      {page === 'aboutMe' && <AboutPage />}
      
      
    </div>
  );
}

export default App; 