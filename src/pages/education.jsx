import React from 'react';

function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University XYZ',
      year: '2015 - 2019'
    },
    {
      degree: 'Dogwood Diploma',
      school: 'Highschool ABC',
      year: '2019 - 2021'
    }
  ];

  return (
    <div>
      <h1>My Education</h1>
      {educationList.map((education, index) => (
        <div key={index}>
          <h2>{education.degree}</h2>
          <p>{education.school}, {education.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;