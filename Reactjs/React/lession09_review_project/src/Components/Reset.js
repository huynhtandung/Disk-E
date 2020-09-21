import React, { Component } from 'react';

class Reset extends Component {
   constructor(props){
   		super(props);
   		this.state = {
   			indexSize: 20
   		};
   }
   	resetSize(){

   		this.props.receiveIndexSize(this.state.indexSize);
   	}

  	render() {
    	return (
    		<button type="button" className="btn btn-default" onClick={()=>{this.resetSize()}}>Reset</button>
   		);
  	}
}

export default Reset;
