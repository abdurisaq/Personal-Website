import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Arduino Digital Dice',
      description: 'This was my first Arduino project. It is a digital dice that is capable of displaying any number between 0 and 100. It was used as a master dice to subsitute all traditional dice including the ability to have a rolling animation, and change the color pallete. The code is written in C++ and can be found on my Through the Youtube Link. The code can be found in the Description',
      link: 'https://youtu.be/Wm55BWKkH3o'
    },
    {
      title: 'A Look Into the Future Calendar & Weather Web App',
      description: '"A Look into the Future" is an innovative web application designed to provide users with a comprehensive organizational tool that combines the functionality of a to-do list, calendar, and live weather updates. Powered by the Google Calendar API and OpenWeather API, this platform offers a holistic approach to managing tasks and schedules while staying informed about weather forecasts.',
      link: 'https://github.com/TommyOh0428/Cmpt276-project'
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