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
        <PokeLine />
      </div>
    )
  }
}

export default PokeTable
