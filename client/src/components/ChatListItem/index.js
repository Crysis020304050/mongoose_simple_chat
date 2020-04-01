import React                      from 'react';
import { connect }                from "react-redux";
import { createSelectChatAction } from "../../actions";
import classNames from 'classnames';

const ListItem = ( props ) => {

    const {
        chatSelector,
        currentChat,
        chatItemClassName,
        selectedChatClass,
        name, id
    } = props;

    const handleClick = ( e ) => {
        if (currentChat !== id) {
            chatSelector( id )
        }
    };

    return (
        <li className={classNames(chatItemClassName, {[selectedChatClass]: currentChat === id})}
            onClick={handleClick}>
            <div>
                {
                    name
                }
            </div>
        </li>
    );
};

const mapDispatchToProps = ( dispatch ) => ( {
    chatSelector: ( id ) => {
        dispatch( createSelectChatAction( id ) )
    }
} );

const mapStateToProps = state => state.chat;

export default connect( mapStateToProps, mapDispatchToProps )( ListItem );