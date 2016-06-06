import React, { Component } from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router'


class Pager extends Component {

  render(){
      return(
        <div className="col-md-12">
          <nav>
            <ul className="c-pager">
              <li className="previous"><Link to="#">Previous</Link></li>
              <li className="next"><Link to="#">Next</Link></li>
            </ul>
          </nav>
        </div>);
    }
  }


export default Pager;
