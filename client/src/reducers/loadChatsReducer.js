import ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
    chats: [],
    error: null,
    isFetching: false,
    currentChat: null,
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
        case ACTION_TYPES.CREATE_CHAT_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ACTION_TYPES.CREATE_CHAT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                chats: [...state.chats, action.chat]
            };
        case ACTION_TYPES.CREATE_CHAT_ERROR:
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };
        case ACTION_TYPES.SELECT_CHAT_ACTION:
            return {
                ...state,
                currentChat: action.chatId,
            };

        default:
            return state;
    }
}

export default loadChatsReducer;