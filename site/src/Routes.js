import React from 'react'

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import App from './components/App'

import Home from './pages/Home'
import NuclearTestSite from './pages/NuclearTestSite'
import NotFound from './pages/NotFound'


const Routes = () =>
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nuclear" component={NuclearTestSite} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>

export default Routes
