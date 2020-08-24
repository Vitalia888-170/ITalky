import React from 'react';
import Classes from './Users.module.css';
import {NavLink} from 'react-router-dom';
import {unFollowAPI, followAPI} from './../../api/api.js';
import *as axios from 'axios';
import Pagination from './../../common/Pagination/Pagination.jsx';
import User from './User.jsx';



const Users = (props) =>{
		return(
			<div>
				<Pagination totalCountPage={props.totalCountPage} pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}/>
			<div className={Classes.container}>
			{props.users.map( u => <User user={u} isAllowedFollow={props.isAllowedFollow}
			 usersUnfollow={props.usersUnfollow} usersFollow={props.usersFollow}/>

			)
			}

	  </div>
	  </div>

		)
	}
		

export default Users;