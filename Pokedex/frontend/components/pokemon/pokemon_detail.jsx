import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    let { name, attack, defense, moves, pokeType, itemIds } = this.props.poke;
    moves = moves || [];
    return (
      <ul>
        <li>Name: { name }</li>
        <li>Attack: { attack }</li>
        <li>Defense: { defense }</li>
        <li>Moves: { moves.join(", ") }</li>
        <li>Type: { pokeType }</li>
        <li>Items: { itemIds }</li>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
      </ul>
    );
  }
}

export default PokemonDetail;
