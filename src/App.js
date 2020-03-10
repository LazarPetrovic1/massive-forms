// React
import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App (props) {
  useEffect(() => {
    store.dispatch(loadUser())
    // eslint-disable-next-line
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
