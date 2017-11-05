import { combineReducers } from 'redux';
import CounterReducer from './counter_reducer';

const rootReducer = combineReducers({
  counter: CounterReducer
});

export default rootReducer;
