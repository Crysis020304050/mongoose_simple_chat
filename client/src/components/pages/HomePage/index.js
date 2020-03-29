import React, { Component } from 'react';
import { withRouter }       from 'react-router';
import './HomePage.module.scss'

class HomePage extends Component {

    render () {
        return (
            <>
                <h1>Home Page!</h1>

            </>
        );
    }
}

export default withRouter( HomePage );