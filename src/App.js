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
      selectedPokemon: {
        id: 25,
        name: 'pikachu',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['electric'],
        description:
          'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
        weight: 4,
        height: 60,
      },
    }
    console.log(this.state.pokemons)
  }

  render() {
    return (
      <div>
        <NavBar />
        <PokePage pokemon={this.state.selectedPokemon} />
        <PokeTable pokemons={this.state.pokemons} />
      </div>
    )
  }
}

export default App
