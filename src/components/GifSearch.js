import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.input)
  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={(event) => this.setState({input: event.target.value})} placeholder="Input search term..."></input>
          <button>Go!</button>
        </form>
      </ React.Fragment>
    )
  }
}

export default GifSearch
