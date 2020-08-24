import React from 'react';
import Friend from './Friends/Friends.js';
import ProfileStatus from './Status/status.jsx';
import Classes from './Profile.css';

const Profile = (props) => {

let friendsList = props.stateName.dialogs.map( nameUser => <Friend nameFriends={nameUser.name}/>);

return(
	   	<div className="user-date">
	   		<div className="user-inform">
	   			<h2>Penelope Monrait</h2><br/>
	   			<div>
	   					<ProfileStatus  status={props.status}  updateStatusThunk={props.updateStatusThunk}/>
	   			</div>
	   			<h4>Date of birth:</h4> <span>15/05/1999</span>
	   			<h4>Location:</h4> <span>Florida, USA</span>
	   			<h4>Education:</h4><span>St. Peter College</span>
	   			<h4>Phone:</h4><span>+*********485</span>
			</div>
			<h4 className="friends-title">My Friends</h4>
				<div className="profile-content">
					{friendsList}
				</div>
			</div>
	
   	);
   	}

  export default Profile;