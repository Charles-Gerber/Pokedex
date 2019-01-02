import React, { Component } from 'react'
import './App.css'
import { pokemon_list } from './assets/pokeList'
import PokeTable from './components/pokeTable'
import NavBar from './components/navBar'
import PokePage from './components/pokePage'
import Pokemon from './model/Pokemon'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    const pokemons = pokemon_list
    pokemons.forEach(pokemon => (pokemon.likes = 0))
    this.state = {
      pokemons: pokemons,
    }
    this.sortPokemons()
    console.log(this.state.pokemons)
  }

  sortPokemons() {
    console.log('sorting pokemons')
    const pokemons = [...this.state.pokemons]
    pokemons.sort((a, b) => {
      if (a.likes < b.likes) {
        return 1
      } else if (a.likes === b.likes) {
        return 0
      } else {
        return -1
      }
    })
    this.setState({ pokemons })
  }

  handleLike = idPokemon => {
    // TODO optimize
    const pokemons = [...this.state.pokemons]
    const pokemonLiked = pokemons.filter(pokemon => pokemon.id === idPokemon)
    pokemonLiked[0].likes++
    console.log(`like on ${pokemonLiked[0].name}`)
    this.setState({ pokemons })
    this.sortPokemons()
  }

  handleDelete = idPokemon => {
    const allPokemons = [...this.state.pokemons]
    const pokemons = allPokemons.filter(pokemon => pokemon.id !== idPokemon)
    this.setState({ pokemons, selectedPokemon: null })
  }

  handleDisplay = async idPokemon => {
    try {
      const [pokemon, pokemonDetail] = await Promise.all([
        axios(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`),
        axios(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`),
      ])
      this.setState({ selectedPokemon: new Pokemon(pokemon, pokemonDetail) })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-sm">
            <PokePage
              pokemon={this.state.selectedPokemon}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
          </div>
          <div className="col-sm">
            <PokeTable
              pokemons={this.state.pokemons}
              onDisplay={this.handleDisplay}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
