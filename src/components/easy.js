import React, { Component } from 'react'

export default class easy extends Component {
 constructor(props){
super();
 }
 
 
 
    render() {
    return (
      <div>
      <p> ------------------------- </p>

        <h2> Easy </h2>
        {this.props.person}
    
      </div>
    )
  }
}
