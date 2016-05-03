import React, { Component } from 'react';

export default class User extends Component {

componentWillMount(){
  console.log('test', this.props.user);
}

  render(){
    return(<div> {this.props.user}</div>);
  }
}
