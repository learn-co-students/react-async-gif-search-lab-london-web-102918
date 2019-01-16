import React, { Component } from 'react';


export default class GifList extends Component {
  render() {
    return (
      <div className="giflist">
      <ul>
        {
            this.props.gif.map(data =>
            <li><img src={data.images.original.url} /></li>
          )
        }
      </ul>
      </div>
    )
  }
}
