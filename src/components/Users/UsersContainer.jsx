import React from 'react';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import Classes from './Users.module.css';
import {followed, unfollowed, setUsers, setCurrentPage, setIsFetching,setUserFollowingProgress, getUsers, usersUnfollow, usersFollow} from './../../redux/users-reducer.js';
import Preloader from './../../common/Preloader/Preloader.jsx';
import *as axios from 'axios';
import {userAPI} from './../../api/api.js';
import {getTotalUsers, getTotalCountPage, getPageSize, getCurrentPage, getIsFetching, getIsAllowedFollow } from './../../selectors/selectors.js';



class UsersAPIContainer extends React.Component{

		componentDidMount(){
		this.props.getUsers(this.props.pageNumber, this.props.pageSize);
		}

		onPageChanged=(pageNumber)=>{
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
		}	

	render(){
	return(
	<>
		<div className={Classes.preloader}><Preloader isFetching={this.props.isFetching}/></div>

		<Users totalCountPage={this.props.totalCountPage}
				pageSize={this.props.pageSize}
				currentPage={this.props.pageSize}
				users={this.props.users}
				usersFollow={this.props.usersFollow}
				usersUnfollow={this.props.usersUnfollow}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				setUserFollowingProgress={this.props.setUserFollowingProgress}
				isAllowedFollow={this.props.isAllowedFollow}

				/>
	</>
	)
		
	}
	}


let mapStateToProps = (state) =>{
	return{
		users:getTotalUsers(state),
		totalCountPage:getTotalCountPage(state),
		pageSize:getPageSize(state),
		currentPage:getCurrentPage(state),
		isFetching:getIsFetching(state),
		isAllowedFollow:getIsAllowedFollow(state)
		}
	}

export default connect(mapStateToProps,{
usersFollow,
usersUnfollow,
setCurrentPage,
setUserFollowingProgress,
getUsers
})(UsersAPIContainer);