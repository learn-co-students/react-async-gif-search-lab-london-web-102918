import React, { Component } from 'react';
import { resolve } from 'url'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs: [],

        }
    }



    componentDidMount() {
        this.getData()
    }

    getData = (search) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resolve => resolve.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data.slice(0, 3).map(gif => {
                    return gif.images.original.url
                })
            })
        })
    }

    render() {
        return (
            <div>
                <GifSearch gif={this.state.gifs} getData={this.getData} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;