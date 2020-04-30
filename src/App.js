import React from 'react';
import logo from './jtwc.png';
import './App.css';
import { GrLinkedin } from 'react-icons/gr';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Jake Carter
        </h3>
        <p>
          Marketing Professional
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jtwcarter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin />
        </a>
      </header>
    </div>
  );
}

export default App;
