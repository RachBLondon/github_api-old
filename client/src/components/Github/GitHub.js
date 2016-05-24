
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import User from './User';
import * as actions from '../../actions';


let numberUsersDisplayed = 0;

const colorScheme =['#ffffff', '#998a7b','#d7e6ef', '#bfced3', '#aca497']

class GitHub extends Component {

  handleFormSubmit({ language, location}){
    this.props.fetchGithubMessage({language, location});
  }


  showUsers(){
   let count = 0;
   return this.props.usersDetails.map(user =>{
      const userName = user.name ? user.name : user.login;
      const hireSatus = user.hireable? "fa fa-check-circle": null;
      const textColor = count%5 === 1 || count%5 === 4 ? '#ffffff' : '#998a7b';
      const divStyle = {backgroundColor : colorScheme[count%5], color : textColor}
      count ++;
        return (
          <div key={count} className="col-md-4  c-user_cell" style={divStyle}>
            <div className="row">
              <div className="col-xs-6">
                <h4>{userName}</h4>
                <p>{user.location}</p>
                <i className={hireSatus}></i>
              </div>
              <div className="col-xs-6">
                <p>Follwers : {user.follwers}</p>
                <p>Repos : {user.public_repos}</p>
              </div>
            </div>
          </div>)
      });
  }

  render() {
    const { handleSubmit , fields :{ language, location }} = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label> language: </label>
          <input { ...language } className="form-control" />
        </fieldset>

        <fieldset className="form-group">
          <label> Location: </label>
          <input { ...location } className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in </button>
        </form>
        <div className="row">
            {this.showUsers()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersDetails : state.usersDetails
  };
}



export default reduxForm({
  form: 'search',
  fields: ['language', 'location']
}, mapStateToProps, actions)(GitHub);
