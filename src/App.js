import React from 'react';
import './App.css';
import WebProjects from './components/webProjects.js';

function App() {
  return (
    <>
      <div className="heroBanner">
        <img className="heroImage" src="./img/profile-pic.jpg" alt="Pic of Chris"/>

        <h1 className="heroName">Chris Lien</h1>
        <h2 className="heroLocation">Indianapolis, IN, USA</h2>
        <h3 className="heroSkill">Front End Web Developer | Graphic Designer</h3>

        <div className="socialLinksContainer">
          <a href="http://www.github.com/cnlien"><img className='socialLinks githubLogo' src='./img/github.svg' alt='Git Hub Logo'/></a>

          <a href="http://www.linkedin.com/in/cnlien"><img className='socialLinks linkedinLogo' src='./img/linkedin.svg' alt='LinkedIn Logo'/></a>
        </div>

      </div>
  

      <div className="container">
        <WebProjects />
      </div>
    </>

  );
}

export default App;
