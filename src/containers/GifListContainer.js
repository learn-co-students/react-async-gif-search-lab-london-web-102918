import React, { Component, Fragment } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gifArr: [],
    }
  }

  componentDidMount() {
    this.fetchGifs('dog')
  }

  fetchGifs = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(gifs => {
        this.setState({gifArr: gifs.data.slice(0, 3).map(gif => ({url: gif.images.original.url}))})
      })
  }

  render() {
    return (
    < Fragment >
    < GifSearch fetchGifs={this.fetchGifs} />
    < GifList gifs={this.state.gifArr}/>
    </ Fragment>
    )
  }

}

export default GifListContainer
