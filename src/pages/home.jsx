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
        <p>bio</p>
      </section>
      <button onClick={goToAboutMe}>About Me</button>
     <div>Image of me Here</div>
    </div>
  );
}

export default Home;