import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            colors : ['red', 'green', 'black', 'yellow']
        };
    }

    showColor(color){
        return{
            backgroundColor: color
        };
    }
    
    active(color){
        if(color === this.props.color){
            return 'active';
        }
        else
            return'';
    }

    click(color){
        this.props.receiveColor(color);
    }


  	render() {
        var elemColor = this.state.colors.map((color, index) =>{
            return  <span key={index} style = {this.showColor(color)} className={this.active(color)}
                        onClick = {()=>this.click(color)}
                    ></span>
        });

    	return (
    		<div className="panel panel-primary">
    			<div className="panel-heading">
    				<h3 className="panel-title">Chọn màu sắc</h3>
    			</div>
    			<div className="panel-body">
    			    {elemColor}
    			</div>
    		</div>
   		);
  	}
}

export default ColorPicker;
