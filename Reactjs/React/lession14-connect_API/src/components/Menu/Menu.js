import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
	{
		name : 'Home',
		to : '/',
		exact : true
	},
	{
		name : 'Products',
		to : '/product-list',
		exact : false
	}
]

const MenuLink = ({label, to, activeWhenExact}) => {
	return(
		<Route 
			path={to}
			exact={activeWhenExact}
			children={({match}) => {
				var active = match ? 'active' : '';
				return(
					<li className={active}>
						<Link
							to={to}
						>
							{label}
						</Link>
					</li>
				)
			}}
		/>
	)
}

class Menu extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse">
		 		<div className="container-fluid">
		 			<span className="navbar-brand">CALL API</span>
		 			<ul className="nav navbar-nav">
		 				{this.showMenu(menus)}
		 			</ul>
		 		</div>
		 	</nav>
		);
	}
	showMenu = (menus) =>{
		var result = null;
		if(menus.length > 0){
			result = menus.map((menu, index)=>{
				return(
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeWhenExact={menu.exact}
					/>
				)
			})
		}
		return result;
	}
}

export default Menu;
