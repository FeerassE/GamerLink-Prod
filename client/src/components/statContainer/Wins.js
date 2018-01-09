import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions'
import { setUser } from '../../actions';

import _ from 'lodash';

class Wins extends Component {
    constructor(props) {
        super();

        this.clickHandler = this.clickHandler.bind(this)
    }
    componentWillMount() {
        this.props.fetchUsers();
    }
    
    componentDidMount() {
        console.log(this.props)
    }

    clickHandler(){
        console.log(this.props)
    }

    render() {
        if (_.isEmpty(this.props.currentUser)) {
            return(
                <div className="stats" onClick={this.clickHandler}>
                        <p> 0 </p>
                        <h2>Wins</h2>
                </div>
            )
        }

        else {
            return(
                <div className="stats" onClick={this.clickHandler}>
                        <p>{this.props.currentUser.stats.wins}</p>
                        <h2>Wins</h2>
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


export default connect(mapStateToProps, { fetchUsers })(Wins);
