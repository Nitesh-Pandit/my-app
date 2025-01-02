import React, { Component } from 'react'

export default class Anmoysous extends Component {
    render() {
      const {abc,xyz}=this.props
    return (
      <div>
        <h2>THis is my name{abc}.And i am form {xyz}.</h2>
      </div>
    )
  }
}
