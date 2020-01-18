import React from 'react';
import './styles/App.scss';
import './styles/projects.scss'

import { Route, Switch } from 'react-router-dom';

import { Container } from 'reactstrap';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';

// WEB PROJECT COMPONENTS
import FrenchLickWinery from './components/web-projects/project-components/FrenchLickWinery';
import SpirtsOfFrenchLick from './components/web-projects/project-components/SpirtsOfFrenchLick';

function App() {
  return (
    <>
      {/* <div className="heroBanner">
        <img className="heroImage" src="./img/profile-pic.jpg" alt="Pic of Chris"/>

        <h1 className="heroName">Chris Lien</h1>
        <h2 className="heroLocation">Indianapolis, IN, USA</h2>
        <h3 className="heroSkill">Front End Web Developer | Graphic Designer</h3>
        <br/>
        <p>While I work on this portfolio, connect with me.</p>
        <div className="socialLinksContainer">
          <a href="http://www.github.com/cnlien"><img className='socialLinks githubLogo' src='./img/icons/github.svg' alt='Git Hub Logo'/></a>
          <a href="http://www.linkedin.com/in/cnlien"><img className='socialLinks linkedinLogo' src='./img/icons/linkedin.svg' alt='LinkedIn Logo'/></a>
        </div>

      </div>
      
      <Container>
        <WebProjects />
        <DesignProjects/>
      </Container> */}
      <Navigation />
      <Switch>
        <Route exact path="/" component={ HomePage } />

        <Container>
          <Route path='/frenchlickwinery' component={ FrenchLickWinery } />
          <Route path='/spiritsoffrenchlick' component={ SpirtsOfFrenchLick } />

        </Container>
      </Switch>
    </>

  );
}

export default App;
