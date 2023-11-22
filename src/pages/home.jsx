import React from 'react';

function Home({ goToAboutMe }) {
  return (
    <div>
      <a className="github-link" href="https://github.com/abdurisaq" target="_blank" rel="noopener noreferrer">View My Github</a>

      <section>
      <h1>Welcome! my name is Abdurisaq</h1>
      <h2>Abdurisaq Heban</h2>
      </section>
      <section>
        <h2>Computer Science Student</h2>
        <p>Hey! I'm a second-year student at Simon Fraser University, deeply invested in the captivating worlds of game design and machine learning. Juggling frontend and backend development, I'm honing my skills in these domains. Actively seeking co-op opportunities, I'm eager to expand my horizons and dive deeper into the realms of technology, particularly in game design, machine learning, and software development.</p>
      </section>
      <button onClick={goToAboutMe}>About Me</button>

     
    </div>
  );
}

export default Home;