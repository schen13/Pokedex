import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.poke.items;
    default:
      return state;
  }
};

export default itemsReducer;
