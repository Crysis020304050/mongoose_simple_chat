import ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
    chats: [],
    error: null,
    isFetching: false,
};

function loadChatsReducer( state = initialState, action ) {

    switch ( action.type ) {
        case ACTION_TYPES.LOAD_CHATS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ACTION_TYPES.LOAD_CHATS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                chats: action.chats
            };
        case ACTION_TYPES.LOAD_CHATS_ERROR:
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };

        default:
            return state;
    }
}

export default loadChatsReducer;