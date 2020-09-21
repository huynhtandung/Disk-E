import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
	render() {
	    return (
	    	<h3>
                <span className="badge amber darken-2">{this.props.messages}</span>
            </h3>
	    );
	}
}
const mapStateToProps = (state) =>{
    return{
        messages : state.messages
    }
}
export default connect(mapStateToProps, null)(Message);