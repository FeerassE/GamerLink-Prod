import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

class TopPercentile extends Component {
    constructor(props) {
        super();

    }

    render() {
            return(
                <div className="rankStats" id="rankStatTopPercentile">
                    <p>{this.props.topPercentile}%</p>
                    <h3>Top Percentile</h3>
                </div>
            )
        }
}

function mapStateToProps(state) {
    return { 
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps, null)(TopPercentile);