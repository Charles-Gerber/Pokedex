import React, { Component } from 'react'
import PokeLine from './pokeLine'

class PokeTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Types</th>
            <th scope="col">Likes</th>
            <th scope="col">Display</th>
          </thead>
          <tbody>
            {this.props.pokemons.map(pokemon => (
              <PokeLine
                key={pokemon.id}
                pokemon={pokemon}
                onDisplay={this.props.onDisplay}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PokeTable
