import React, { Component } from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';


class User extends Component {

  render(){
      return(<div>


        </div>);
    }
  }

function mapStateToProps(state){
  return {
    usersDetails : state.usersDetails
  }
}

export default connect(mapStateToProps, actions)(User)
