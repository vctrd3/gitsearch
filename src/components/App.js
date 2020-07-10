import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Alert from './Alert'
import About from './About'
import Users from './users/Users'
import User from './users/User'
import Search from './users/Search'
import axios from 'axios'
import '../App.css'

class App extends React.Component {
  state={
    users:[],
    loading: false,
    alert: null,
    user:{},
    repos:[]
  }

  // async componentDidMount(){
  //   this.setState({loading: true});
  //   const res = await axios
  //   .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users: res.data, loading: false})
  //   //console.log(res.data)
  // }

  searchUsers = async (user) => {
    this.setState({loading: true});
    const res = await axios
    .get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: res.data.items, loading: false})
    //console.log(res.data)
  }

  getUser = async (username) => {
    this.setState({loading: true});
    const res = await axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({user: res.data, loading: false})
  }

  getUserRepos = async (username) => {
    this.setState({loading: true});
    const res = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({repos: res.data, loading: false})
  }

  clearUsers = () => {
    this.setState({users:[], loading: false})
  }

  setAlert = (msg, type) => {
    this.setState({alert:{ msg, type }})

    setTimeout(() => this.setState({alert: null}), 3000)
  }

  render(){
    const { user, users, loading, repos } = this.state
  return(
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <Search 
              searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers} 
              showClear={this.state.users.length > 0 ? true : false}
              setAlert={this.setAlert}
              />
              <Users loading={loading} users={users} />
            </Fragment>
          )} />
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' render={props => (
            <User {...props} getUser={this.getUser} user={user} loading={loading} 
            getUserRepos={this.getUserRepos} repos={repos}/>
          )} />
        </Switch>
       
      </div>
    </div>
    </BrowserRouter>
  )
  }
}

export default App