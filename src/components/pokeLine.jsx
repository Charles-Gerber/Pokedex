import React, { Component } from 'react'

class PokeLine extends Component {
  state = {}

  printTypes() {
    return this.props.pokemon.types.map(type => `${type},`)
  }

  render() {
    return (
      <tr>
        <td>{this.props.pokemon.id} </td>
        <td> {this.props.pokemon.name}</td>
        <td>{this.printTypes()}</td>
        <td>{this.props.pokemon.likes}</td>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => this.props.onDisplay(this.props.pokemon.id)}
          >
            display
          </button>
        </td>
      </tr>
    )
  }
}

export default PokeLine
