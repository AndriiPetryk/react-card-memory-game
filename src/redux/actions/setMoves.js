import { CARD_MOVES } from '../../enums/reduxStateKeys';

const setMoves = params => dispatch =>
  dispatch({
    type: CARD_MOVES,
    payload: params,
  });
;

export default setMoves;
