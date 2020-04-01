import React, {Component} from "react";
import {chatSocket} from "../../api/ws";
import {connect} from 'react-redux';
import {createLoadChatMessagesRequestAction, createLoadNewMessageRequestAction} from "../../actions";
import Message from "../Message";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MessageList extends Component {

    componentDidMount() {
        const {loadMessages, currentChat, loadNewMessage, user, chats} = this.props;
        chatSocket.emit('join', currentChat);

        chatSocket.on('new_message', (chatId, message) => {
            const {authorId: {login, _id}, body} = message;
            if (user._id !== _id && !toast.isActive(message._id)) {
                const chatName = chats.get(chatId).name;
                const notify = () => {
                    toast(`${login} wrote to ${chatName}: ${body}`, {
                        toastId: message._id
                    });
                };
                notify();
            }

            if (chatId === this.props.currentChat) {
                loadNewMessage(message);
            }
        });

        loadMessages(currentChat);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const {loadMessages, currentChat} = this.props;
        if (prevProps.currentChat !== currentChat) {
            chatSocket.emit('join', currentChat);
            loadMessages(currentChat);
        }
    }

    renderMessages = () => {
        const {chatMessages} = this.props;
        return [...chatMessages.values()].map(message => <Message {...message}/>)
    };

    render() {
        const {isFetching, chatMessages} = this.props;
        return (
            <>
                <ToastContainer/>
                {
                    isFetching && chatMessages.size === 0
                        ? (<li>LOADING...</li>)
                        : this.renderMessages()
                }
            </>
        );
    }
}

const mapStateToProps = state => ({...state.chat, ...state.auth, ...state.chats});

const mapDispatchToProps = (dispatch) => ({
    loadMessages: (chatId) => {
        dispatch(createLoadChatMessagesRequestAction(chatId))
    },
    loadNewMessage: (message) => {
        dispatch(createLoadNewMessageRequestAction(message))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);