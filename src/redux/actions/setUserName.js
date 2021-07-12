import { GAME_USER_NAME } from '../../enums/reduxStateKeys';

const setUserName = params => dispatch => {
  dispatch({
    type: GAME_USER_NAME,
    payload: params,
  });
};

export default setUserName;
