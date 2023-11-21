import React from 'react';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <button className="sidebar_button" onClick={() => setPage('home')}>Home</button>
      <button className="sidebar_button" onClick={() => setPage('aboutMe')}>About Me</button>
      <button className="sidebar_button" onClick={() => setPage('projects')}>Projects</button>
      <button className="sidebar_button" onClick={() => setPage('contact')}>Contact</button>
      <button className="sidebar_button" onClick={() => setPage('education')}>Education</button>
    </div>
  );
}

export default Sidebar;