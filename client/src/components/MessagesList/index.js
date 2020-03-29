import React from 'react';
import {connect} from 'react-redux';
import styles from './MessageList.module.scss';
import {ID_KEY} from "../../constants";

const MessagesList = (props) => {

    const {chats, currentChat} = props;

    const loadChatMessages = () => {
      let messages = [];
      chats.forEach(chat => {
        if (chat._id === currentChat) {
          messages = chat.messages;
        }
      });
      return messages;
    };

    const renderMessages = messages => {
      messages.map(message => <li>{message}</li>)
    };

    const checkIfUserInChat = () => {
        const userId = sessionStorage.getItem(ID_KEY);
        let exist = false;
        if (userId && chats && currentChat) {
            chats.forEach(chat => {
                if (chat._id === currentChat) {
                    chat.users.forEach(user => {
                        if (user === userId) {
                            exist = true;
                        }
                    })
                }
            });
        }
        return exist;
    };

    return (
        <ul className={styles.container}>
            {
                currentChat
                    ? checkIfUserInChat()
                    ? (<li>{renderMessages(loadChatMessages())}</li>)
                    : (<li>Join</li>)
                    : (<li>Select chat</li>)
            }

        </ul>
    );
};

const mapStateToProps = state => state.chats;

export default connect(mapStateToProps)(MessagesList);