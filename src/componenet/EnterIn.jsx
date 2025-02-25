import React, { Component } from 'react'

export default class EnterIn extends Component {
  render() {
    return (
      <div>
     <input
          type="number"
          placeholder="Enter Principle"
          value={this.props.principle}
          onChange={(e) => this.props.setPrinciple(e.target.value)}
        />
      </div>
    )
  }
}
