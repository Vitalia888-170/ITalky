import React from 'react';
import Profile from './Profile.jsx';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getStatusThunk,updateStatusThunk} from './../../redux/profile-reducer';

class ProfileContainer extends React.Component{
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId){
			userId=this.props.userAuthorized;
		}
		this.props.getStatusThunk(userId);
	}

	render(){
		return(
			<Profile stateName={this.props.stateName} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
		)
	}
}

let mapStateToProps = (state) =>{
	return {
		stateName: state.dialogsPage,
		status:state.profile.status,
		userAuthorized:state.auth.userId
	}
}

const ProfileContainerRouter=withRouter(ProfileContainer);
export default connect (mapStateToProps,{getStatusThunk, updateStatusThunk})(ProfileContainerRouter);
	

