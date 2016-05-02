
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class GitHub extends Component {
  componentWillMount() {
    //     console.log("componentWillMount", this.props);
    // // this.props.fetchGithubMessage();
  }

  clickButtonSearch(){
    console.log("in here");
    console.log("this props", this.props);
    this.props.fetchGithubMessage();
  }

  // messageRender(props){
  //   console.log("Hello");
  //   // if(props){
  //   //   console.log("in tern", props);
  //   //   // return { props }
  //   // } else {
  //   //   return null
  //   // }
  // }

  render() {
    return (
      <div>
        <h5> Click this button </h5>
        <button onClick={this.clickButtonSearch.bind(this)}>Click Me </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}



export default connect(mapStateToProps, actions)(GitHub);
