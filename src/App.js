import React from 'react';
import './styles/App.scss';
import './styles/projects.scss'

import { Route, Switch } from 'react-router-dom';

import { Container } from 'reactstrap';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';

// WEB PROJECT COMPONENTS
import FrenchLickWinery from './components/web-projects/project-components/FrenchLickWinery.js';
import SpirtsOfFrenchLick from './components/web-projects/project-components/SpirtsOfFrenchLick.js';
import NasaPOTD from './components/web-projects/project-components/NasaPOTD.js';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={ HomePage } />

        <Container>
          <Route path='/frenchlickwinery' component={ FrenchLickWinery } />
          <Route path='/spiritsoffrenchlick' component={ SpirtsOfFrenchLick } />
          {/* <Route path='/replate' component={ Replate } /> */}
          <Route path='/nasaphotooftheday' component={ NasaPOTD } />
        </Container>
      </Switch>
    </>

  );
}

export default App;
