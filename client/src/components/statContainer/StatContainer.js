import React, { Component } from 'react';

import { connect } from 'react-redux';
import _ from 'lodash';

import Wins from './Wins';
import Saves from './Saves';
import Goals from './Goals';

class StatContainer extends Component {
    constructor(props){
        super();
        this.state = {
            date: {},
        }
    }

    setDateTime() {
        let oneDay = 1000*60*60*24;
        let updateDate = new Date(this.props.currentUser.lastUpdated*1000)
        let nowDate = new Date();

        // milliseconds 
        let updateDate_ms = updateDate.getTime();
        let nowDate_ms = nowDate.getTime();

        let difference_ms = nowDate_ms - updateDate_ms ;
        return Math.round(difference_ms/oneDay);
       
        
    }


    render(){
        return(
            <div className="statContainer">
                {_.isEmpty(this.props.currentUser) ? 
                    <div className="username">
                    </div> :
                    <div className="username"> 
                        <h4>{this.props.currentUser.displayName}</h4>
                        <h5>Last Updated: {this.setDateTime()} days go</h5>
                    </div>
                }
                <Wins />
                <Saves />
                <Goals />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(StatContainer);