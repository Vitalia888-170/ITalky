import React from 'react';
const Post = (props) => {
return(
	<div className="post">
		<img className="log" src='https://www.spotteron.net/images/icons/user60.png' alt='logoUser'/>
		<span>{props.message}</span>
	</div>
);
}

export default Post;