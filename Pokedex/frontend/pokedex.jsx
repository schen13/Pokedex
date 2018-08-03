import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

import { requestSinglePokemon } from './actions/pokemon_actions';
import { selectSinglePokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.selectSinglePokemon = selectSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
