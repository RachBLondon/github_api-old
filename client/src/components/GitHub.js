
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class GitHub extends Component {
  // componentWillMount() {
  //   //     console.log("componentWillMount", this.props);
  //   // // this.props.fetchGithubMessage();
  // }

  clickButtonSearch(){
    this.props.fetchGithubMessage();
  }

  renderMessage(){
    if(this.props.user){
      return this.props.user
    } else {
      return null
    }
  }



  render() {
    console.log('props in render', this.props);
    return (
      <div>
        <h5> Click this button </h5>
        <button onClick={this.clickButtonSearch.bind(this)}>Click Me </button>
        {this.renderMessage()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.github.user };
}



export default connect(mapStateToProps, actions)(GitHub);
