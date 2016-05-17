
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
        console.log(">>>", numberUsersData, numberUsersDisplayed);
        numberUsersDisplayed++;
        return this.createJSX(this.props.usersDetails)

      }

      //if numberUsesData is great than numberUsersDisplayed add jsx to array for display
    }

  }

  createJSX(usersData){
    const jsxArray = [];
    Object.keys(usersData).map(function(key) {
      // return <div>Key: {key}, Value: {usersData[key]}</div>;
      console.log("LLLLL", usersData[key].login);
      console.log("length :", Object.keys(usersData).length);
      console.log( "count :", numberUsersDisplayed);
      jsxArray.push(<div>{usersData[key].login}</div>)
    })
    console.log("createJSX", jsxArray);
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
