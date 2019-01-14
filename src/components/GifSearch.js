import React, { Component } from 'react';

class Gifsearch extends Component {
    constructor(props){
        super(props)

        this.state = {
            search: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getData(this.state.search)
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a Search Term: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.search} />
                    <button>Find Gifts</button>
                </form>
            </div>
        )
    }
}

export default Gifsearch;
