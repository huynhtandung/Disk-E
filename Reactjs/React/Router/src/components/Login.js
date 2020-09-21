import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			txtUsername : '',
			txtPassword : ''
		}
	}
	onChange = (e)=>{
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name] : value
		})
	}
	onLogin = (e)=>{
		var {txtPassword, txtUsername} =this.state;
		e.preventDefault();
		if(txtUsername === 'admin' && txtPassword === 'admin'){
			localStorage.setItem('user', JSON.stringify({
				username : txtUsername, 
				password : txtPassword
			}))
		}


	}
	render() {
		var {txtPassword, txtUsername} =this.state;
		var loggedInUser = localStorage.getItem('user');
		if(loggedInUser !== null){
			var {location} = this.props;
			return <Redirect to={{
				pathname : '/products',
				state : {
					from : location
				}
			}}/>
		}

		return (
		 	<div className="row">
		 		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		 			<form onSubmit={this.onLogin}>
		 				<legend>Dang nhap</legend>		 			
		 				<div className="form-group">
		 					<label>Username</label>
		 					<input 
		 						onChange={this.onChange} 
		 						value={txtUsername}
		 						name="txtUsername" 
		 						type="text" 
		 						className="form-control" 
		 						id="txtUsername" 
		 						placeholder="Input field" 
		 					/>
		 				</div>
		 				<div className="form-group">
		 					<label>Password</label>
		 					<input 
		 						onChange={this.onChange} 
		 						value={txtPassword}
			 					name="txtPassword" 
			 					type="password" 
			 					className="form-control" 
			 					id="txtPassword" 
			 					placeholder="Input field" 
			 				/>
		 				</div>	 			
		 				<button type="submit" className="btn btn-primary">Dang nhap</button>
		 			</form>
		 		</div>
		 	</div>
		);
	}
}

export default Login;
