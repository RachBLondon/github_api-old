import React, { Component } from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';
// import { Link } from 'react-router'


class Pager extends Component {
  handleNextClick(){
    this.props.paginationCall(this.props.next)
  }

  render(){

      return(
        <div className="col-md-12">
          <nav>
            <ul className="c-pager">
              <li className="previous">Previous</li>
              <li onClick={this.handleNextClick.bind(this)} className="next">Next</li>
            </ul>
          </nav>
        </div>);
    }
  }


export default Pager;
