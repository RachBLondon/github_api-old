
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import User from './User';
import * as actions from '../../actions';


let numberUsersDisplayed = 0;

class GitHub extends Component {

  handleFormSubmit({ language, location}){
    this.props.fetchGithubMessage({language, location});
  }

  //create function to display jsx in array

  organiseUserData(){


    //check to see if there is anydata
    if(this.props.usersDetails ){


      //record rendered data recieved
      let numberUsersData = Object.keys(this.props.usersDetails).length;

      if(numberUsersData >= numberUsersDisplayed){
        numberUsersDisplayed++;
        return this.createJSX(this.props.usersDetails)

      }
    }

  }

  createJSX(usersData){
    const jsxArray = [];

    Object.keys(usersData).map(function(key) {
      const followerWidth = usersData[key].followers +"px";
      const followerStyle = { width : followerWidth, height : followerWidth}
      console.log("follwer style", followerWidth);
      jsxArray.push(<div key={usersData[key].login} className="col-md-4 user__card">
                      <h2>{usersData[key].login}</h2>
                      <p>{usersData[key].name}</p>
                      <p>{usersData[key].company}</p>
                      <div className="user__followers" style={followerStyle}>
                        <p>{usersData[key].followers}</p>
                      </div>
                      <p> follwers </p>
                    </div>
                )
    })
    return jsxArray
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
            {this.organiseUserData()}
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
