import React from 'react';

function Home({ goToAboutMe }) {
  return (
    <div>
      <section>
      <h1>Welcome! my name is Abdurisaq</h1>
      <h2>Abdurisaq Heban</h2>
      </section>
      <section>
        <h2>Computer Science Student</h2>
        <p>bio</p>
      </section>
      <button onClick={goToAboutMe}>About Me</button>
    </div>
  );
}

export default Home;