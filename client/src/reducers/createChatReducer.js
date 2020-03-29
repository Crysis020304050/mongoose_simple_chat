import ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
    chat: null,
    error: null,
    isFetching: false,
};

function createChatReducer( state = initialState, action ) {
    switch ( action.type ) {

        case ACTION_TYPES.CREATE_CHAT_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ACTION_TYPES.CREATE_CHAT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                chat: action.chat
            };
        case ACTION_TYPES.CREATE_CHAT_ERROR:
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };

        default:
            return state;
    }
}

export default createChatReducer;