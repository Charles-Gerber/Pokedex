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
      <div className="container">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-sm">
            <PokePage pokemon={this.state.selectedPokemon} />
          </div>
          <div className="col-sm">
            <PokeTable pokemons={this.state.pokemons} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
