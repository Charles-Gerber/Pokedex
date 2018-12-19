import React, { Component } from 'react'
import PokeLine from './pokeLine'

class PokeTable extends Component {
  render() {
    return (
      <div>
        Id Name Types Display
        {this.props.pokemons.map(pokemon => (
          <PokeLine
            key={pokemon.id}
            pokemon={pokemon}
            onDisplay={this.props.onDisplay}
          />
        ))}
      </div>
    )
  }
}

export default PokeTable
