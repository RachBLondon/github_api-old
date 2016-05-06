import React, { Component } from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';


class User extends Component {



  // componentWillMount(){
  //   this.props.fetchUserData(this.props.user)
  // }

  // filterUserDetails(user){
  //   const allData = this.props.usersDetails
  //   for each( userName in allData){
  //     if (this.props.usersDetails.userName === user){
  //       console.log("Match : ", user, this.props.usersDetails.userName )
  //     }
  //   }
  // }

  renderDetails(){
    if(this.props.usersDetails){
      const user = this.prop.user;
      console.log(">>>", this.props.usersDetails[user].name);
      return (
        <div>
          {this.props.usersDetails[user].name}
        </div>)
    } else {
      return null;
    }
  }

  render(){
    // console.log("THIS.PROPS", this.props.usersDetails.);
      return(<div>
          {this.renderDetails}

        </div>);
    }
  }

function mapStateToProps(state){
  return {
    usersDetails : state.usersDetails
  }
}

export default connect(mapStateToProps, actions)(User)
