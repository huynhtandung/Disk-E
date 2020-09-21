import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
//import Login from './../components/Login';

const menus = [
	{
		name : 'Home',
		to : '/',
		exact : true
	},
	{
		name : 'About',
		to : '/about',
		exact : false
	},
	{
		name : 'Contact',
		to : '/contact',
		exact : false
	},
	{
		name : 'Products',
		to : '/products',
		exact : false
	},
	{
		name : 'Login',
		to : '/login',
		exact : false
	}
]

const MenuLink = ({label, to, activeOnlyWhenExact})=>{
	return (
		<Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
			var active = match ? 'active_link' : '';
			return (
				<li className={`my_li ${active}`}>
			 		<Link to={to}>
			 			{label}
			 		</Link>
			 	</li>
			)
		}}/>
	)
}
class Menu extends Component {
	render() {
		return (
		 	<nav className="navbar navbar-inverse">
	 			<div className="container-fluid remove_paddingLeft">
	 				<ul className="nav navbar-nav">
	 					{this.showMenu(menus)} 					
	 				</ul>
	 			</div>
	 		</nav> 
		);
	}
	showMenu = (menus)=>{
		var result = null;
		if(menus.length > 0){
			result = menus.map((menu, index)=>{
				return(
					<MenuLink key={index} 
						label={menu.name} 
						to={menu.to} 
						activeOnlyWhenExact={menu.exact} 
					/>
				)
			})
		}
		return result;
	}
}

export default Menu;
