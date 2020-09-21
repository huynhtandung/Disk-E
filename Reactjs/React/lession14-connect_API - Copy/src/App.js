import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {firebaseConnect} from './firebaseConnect';

class App extends Component {
	render() {
		//console.log(firebaseConnect);
		return (
			<Router>
			 	<Menu />
			 	<div className="container">
			 		<Switch>
			 			{this.showContentMenu(routes)}
			 		</Switch>
			 	</div>
			</Router>
		);
	}
	showContentMenu = (routes) => {
		var result = null;
		if(routes.length > 0){
			result = routes.map((route, index)=>{
				return(
					<Route 
						key={index}
						path={route.path} 
						exact={route.exact}
						component={route.main} 
					/>
				)
			})
		}
		return result;
	}
}

export default App;
