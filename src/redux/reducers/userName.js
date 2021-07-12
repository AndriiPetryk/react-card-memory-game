import { GAME_USER_NAME } from '../../enums/reduxStateKeys';

const initialState = {
  data: 'Default User Name',
};

export default function (state = initialState, action) {
  if (action.type === GAME_USER_NAME) {
    const name = action.payload;
    return { ...state, data: name };
  }
  return state;
}
