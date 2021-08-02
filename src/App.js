import React from 'react';
import './App.css';
// import pokemons from './data';
// import Pokedex from './components/Pokedex';
import HomePokedex from './components/HomePokedex'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ HomePokedex } />
    </BrowserRouter>
  );
}

export default App;