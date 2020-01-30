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
import Replate from './components/web-projects/project-components/Replate';
import PotluckPlanner from './components/web-projects/project-components/PotluckPlanner';
import FishFriends from './components/web-projects/project-components/FishFriends';
import CryptoTracker from './components/web-projects/project-components/CryptoTracker';
import ToDoList from './components/web-projects/project-components/ToDoList';
import BodyEnergyFitness from './components/web-projects/project-components/BodyEnergyFitness';

// DESIGN PROJECT COMPONENTS
import Logos from './components/design-projects/project-components/Logos';
import VideoProduction from './components/design-projects/project-components/VideoProduction';
import Marketing from './components/design-projects/project-components/Marketing';

// GOOGLE ANALYTICS -- YARN ADD REACT-GA
import ReactGA from 'react-ga';
ReactGA.initialize('UA-157363760-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={ HomePage } />

        <Container>
          {/* WEB ROUTES */}
          <Route path='/frenchlickwinery' component={ FrenchLickWinery } />
          <Route path='/spiritsoffrenchlick' component={ SpirtsOfFrenchLick } />
          <Route path='/replate' component={ Replate } />
          <Route path='/nasaphotooftheday' component={ NasaPOTD } />
          <Route path='/potluckplanner' component={ PotluckPlanner } />
          <Route path='/fishfriends' component={ FishFriends } />
          <Route path='/cryptotracker' component={ CryptoTracker } />
          <Route path='/todolist' component={ ToDoList } />
          <Route path='/bodyenergyfitness' component={ BodyEnergyFitness } />

          {/* DESIGN ROUTES */}
          <Route path='/logos' component={ Logos } />
          <Route path='/video' component={ VideoProduction } />
          <Route path='/marketing' component= { Marketing } />

        </Container>
      </Switch>
    </>

  );
}

export default App;
