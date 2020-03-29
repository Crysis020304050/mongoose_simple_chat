import ACTION_TYPES from './actionTypes.js';

export const createAuthRequestAction = (values) => ( {
  type: ACTION_TYPES.AUTH_REQUEST,
  values,
} );

export const createAuthSuccessAction = (user) => ( {
  type: ACTION_TYPES.AUTH_SUCCESS,
  user,
} );

export const createAuthErrorAction = (error) => ( {
  type: ACTION_TYPES.AUTH_ERROR,
  error,
} );

export const createLoadChatsRequestAction = () => ( {
  type: ACTION_TYPES.LOAD_CHATS_REQUEST,
} );

export const createLoadChatsSuccessAction  = (chats) => ( {
  type: ACTION_TYPES.LOAD_CHATS_SUCCESS,
  chats,
} );

export const createLoadChatsErrorAction = (error) => ( {
  type: ACTION_TYPES.LOAD_CHATS_ERROR,
  error,
} );

export const createSelectChatAction = (chatId) => ( {
  type: ACTION_TYPES.SELECT_CHAT_ACTION,
  chatId,
} );

export const createLoadChatMessagesRequestAction = ( value ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_REQUEST,
  value,
} );

export const createLoadChatMessagesSuccessAction = (chatId, messages) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS,
  chatId,
  messages,
} );

export const createLoadChatMessagesErrorAction = ( error ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_ERROR,
  error
} );

export const createChatCreatingRequestAction = (values) => ( {
  type: ACTION_TYPES.CREATE_CHAT_REQUEST,
  values,
} );

export const createChatCreatingSuccessAction = (chat) => ( {
  type: ACTION_TYPES.CREATE_CHAT_SUCCESS,
  chat,
} );

export const createChatCreatingErrorAction = (error) => ( {
  type: ACTION_TYPES.CREATE_CHAT_ERROR,
  error,
} );
