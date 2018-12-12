import React, { Component } from 'react'
import './App.css'
import { pokemon_list } from './assets/pokeList'
import PokeTable from './components/pokeTable'
import NavBar from './components/navBar'
import PokePage from './components/pokePage'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PokePage />
        <PokeTable mockPokeList={pokemon_list} />
      </div>
    )
  }
}

export default App
