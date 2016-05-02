import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
  linkHeader(){
    if (this.props.authenticated){
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout"> Sign Out </Link>
          <Link className="nav-link" to="/Github"> Github </Link>
        </li>
      )
    } else {
      return [
        <li className="nav-item"key={1}>
          <Link className="nav-link" to="/signin" >Sign in </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign up </Link>
        </li>
      ];
    }
  }

  render(){
    return(
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand"> Redux Auth </Link>
        <ul className="nav navbar-nav">

            {this.linkHeader()}

        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return{
     authenticated : state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
