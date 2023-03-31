import PropTypes from 'prop-types';
import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }

  pokeClick = () => {
    const { pokemonList } = this.props;
    this.setState((ty) => ({
      num: ty.num >= pokemonList.length - 1 ? 0 : ty.num + 1,
    }));
  };

  zeroNum = () => {
    this.setState(() => ({ num: 0 }));
  };

  render() {
    const { pokemonList } = this.props;
    const { num } = this.state;
    const size = pokemonList.length - 1;
    if (size < num) {
      this.retorneNum();
    }
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          {
            pokemonList.map((pokemon) => (
              <Pokemon key={ pokemon.id } pokemon={ pokemon } />
            ))[0]
          }
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default Pokedex;
