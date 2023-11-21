import React from 'react';

function AboutMe({ goToContactMe }) {
  return (
    <div>
      <h1>About Me</h1>
      <p>Hey there! I'm a second-year student at Simon Fraser University, deeply passionate about the fascinating realms of game design and machine learning. While still navigating the intricate paths of both frontend and backend development, I hold a burgeoning understanding in these areas.</p>
      <h2>Competitive Gaming</h2>
      <p>I play competitively and proudly hold a spot among the top 100 Canadian players in Rocket League, channeling my dedication and skills into this exhilarating game.</p>
      <h2>Seeking Opportunities for Growth</h2>
      <p>I'm actively seeking co-op opportunities to enrich my skill set and broaden my horizons in the diverse landscape of technology. Eager to embrace challenges and delve deeper into the world of game design, machine learning, and software development.</p>
      <h2>Languages & Frameworks</h2>
      <h3>Proficient:</h3>
      <div className="language-list">
        <span>C++</span>
        <span>C</span>
        <span>Arduino</span>
        <span>Javascript</span>
        <span>Git/Github</span>
      </div>
      <h3>Learning:</h3>
      <div className="language-list">
        <span>Python</span>
        <span>SQL</span>
        <span>React</span>
        <span>Machine Learning</span>
      </div>
      <h2>Get in Touch</h2>
      <p>Feel free to reach out for anything through my contact page. Let's connect and explore the endless possibilities together!</p>
      <button onClick={goToContactMe}>Contact Me</button>
    </div>
  );
}

export default AboutMe;