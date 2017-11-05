import { COUNTER_INC, COUNTER_DEC } from '../actions/counter_actions'

export default function(state = 0, action) {
  switch (action.type) {
    case COUNTER_INC:
      return state + action.payload;
    case COUNTER_DEC:
      return state - action.payload;
  }
  return state;
}
