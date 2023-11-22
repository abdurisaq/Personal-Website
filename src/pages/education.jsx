import React from 'react';
import sfuLogo from '../images/Sfu-logo.png';
import mcmathLogo from '../images/Mcmath-logo.jpg';
function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Simonfraser University',
      year: '2022 - 2026',
      logo: sfuLogo
    },
    {
      degree: 'Dogwood Diploma',
      school: 'Mcmath Secondary School',
      year: '2017 - 2022',
      logo: mcmathLogo
    }
  ];

  return (
    <div>
      <h1>My Education</h1>
      {educationList.map((education, index) => (
        <div key={index}>
          <h2>{education.degree}</h2>
          <p>{education.school}, {education.year}</p>
          <img src={education.logo} alt={`${education.school} logo`} />
        </div>
      ))}
    </div>
  );
}

export default Education;