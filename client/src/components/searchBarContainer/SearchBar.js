import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setUser } from '../../actions'

import { Redirect, withRouter } from 'react-router-dom'

import DropDown from './DropDown'


class SearchBar extends Component {
    constructor(props) {
        super();

        this.state = {
            value: 'Look up user',
            dropDownOn: false
        };
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
      }

    componentDidMount(){
        this.setState({redirect: false})
    }

    onChangeHandler(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        if((this.props.users[this.state.value] == undefined)){
            console.log('User not found');
            this.props.history.push('/notfound')
        }
        else {
            this.setState({redirect:false});
            this.props.setUser(this.state.value)
        }
        
        this.setState({value: ''})
    }
    handleDropDown(){
        this.setState({dropDownOn: !this.state.dropDownOn});
    }

    clickHandler(){
        this.setState({value: ''})
    }

    render() {
        console.log(this.props.history)
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="searchForm">
                    <img src="./images/icons/search.png" className="searchIcon" onClick={this.handleSubmit}/>
                    <div className="arrow-down" onClick={this.handleDropDown}></div>
                    <input 
                        className='searchBar' 
                        value={this.state.value} 
                        onChange={this.onChangeHandler} 
                        onClick={this.clickHandler} 
                    />
                </form>
                {this.state.dropDownOn ? 
                <DropDown handleDropDown={this.handleDropDown}/> 
                : null}
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