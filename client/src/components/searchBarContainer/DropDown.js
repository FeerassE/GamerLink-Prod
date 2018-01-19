import React, { Component } from 'react';
import { setUser } from '../../actions'

import { connect } from 'react-redux';

class DropDown extends Component{
    constructor(){
        super();

        this.handleClickSelection = this.handleClickSelection.bind(this);
    }


    handleClickSelection(event){
        this.props.setUser(event.target.innerText);
        this.props.handleDropDown();
    }
    render() {

        let users = Object.keys(this.props.users).map((key,i) =>  

        <li key={i} onClick={this.handleClickSelection}>{key}</li>
    )
        return(
            <div className="dropDown">
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users,
        setUser: state.setUser
    }
}


export default connect(mapStateToProps, { setUser })(DropDown);