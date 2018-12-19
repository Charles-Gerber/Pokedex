import React, { Component } from 'react'

class PokePage extends Component {
  state = {}

  printTypes() {
    console.log(`types to render : ${this.props.pokemon.types}`)

    return this.props.pokemon.types.map(type => `${type},`)
  }

  render() {
    return (
      <div className="card">
        {this.props.pokemon.id} {this.props.pokemon.name}
        <img src={this.props.pokemon.image} alt="image of the pokemon" />
        {this.printTypes()}
      </div>
    )
  }
}

export default PokePage
