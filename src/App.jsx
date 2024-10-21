import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I have a degree in information systems and Data Analytics/Science with a year of professional experience. Skilled in SQL, R, Microsoft Power Platforms, project management, and Azure, I'm passionate about leveraging data for insights.

Throughout my academic journey, I've maintained high grades, reflecting my dedication to excellence and hunger for learning. My coursework has equipped me with a robust set of skills in analytics and data science, which I'm eager to apply in real-world scenarios.

I am currently expanding my technical expertise by exploring full-stack development technologies. This includes browser-based technologies like JavaScript, jQuery, Bootstrap, and React, as well as server-side technologies like Node.js, MERN stack, and other frameworks</p>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <Project
            title="Task Board"
            image="./src/styles/Capture.JPG"
            appLink ="https://tinaika19.github.io/Third-Party-APIs/"
            repoLink="https://github.com/tinaika19/Third-Party-APIs"
          
          />
          {/* Repeat <Project /> for other projects */}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
