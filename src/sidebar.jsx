import React from 'react';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <button className="sidebar_button" >Home</button>
      <button className="sidebar_button" >About Me</button>
      <button className="sidebar_button" >Projects</button>
      <button className="sidebar_button" >Contact</button>
      <button className="sidebar_button" >Education</button>
    </div>
  );
}

export default Sidebar;