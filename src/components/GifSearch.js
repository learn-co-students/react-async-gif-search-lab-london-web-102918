import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }
  handleFormSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }
  handleChange = e => {
    e.preventDefault()
    this.setState({ searchTerm: e.target.value })
  }
  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="">Enter Search Term:</label>
          <input onChange={this.handleChange} type="text" />
          <button>Find gifs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
