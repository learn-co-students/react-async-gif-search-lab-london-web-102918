import React, { Component } from 'react';
import GifList from '../components/GifList'


const URL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

export default class GifListContainer extends Component {
  state = {
    allGifs: [],
    threeGifs: []
  }

  componentDidMount () {
    this.fetchGifs()
  }

  fetchGifs = () => {
     fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState ({
        allGifs: data.data
      })
    })
  }

  getThreeGifs = () => {
      return this.state.allGifs.slice(0, 3)
  }



  render() {
    return (
      <div className="container">
        <GifList threeGifs={this.getThreeGifs} />
      </div>
    )
  }
}
