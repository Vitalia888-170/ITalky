import React from 'react';
import  Classes from'./../Dialogs.module.css';

const MessageItem = (props) => {
	return(
	<div className={Classes.letter}>
		<img src='https://www.spotteron.net/images/icons/user60.png' alt='user'/>
		<div className={Classes.text}>{props.message}</div>
		</div>
	);
}



export default MessageItem;