import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';

const entititesReducer = combineReducers({
  pokemon: pokemonReducer
});

export default entititesReducer;
