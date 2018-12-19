import React, { Component } from 'react'

class PokeLine extends Component {
  state = {}

  printTypes() {
    return this.props.pokemon.types.map(type => `${type},`)
  }

  render() {
    return (
      <div>
        {this.props.pokemon.id} {this.props.pokemon.name} {this.printTypes()}{' '}
        {this.props.pokemon.likes}
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.onDisplay(this.props.pokemon.id)}
        >
          display
        </button>
      </div>
    )
  }
}

export default PokeLine
