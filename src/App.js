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

// DESIGN PROJECT COMPONENTS
import Logos from './components/design-projects/project-components/Logos';

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

          {/* DESIGN ROUTES */}
          <Route path='/logos' component={ Logos } />

        </Container>
      </Switch>
    </>

  );
}

export default App;
