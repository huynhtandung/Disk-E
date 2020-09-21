import React, { Component } from 'react';

class SizeSetting extends Component {
   
    changeSize(value){
        this.props.receiveSize(this.props.size + value);
    }

  	render() {
    	return (
    		<div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Kích thước: {this.props.size}</h3>
                </div>
                <div className="panel-body">
                    <a className="btn btn-lg btn-primary" href="#" role="button" onClick={()=>{this.changeSize(1)}}>Tăng</a>
                    <a className="btn btn-lg btn-primary" href="#" role="button" onClick={()=>{this.changeSize(-1)}}>Giảm</a>
                </div>
            </div>
   		);
  	}
}

export default SizeSetting;
