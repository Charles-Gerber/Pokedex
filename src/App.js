import React, { Component } from 'react'
import './App.css'
import { pokemon_list } from './assets/pokeList'
import PokeTable from './components/pokeTable'
import NavBar from './components/navBar'
import PokePage from './components/pokePage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: pokemon_list,
    }
    console.log(this.state.pokemons)
  }

  render() {
    return (
      <div>
        <NavBar />
        <PokePage />
        <PokeTable pokemons={this.state.pokemons} />
      </div>
    )
  }
}

export default App
