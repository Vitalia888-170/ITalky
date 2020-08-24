import React from 'react';
import Classes from './Friends.module.css';

const Friend = (props) =>{
	return(
		<div className={Classes.content}>
			<div className={Classes.items}>
				<img src='https://www.spotteron.net/images/icons/user60.png' alt='user'/>
			<div className={Classes.name}>{props.nameFriends}</div>
			</div>
		</div>
		);
}

export default Friend;