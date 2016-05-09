
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import User from './User';
import * as actions from '../../actions';

class GitHub extends Component {

  handleFormSubmit({ language, location}){
    this.props.fetchGithubMessage({language, location});
  }

  renderUsers(){
    if(this.props.usersDetails){
      const userData = this.props.usersDetails
      for (var key in userData) {
        if (userData.hasOwnProperty(key)) {
          console.log(userData[key].login);
          console.log(userData[key].name);
          console.log("followers",userData[key].followers);
        }
      }
    } else {
      return null;
    }
  }

  render() {
    const { handleSubmit , fields :{ language, location }} = this.props;
    console.log("THIS PROPS", this.props.usersDetails);
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
          {this.renderUsers()}
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
