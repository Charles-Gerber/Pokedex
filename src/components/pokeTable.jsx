import React, { Component } from 'react'
import PokeLine from './pokeLine'
// import { mockPokeList } from './assets/pokeList.js'

class PokeTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: this.props.mockPokeList,
    }
  }
  render() {
    return (
      <div>
        PokeTable
        {this.state.pokemons.map(pokemon => (
          <PokeLine key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    )
  }
}

export default PokeTable
