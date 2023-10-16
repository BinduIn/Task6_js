import React from 'react';
import './App.css';
import profileImage from './Screenshot 2023-10-11 124309.jpg'; 

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>My Portfolio</h1>
      </header>
      <main className="App-main">
        <section className="App-section" id="about">
          <h2>About Me</h2>
          <p>I'm Nagadasari Hima Bindu.</p>
          <p>I am a pre-final year student in computer science and engineering with specialization in AI and ML at Vellore Institute of Technology, AP.</p>
          <p> I had completed my schooling at Sri Chaitanya in Kadapa.</p>
          <p> I had completed my intermediate studies at Narayana College in Vijayawada.</p>
        </section>
        <section className="App-section" id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1: <button onClick={() => window.location.href = '#'}>Demo</button></li>
            <p>About leaf disease detection using CNN.</p>
            <li>Project 2: <button onClick={() => window.location.href = '#'}>Demo</button></li>
            <p>About home automation.</p>
          </ul>
        </section>
        <section className="App-section" id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>
        <section className="App-section colorful" id="contact">
          <h2>Contact Me</h2>
          <p>Contact me: <a href="mailto:himabindunagadasari@gmail.com">himabindunagadasari@gmail.com</a></p>
          <p>Phone Number: 7569505276</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
