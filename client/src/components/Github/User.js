import React, { Component } from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';

class User extends Component {

componentWillMount(){
  this.props.fetchUserData(this.props.user)

}

  render(){
    return(<div> {this.props.user}</div>);
  }
}


export default connect(null, actions)(User)
