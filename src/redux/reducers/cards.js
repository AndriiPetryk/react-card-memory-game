import { GAME_CARDS } from '../../enums/reduxStateKeys';
import { shuffleCards } from '../../utils/utils'

const initialState = {
  data: shuffleCards(),
};

export default function (state = initialState, action) {
  if (action.type === GAME_CARDS) {
    return { ...state, ...action.payload };
  }
  return state;
}
