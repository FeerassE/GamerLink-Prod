import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

class Saves extends Component {
    constructor(props) {
        super();

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        console.log(this.props)
    }

    render() {
        if (_.isEmpty(this.props.currentUser)) {
            return(
                <div className="stats" onClick={this.clickHandler}>
                        <p> 0 </p>
                        <h2>Saves</h2>
                </div>
            )
        }
        else {
            return(
                <div className="stats" onClick={this.clickHandler}>
                        <p>{this.props.currentUser.stats.saves}</p>
                        <h2>Saves</h2>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return { 
        users: state.users,
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps, null)(Saves);