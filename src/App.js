import React, { Component } from 'react'
import './App.css'
import { pokemon_list } from './assets/pokeList'
import PokeTable from './components/pokeTable'
import NavBar from './components/navBar'
import PokePage from './components/pokePage'
import Pokemon from './model/Pokemon'
import axios from 'axios'
import Loading from './components/common/loading'
import fetch from 'node-fetch'

class App extends Component {
  state = {
    pokemons: undefined,
    selectedPokemon: undefined,
    loading: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      loading: true,
    }
    fetch(`https://localhost/pokedex-service/v1/pokemons`, {
      method: 'GET',
      // mode: 'no-cors',
      // header: { 'Access-Control-Allow-Origin': '*' },
    })
      .then(response => response.json())
      .then(pokemons => {
        console.log(pokemons)
        this.state = {
          pokemons: pokemons,
          loading: false,
        }
        this.sortPokemons()
        console.log(this.state.pokemons)
      })
    console.log('init finish')
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
      this.setState({ loading: true })
      const selectedPokemonResponse = await axios(
        `https://localhost/pokedex-service/v1/pokemons/${idPokemon}/`
      )
      console.log(
        `pokemonDetail response: ${JSON.stringify(
          selectedPokemonResponse.data
        )}`
      )
      this.setState({ selectedPokemon: selectedPokemonResponse.data })
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ loading: false })
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
            {this.state.loading ? (
              <Loading />
            ) : (
              <PokePage
                pokemon={this.state.selectedPokemon}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
              />
            )}
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
