import { combineReducers } from 'redux';

import userName from './userName';
import cards from './cards';
import moves from './moves';

export default combineReducers({
  userName,
  cards,
  moves
});
