import React, { Component } from 'react'
import Loading from './common/loading'

class PokePage extends Component {
  state = {}

  printTypes() {
    return this.props.pokemon.types.map(type => `${type},`)
  }

  render() {
    if (this.props.pokemon) {
      return (
        <div className="card">
          <img src={this.props.pokemon.image} alt="The selected pokemon" />
          <h2>
            #{this.props.pokemon.id} {this.props.pokemon.name}
          </h2>
          <h6>Types: {this.printTypes()}</h6>
          <h6>Height: {this.props.pokemon.height}</h6>
          <h6>Weight: {this.props.pokemon.weight}</h6>
          <p>{this.props.pokemon.description}</p>
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
