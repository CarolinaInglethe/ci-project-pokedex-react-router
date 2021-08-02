import React from 'react';
import './App.css';
// import pokemons from './data';
// import Pokedex from './components/Pokedex';
import HomePokedex from './components/HomePokedex'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Link to="/"  className="links-route">home</Link>
      <Link to="/pokemondetails" className="links-route"> More Info </Link>

      <Route  path="/" component={ HomePokedex } />
      
    </BrowserRouter>
  );
}

export default App;