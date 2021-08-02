import React from 'react';
import './pokemon.css';
import { Link, Route } from 'react-router-dom'
import PokemonDetails from './PokemonDetails'

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, moreInfo, id, summary, foundAt} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />

        <Route path="/pokemondetails" render={ (props) =>
          <PokemonDetails 
            {...props} 
            id={id} 
            moreInfo={moreInfo} 
            name={ name }
            type={ type }
            averageWeight={ averageWeight }
            summary={ summary }
            foundAt={ foundAt }
          /> 
        } />
      </div>
    );
  }
}

export default Pokemon;