import ACTION_TYPES from '../actions/actionTypes.js';
import _ from 'lodash';

const initialState = {
  currentChat: null,
};

function chatReducer (state = initialState, action) {

  switch (action.type) {

    case ACTION_TYPES.SELECT_CHAT_ACTION:
      return {
        ...state,
        currentChat: action.chatId,
      };

    default:
      return state;
  }

}

export default chatReducer;