import React from 'react';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <button >Home</button>
      <button >About Me</button>
      <button >Projects</button>
      <button >Contact</button>
      <button >Education</button>
    </div>
  );
}

export default Sidebar;