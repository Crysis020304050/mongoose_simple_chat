import React       from 'react';
import styles      from './ChatList.module.scss'
import ListItem    from "../ChatListItem";
import { connect } from "react-redux";
import CreateChatForm from "../forms/CreateChatForm";

const ChatList = ( props ) => {

    const { chats, isFetching, error } = props;

    return (
        <div className={styles.container}>
            <ul>
                {
                    isFetching
                        ? ( <li>LOADING...</li> )
                        : chats.map( ( chat ) => ( <ListItem key={chat._id}
                                                            name={chat.name}
                                                            id={chat._id}
                                                            chatItemClassName={styles.itemContainer}
                                                             selectedChatClass={styles.selectedChat}
                        /> ) )
                }
            </ul>
            <CreateChatForm/>
        </div>
    );
};

const mapStateToProps = state => state.chats;

export default connect(mapStateToProps)(ChatList);