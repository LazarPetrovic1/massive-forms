import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Nav from './components/Nav'

function App (props) {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
