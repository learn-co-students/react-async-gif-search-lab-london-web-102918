import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


const URL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

export default class GifListContainer extends Component {
  state = {
    gif: [],
    search: ''
  }

  componentDidMount () {
    this.fetchGifs(URL)
  }

  fetchGifs = (url) => {
     fetch(url)
    .then(resp => resp.json())
    .then(result => {
      this.setState ({
        gif: result.data.slice(0,3)
      })
    })
  }

  handleSearch = (search) => {
    this.setState({
      search: search
    })
  }


  querySelector = () => {
    const queryURL = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`

    this.fetchGifs(queryURL)

  }

  render() {
    return (
      <div className="container">
        <GifSearch handleSearch={this.handleSearch} handleSubmit={this.querySelector}/>
        <GifList gif={this.state.gif} />
      </div>
    )
  }
}
