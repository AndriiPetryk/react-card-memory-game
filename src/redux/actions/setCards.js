import { GAME_CARDS } from '../../enums/reduxStateKeys';

const setCards = params => dispatch => {
  dispatch({
    type: GAME_CARDS,
    payload: params,
  });
};

export default setCards;
