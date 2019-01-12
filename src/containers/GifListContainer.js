import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const URL =
  'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
    }
  }

  fetchGifs = (query = 'dolphins') => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map(gif => ({ url: gif.images.original.url })),
        })
      })
  }

  componentDidMount() {
    this.fetchGifs()
  }
  render() {
    return (
      <div>
        <GifSearch gif={this.state.gifs} fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs.slice(0, 3)} />
      </div>
    )
  }
}

export default GifListContainer
