import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
   
   showText(){
        return {
            backgroundColor: this.props.color,
            fontSize: this.props.size
            
        };
   }

  	render() {
    	return (
    		<div className="result">
                <div>Color: {this.props.color}  -  Font size: {this.props.size}</div>
                <div className = 'content' style={this.showText()}>
                    Nội dung text
                </div>
            </div>
   		);
  	}
}

export default Result;
