import React, { Component } from 'react'

export class Search extends Component {
  state={
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]:e.target.value })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    if(this.state.text === ''){
      this.props.setAlert('Please enter something', 'light')
    } else{
      this.props.searchUsers(this.state.text)
    this.setState({text:''})
    }
  }
  

  render() {
    const {clearUsers, showClear} = this.props
    return (
      <div>
        <form className="form" onSubmit={this.handleOnSubmit}>
          <input type="text" name="text" value={this.state.text} placeholder="Search user"
          onChange={this.handleOnChange}
          />
          <input type="submit" value="search" className="btn btn-dark btn-block" />
        </form>
        {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        {/* <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button> */}
      </div>
    )
  }
}

export default Search
