import { combineReducers } from 'redux';
import entititesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entititesReducer,
  ui: uiReducer
});

export default rootReducer;
