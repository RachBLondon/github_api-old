import React, { Component } from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';
// import { Link } from 'react-router'


class Pager extends Component {
  handleNextClick(){
    const page = this.props.next.split("page=")[1]
    this.props.paginationCall({ type: 'next', url:this.props.next, page: page})
  }

  handleLastClick(){
    const page = this.props.last.split("page=")[1]
    this.props.paginationCall({type: "last", url: this.props.last, page: page })
  }

  

  render(){
    console.log("IN PAGER :", this.props);
      return(
        <div className="col-md-12">
          <nav>
            <ul className="c-pager">
              <li className="previous">Previous</li>
              <li onClick={this.handleNextClick.bind(this)} className="next">Next</li>
              <li onClick={this.handleLastClick.bind(this)} className="last">Last</li>
            </ul>
          </nav>
        </div>);
    }
  }




export default Pager;
