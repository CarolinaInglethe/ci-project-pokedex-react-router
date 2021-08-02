import React from 'react'
import { Link } from 'react-router-dom';

class PokemonDetails extends React.Component {
  render() {
    const { id, moreInfo, name, type, averageWeight, summary, foundAt } = this.props;
    return (
      <div>
        <h1>More Info Pokemon</h1>
        <div>
          <p>Name : {name} </p>
          <p>Type:  {type}</p>
          <p>averageWeight is : {averageWeight.value} {averageWeight.measurementUnit} </p>
          <p>Summary: {summary}</p>
          <p>Found At : {foundAt.map(found => found.location)}</p>
        </div> 
      </div>
    )
  }
}

export default PokemonDetails;