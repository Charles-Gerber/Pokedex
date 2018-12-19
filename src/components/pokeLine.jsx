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
      </div>
    )
  }
}

export default PokeLine
