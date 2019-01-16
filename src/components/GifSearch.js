import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

export default class GifSearch extends Component {

  handleChange = (e) => {
    this.props.handleSearch(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.handleSubmit()
  }

  render() {
    return (
      <div className="gifsearch">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid
              onChange={this.handleChange}
              label="search" placeholder="search"
              name="search" />
              </Form.Group>
              <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
