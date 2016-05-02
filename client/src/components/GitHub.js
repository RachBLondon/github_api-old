
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

  // renderMessage(){
  //   if(this.props.user){
  //     return this.props.user
  //   } else {
  //     return null
  //   }
  // }
  //       // {this.renderMessage()}

  renderUserList(){
    if(this.props.users){
      const answers = [];
      this.props.users.map(user=>{
        console.log("user try", user);
        answers.push(<li>{user.login}</li>)
      })
      console.log('answers', answers);
      return answers;
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
          <ol>
            {this.renderUserList()}
          </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.github.users };
}



export default connect(mapStateToProps, actions)(GitHub);
