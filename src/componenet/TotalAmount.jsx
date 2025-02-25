import React, { Component } from 'react'
import EnterIn from './EnterIn'
import EnterRate from './EnterRate'
import Duration from './Duration'

export default class TotalAmount extends Component {
    
  render() {
    return (
      <div>
   <h3>Enter Details</h3>
        <Duration duration={this.props.duration} setDuration={this.props.setDuration} />
        <EnterIn principle={this.props.principle} setPrinciple={this.props.setPrinciple} />
        <EnterRate rate={this.props.rate} setRate={this.props.setRate} />
      </div>
    )
  }
}
