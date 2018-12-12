import React, { Component } from 'react'
import PokeLine from './pokeLine'

class PokeTable extends Component {
  render() {
    return (
      <div>
        PokeTable
        {this.props.pokemons.map(pokemon => (
          <PokeLine key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    )
  }
}

export default PokeTable
