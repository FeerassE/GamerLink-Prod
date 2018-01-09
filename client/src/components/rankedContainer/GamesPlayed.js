import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

class GamesPlayed extends Component {
    constructor(props) {
        super();

    }
    render() {
            return(
                <div className="rankStats" id="rankStatGamesPlayed">
                    <p>{this.props.gamesPlayed}</p>
                    <h3>Games Played</h3>
                </div>
            )
        }
}

function mapStateToProps(state) {
    return { 
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps, null)(GamesPlayed);