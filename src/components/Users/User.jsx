import React from 'react';
import Classes from './Users.module.css';
import {NavLink} from 'react-router-dom';
import *as axios from 'axios';




const User = ({user,isAllowedFollow, usersUnfollow, usersFollow}) =>{
		return(
			 <div className={Classes.items} key={user.id}>
					<div className={Classes.profile}>
					<div>
						<NavLink to={'/main/'+ user.id}><img className={Classes.photo} src={user.photos.small}/></NavLink>
					</div>
					<div className={Classes.btn}>
						{user.follow 
						? <button  disabled={isAllowedFollow.some(id=> id === user.id)} 
						onClick = {() => {usersUnfollow(user.id)}}>Unfollow</button> 
						: <button  disabled={isAllowedFollow.some(id=> id === user.id)}
						 onClick = {() => {usersFollow(user.id)} }>Follow</button>}		
					</div>
				</div>
				<div className={Classes.inform}>
					<h2>{user.name}</h2>
					<div>{user.status}</div>
				</div>
				<div className={Classes.location}>
					<h2>{"user.location.country"}</h2>
					<h3>{"user.location.city"}</h3>
				</div>
			</div>

		)
	}
		

export default User;