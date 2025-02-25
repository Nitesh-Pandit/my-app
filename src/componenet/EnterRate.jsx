import React, { Component } from 'react'

export default class EnterRate extends Component {
  render() {
    return (
      <div>
      <input
          type="number"
          placeholder="Enter Rate"
          value={this.props.rate}
          onChange={(e) => this.props.setRate(e.target.value)}
        />
        
      </div>
    )
  }
}
