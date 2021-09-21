import React from 'react';
import pokemons from '../data'
import Pokedex from './Pokedex'


class HomePokedex extends React.Component {
  render() {
    const logo = 'https://cdn2.vectorstock.com/i/1000x1000/73/91/pokemon-logo-icon-template-vector-23237391.jpg'
    return (
        <div className="App">
        <h1 className="title-pokedex">
          <img src={ logo } alt="bola pokemon" width="25px"/> Pokedex 
        </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    )
  }
}

export default HomePokedex;