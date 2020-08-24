import React from 'react';
import  Classes from'./../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return(
		<NavLink to={path} className={Classes.dialoge}>{props.name}</NavLink>
	)
}

export default DialogItem;