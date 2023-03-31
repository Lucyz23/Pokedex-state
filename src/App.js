import React from 'react';

import './App.css';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonList: listAll,
      num: 0,
    };
  }

  pokeClick = () => {
    const { pokemonList } = this.state;
    this.setState((ty) => ({
      num: ty.num >= pokemonList.length - 1 ? 0 : ty.num + 1,
    }));
  };

  pokeFilter = ({ target }) => {
    const name = target.innerText;
    this.setState({
      pokemonList: listAll.filter((typ) => typ.type === name),
      num: 0,
    });
  };

  render() {
    const { num } = this.state;
    const { pokemonList } = this.state;
    return (
      <div className="App">
        <Pokedex pokemon={ pokemonList[num] } />
        <button type="button" onClick={ this.pokeClick }> Próximo pokémon</button>
        <button type="button" onClick={ this.pokeFilter }>Fire</button>
        <button type="button" onClick={ this.pokeFilter }>Psychic</button>
      </div>
    );
  }
}

export default App;
