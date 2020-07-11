import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Alert from './Alert'
import About from './About'
import Users from './users/Users'
import User from './users/User'
import Search from './users/Search'

import GithubState from '../context/github/GithubState'
import AlertState from '../context/alert/AlertState'
import '../App.css'

const App = () => {
  

  
  return(
    <GithubState>
      <AlertState>
      <BrowserRouter>
      <div className="App">
        
        <Navbar />
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search />
                <Users />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
          </Switch>
        
        </div>
      </div>
      </BrowserRouter>
    </AlertState>
    </GithubState>
  )
  
}

export default App