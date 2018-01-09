import React, { Component } from 'react';

import { connect } from 'react-redux';
import _ from 'lodash';

import GamesPlayed from './GamesPlayed';
import Division from './Division';
import TopPercentile from './TopPercentile';

class RankedContainer extends Component {
    render(){
        if (_.isEmpty(this.props.currentUser)) {
            return(
                <div className="rankStatsContainer">
                    <h1>{this.props.type}</h1>
                    <GamesPlayed gamesPlayed={0}/>
                    <TopPercentile topPercentile={0}/>
                    <Division rating={0} rank={'none'}/>
                </div>
            )
        }
        else {
            return(
                <div className="rankStatsContainer">
                    <h1>{this.props.ranking.type}</h1>
                    <GamesPlayed gamesPlayed={this.props.ranking.gamesPlayed}/>
                    <TopPercentile topPercentile={this.props.ranking.topPercentile}/>
                    <Division rating={this.props.ranking.rating} rank={this.props.ranking.rank}/>
                    <img src={`./images/ranks/${this.props.ranking.rankImage}.png`} />
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return { 
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(RankedContainer);