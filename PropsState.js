import React, { Component } from 'react'
import Roling from './Roling';

export default class PropsState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teks: 'Hello world'
        }
    }

    ubahTeks = (translate) => {
        this.setState({
            teks: translate
        })
    }

  render() {
    return (
      <div>

          <h1>{this.state.teks}</h1>
          <button onClick={() => this.ubahTeks("Halo Dunia")}>Translate</button>
          <Roling teks={this.state.teks} ubahTeks={this.ubahTeks}/>
          <hr />
          
        </div>
    )
  }
}
