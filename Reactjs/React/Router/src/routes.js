import React  from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Login from './components/Login';
import NotFound from './components/NotFound';

const routes = [
	{
		path : '/',
		exact : true,
		main : ()=><Home />
	},
	{
		path : '/about',
		exact : false,
		main : ()=><About />
	},
	{
		path : '/contact',
		exact : false,
		main : ()=><Contact />
	},
	{
		path : '/products',
		exact : false,
		main : ({location, match})=><Products location={location} match={match}/>
	},
	{
		path : '/login',
		exact : false,
		main : ({location, match})=><Login location={location} match={match}/>
	},
	{
		path : '',
		exact : false,
		main : ()=><NotFound />
	}
]

export default routes;