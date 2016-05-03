
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import User from './User';
import * as actions from '../../actions';

class GitHub extends Component {

  handleFormSubmit({ language, location}){
    console.log("this.props", this.props);
    console.log(language, location);
    this.props.fetchGithubMessage({language, location});
  }


  renderUsers(){
    if(this.props.users){
      const answers = [];
      this.props.users.map(user=>{
        answers.push(<User user={user.login}/>)
      });
      return answers
    } else {
      return null;
    }
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
          {this.renderUsers()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.github.users };
}



export default reduxForm({
  form: 'search',
  fields: ['language', 'location']
}, mapStateToProps, actions)(GitHub);
