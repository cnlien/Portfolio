import React from 'react';
import './App.css';

import { Container } from 'reactstrap'

import WebProjects from './components/web-projects/webProjects.js';
import DesignProjects from './components/design-projects/designProjects.js';

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
  
      <Container>
        <WebProjects />
        <DesignProjects/>
      </Container>
    </>

  );
}

export default App;
