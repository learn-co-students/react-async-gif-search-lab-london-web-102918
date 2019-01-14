import React from 'react';

const GifList = (props) => {
    return (
        <div>
            {props.gifs.map(gif => (<img src={gif} />))}
        </div>
    )
}

export default GifList;