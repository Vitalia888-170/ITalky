import React from 'react';
import  Classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
return(
<nav className = {Classes.nav}>
	   	<ul className = {Classes.list}>
	   	<div className = {Classes.logo}></div>
		   	<li className="items">
		   		<NavLink className = {Classes.link} to="/main" activeClassName={Classes.active} >Profile</NavLink>
		   	</li>
		   	<li className="items">
		   		<NavLink className = {Classes.link} to="/dialogs" activeClassName={Classes.active} >Messagese</NavLink>
		   	</li>
		   	<li className="items">
		   		<NavLink className = {Classes.link} to="/searching"  activeClassName={Classes.active} >Searching</NavLink>
		   	</li>
		   	<li className="items">
		   		<NavLink className = {Classes.link} to="/news" activeClassName={Classes.active}>News</NavLink>
		   	</li>
		   	<li className="items">
		   		<NavLink className = {Classes.link} to="/music" activeClassName={Classes.active}>Music</NavLink>
		   	</li>
		   	<li className="items">
		   		<NavLink className = {Classes.link} to="/settings"  activeClassName={Classes.active} >Settings</NavLink>
		   	</li>
		   	<li className="items">
		   		<NavLink className = {Classes.link} to="/login"  activeClassName={Classes.active} >Login</NavLink>
		   	</li>
   		</ul>
	</nav>

);
}
export default NavBar;