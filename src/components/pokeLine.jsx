import React, { Component } from 'react'

class PokeLine extends Component {
  state = {}

  printTypes() {
    console.log(`types to render : ${this.props.pokemon.types}`)

    return this.props.pokemon.types.map(type => `${type},`)
  }

  render() {
    return (
      <div>
        {this.props.pokemon.id} {this.props.pokemon.name} {this.printTypes()}
      </div>
    )
  }
}

export default PokeLine
