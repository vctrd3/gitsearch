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
    this.props.searchUsers(this.state.text)
    this.setState({text:''})
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleOnSubmit}>
          <input type="text" name="text" value={this.state.text} placeholder="Search user"
          onChange={this.handleOnChange}
          />
          <input type="submit" value="search" className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
}

export default Search
