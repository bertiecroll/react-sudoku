import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

import { AppHeader, AppFooter } from 'containers/App'
import Puzzle from 'components/Puzzle'
import Menu from 'components/Menu'

export function App () {
  return (
      <Router>
        <div className="App">
          <AppHeader />
          <div className="AppContent">
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route path="/puzzle/:difficultyLevel(test|easy|medium|hard)" component={Puzzle} />
              <Route render={() => <h1>Page Not Found</h1>} />
            </Switch>
          </div>
          <AppFooter />
        </div>
      </Router>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)
