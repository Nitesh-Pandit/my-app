import React, { Component } from 'react'

export default class Duration extends Component {
  render() {
    return (
      <div>
      <input
          type="number"
          placeholder="Enter Total Duration"
          value={this.props.duration}
          onChange={(e) => this.props.setDuration(e.target.value)}
        />
      </div>
    )
  }
}
