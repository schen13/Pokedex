import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';
import { selectSinglePokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  poke: selectSinglePokemon(state, ownProps.match.params.pokemonId)
});

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
