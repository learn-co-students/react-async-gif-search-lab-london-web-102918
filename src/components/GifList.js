import React, { Component } from 'react'

class GifList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.gifs.map(gif => (
          <img key={gif.url} src={gif.url} alt="" />
        ))}
      </div>
    )
  }
}

export default GifList
