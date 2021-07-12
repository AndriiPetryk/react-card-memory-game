import { CARD_MOVES } from '../../enums/reduxStateKeys';

const initialState = {
  data: 0,
};

export default function (state = initialState, action) {
  if (action.type === CARD_MOVES) {
    const moves = action.payload;
    return {...state, data: moves };
  }
  return state;
}
