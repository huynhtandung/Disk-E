import React, { Component } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import SizeSetting from './Components/SizeSetting';
import Reset from './Components/Reset';
import Result from './Components/Result';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            indexColor: 'red',
            indexSize: 20

        }
        this.setColor = this.setColor.bind(this);
        this.setSize = this.setSize.bind(this);
        this.setIndexSize = this.setIndexSize.bind(this);
    }

    setColor(color){
        this.setState({
            indexColor: color
        })
    }

    setSize(size){
        if(size>=10 && size<=30){
            this.setState({
            indexSize: size
            })
        }
    }

    setIndexSize(size){
        this.setState({
            indexSize: size
        })
    }

   
    
  	render() {
        return(
            <div className = "container margin_top">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <ColorPicker color={this.state.indexColor} receiveColor ={this.setColor}></ColorPicker>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <SizeSetting size={this.state.indexSize} receiveSize={this.setSize}></SizeSetting>
                    <Reset receiveIndexSize={this.setIndexSize}></Reset>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Result color={this.state.indexColor} size={this.state.indexSize}></Result>
                </div>
            </div>
        );
  	}
}

export default App;
