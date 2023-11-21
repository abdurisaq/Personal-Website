import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      link: 'http://example.com/project1'
    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      link: 'http://example.com/project2'
    }
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div className="projects-container">
      {projectList.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link}>Link to Project</a>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Projects;