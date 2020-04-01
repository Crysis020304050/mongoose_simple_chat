import React from 'react';
import {connect} from 'react-redux';
import styles from './MessageListWrapper.module.scss';
import {createJoinToChatRequestAction} from "../../actions";
import MessageList from "../MessageList";
import SendMessageForm from "../forms/SendMessageForm";
import MessagesListWrapperHeader from "../MessagesListWrapperHeader";

const MessagesListWrapper = (props) => {

    const {chats, currentChat, user, joinToChat} = props;

    const checkIfUserInChat = () => {
        const userId = user._id;
        let exist = false;
        if (userId && chats && currentChat) {
            chats.get(currentChat).users.forEach(user => {
                if (user === userId) {
                    exist = true;
                }
            });
        }
        return exist;
    };

    return (
        <div className={styles.container}>
            <MessagesListWrapperHeader className={styles.chatHeader}/>
            <ul className={styles.messagesContainer}>
                {
                    currentChat
                        ? checkIfUserInChat()
                        ? (<MessageList/>)
                        : (<li>
                            <button onClick={() => {
                                joinToChat(currentChat)
                            }}>Join to chat
                            </button>
                        </li>)
                        : (<li>Select chat</li>)
                }
            </ul>
            {
                currentChat && checkIfUserInChat() && <SendMessageForm/>
            }
        </div>
    );
};

const mapStateToProps = state => ({...state.auth, ...state.chats, ...state.chat});

const mapDispatchToProps = dispatch => {
    return {
        joinToChat: (data) => {
            dispatch(createJoinToChatRequestAction(data));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListWrapper);