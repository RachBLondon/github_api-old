import React, { Component } from 'react'
import * as actions from '../../actions'
import { connect } from 'react-redux'


class Pager extends Component {
  handleClickNext(){
    this.props.paginationCall({ type: 'next', url:this.props.pages.next} )
  }

  handleClickLast(){
    this.props.paginationCall({ type: 'last', url:this.props.pages.last} )
  }

  handleClickFirst(){
    this.props.paginationCall({ type: 'fist', url:this.props.pages.first})
  }

  handleClickPrev(){
    this.props.paginationCall({ type: 'prev', url:this.props.pages.prev} )
  }

  render(){
    const firstButton = this.props.pages.first ? (<li onClick={this.handleClickFirst.bind(this)}className="first">First</li>) : null
    const nextButton = this.props.pages.next ? (<li onClick={this.handleClickNext.bind(this)}className="next">Next</li>) : null
    const prevButton = this.props.pages.prev ? (<li onClick={this.handleClickPrev.bind(this)}className="prev">Prev</li>) : null
    const lastButton = this.props.pages.last ? (<li onClick={this.handleClickLast.bind(this)}className="last">Last</li>) : null


      return(
        <div className="col-md-12">
          <div className="container">
            <nav>
              <ul className="pager">
                {firstButton}
                {prevButton}
                {nextButton}
                {lastButton}
              </ul>
            </nav>
          </div>
        </div>);
    }
  }


  // <li className="previous">Previous</li>
  // <li onClick={this.handleClickNext.bind(this)}className="next">Next</li>
  // <li onClick={this.handleClickLast.bind(this)} className="last">Last</li>



export default Pager;
