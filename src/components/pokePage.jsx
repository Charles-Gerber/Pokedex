import React, { Component } from 'react'

class PokePage extends Component {
  state = {}

  printTypes() {
    return this.props.pokemon.types.map(type => `${type},`)
  }

  render() {
    if (this.props.pokemon) {
      return (
        <div className="card">
          {this.props.pokemon.id} {this.props.pokemon.name}
          <img src={this.props.pokemon.image} alt="image of the pokemon" />
          {this.printTypes()}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => this.props.onLike(this.props.pokemon.id)}
          >
            Like
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.pokemon.id)}
          >
            Delete
          </button>
        </div>
      )
    } else {
      return null
    }
  }
}

export default PokePage
