import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setUser } from '../actions'

import { Redirect, withRouter } from 'react-router-dom'


class SearchBar extends Component {
    constructor(props) {
        super();

        this.state = {
            value: 'Look up user',
            redirect: false,
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
      }

    onChangeHandler(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        if((this.props.users[this.state.value] == undefined)){
            console.log('User not found');
            this.setState({redirect: true});
        }
        else {
            this.setState({redirect:false});
            this.props.setUser(this.state.value)
        }
        
        this.setState({value: ''})
    }
    
    clickHandler(){
        this.setState({value: ''})
    }

    render() {
        return(
            <div>
                {this.state.redirect ? <Redirect to="/notfound"/> : <Redirect to="/"/>}
                <form onSubmit={this.handleSubmit} className="searchForm">
                    <img src="./images/icons/search.png" className="searchIcon" onClick={this.handleSubmit}/>
                    <input 
                        className='searchBar' 
                        value={this.state.value} 
                        onChange={this.onChangeHandler} 
                        onClick={this.clickHandler} 
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        setUser: state.setUser,
        users: state.users
    }
}

export default withRouter(connect(mapStateToProps, { setUser })(SearchBar));