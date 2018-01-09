import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import RankedContainer from './rankedContainer/RankedContainer';

class Rank  extends Component {

    render() {
        if (_.isEmpty(this.props.currentUser)) {
            return(
                <div>
                    <RankedContainer type={'Ranked Duel 1V1'} />
                    <RankedContainer type={'Ranked Doubles 2V2'} />
                    <RankedContainer type={'Ranked Standard 3V3'} />
                </div>
            )
        }
        else {
            let rankingArray = this.props.currentUser.rankings.map((ranking) => {
                    return <RankedContainer key={ranking.type} ranking={ranking}/>
                }
            )
            return (
                <div>
                    {rankingArray}
                </div>
            )
        }
    }
}

function mapStateToProps(state){
 return {
     currentUser: state.currentUser
 }
}

export default connect(mapStateToProps, null)(Rank);