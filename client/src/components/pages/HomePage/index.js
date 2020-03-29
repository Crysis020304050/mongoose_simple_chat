import React, {useEffect} from 'react';
import {withRouter} from 'react-router';
import './HomePage.module.scss'
import {connect} from "react-redux";
import ChatList from "../../ChatList";
import styles from './HomePage.module.scss';
import {createLoadChatsRequestAction} from '../../../actions';

function HomePage(props) {
    
    const {chats, loadChatList} = props;

    useEffect(() => {
        loadChatList();
    }, []);

    return (
        <div className={styles.container}>
            <ChatList chatList={chats}/>
        </div>
    );
}

const mapStateToProps = state => state.chats;

const mapDispatchToProps = dispatch => ({
    loadChatList: () => {
        dispatch(createLoadChatsRequestAction())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));