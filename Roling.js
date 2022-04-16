import React, { Component } from 'react'

export default class Roling extends Component {
  render() {
    const {teks, ubahTeks} = this.props
    return (
      <div>

          <h1>Roling State menjadi Props = {teks}</h1>
          <button onClick={() => ubahTeks("Halo Dunia")}>Translate</button>
          
    </div>
    )
  }
}
