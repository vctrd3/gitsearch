import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Alert from './Alert'
import About from './About'
import Home from './Home'
import User from './users/User'
import NotFound from './NotFound'


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
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route component={NotFound} />
          </Switch>
        
        </div>
      </div>
      </BrowserRouter>
    </AlertState>
    </GithubState>
  )
  
}

export default App