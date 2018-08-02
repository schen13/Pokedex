import { combineReducers } from 'redux';
import entititesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entititesReducer
});

export default rootReducer;
