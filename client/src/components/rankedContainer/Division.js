import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

class Division extends Component {
    constructor(props) {
        super();
    }
    render() {
            return(
                <div className="rankStats" id="rankStatDivision">
                    <p>{this.props.rating}</p>
                    <h3>{this.props.rank}</h3>
                </div>
            )
        }
}

function mapStateToProps(state) {
    return { 
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps, null)(Division);