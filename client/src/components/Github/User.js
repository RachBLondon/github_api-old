import React, { Component } from 'react';

export default class User extends Component {


  render(){
    console.log("USer props", this.props);
    return(<div>{this.props.user}</div>);
  }
}
