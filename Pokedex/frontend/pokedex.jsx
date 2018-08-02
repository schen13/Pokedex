import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hi</h1>, root);
});
