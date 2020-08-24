import React from 'react';
import './Header.css';
import logo from './logo.jpg';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
return(
<header className="header">
   		<div className='media-title'>
   			<img src={logo} alt='logo' />
   			<h2>YoTalki</h2>
   		</div>
   		<div className='login'>
   		{props.isAuth 
         ? <div className="loginBlock"> {props.login}  <button className="loginButton" onClick={props.Logout}>Logout</button> </div> 
         : <NavLink to={'/login'}>Follow</NavLink>  }
   			
   		
   		</div>
   	</header>
);
}

export default Header;