import React from 'react';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('aboutMe')}>About Me</button>
      <button onClick={() => setPage('projects')}>Projects</button>
      <button onClick={() => setPage('contact')}>Contact</button>
      <button onClick={() => setPage('education')}>Education</button>
    </div>
  );
}

export default Sidebar;