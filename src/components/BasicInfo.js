import React, { Component } from 'react'

export default class BasicInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      Name : "",
      Number : "",
      DOB : "" 
    }
     }
  render() {
    return (
      <div>
                


      <p>    Name : {this.props.person} </p>
          
        <p> Number : {this.props.number} </p> 
          
         <p> Date of Birth : {this.props.dob} </p>



        <p> ------------------------- </p>
      </div>
    )
  }
}
