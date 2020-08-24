const users_Followed= 'FOLLOW';
const users_Unfollowed= 'UNFOLLOW';
const set_Users ='SET-USERS';
const current_Page ='CURRENT-PAGE';
const set_fetching = 'SET-FEACHING';
const following_In_Progress = 'FOLLOWING-IN-PROGRESS';
import {userAPI} from './../api/api.js';
import {FollowUnfollow} from './../common/FollowUnfollow/FollowUnfollow.js';

let initialState ={
	users:[ ],
	totalCountPage:200,
	pageSize:10,
	currentPage:1,
	isFetching:true,
	isAllowedFollow:[]

}

let usersReducer = (state = initialState, action) =>{
	switch(action.type){
		case users_Followed:
			return {
				...state,
				users:FollowUnfollow(state.users, "id", action.usersId, {follow:true} )
			}
		case users_Unfollowed:
			return{
				...state,
				users:state.users.map(u =>{
					if(u.id === action.usersId){
						return{...u, follow:false}
					}
					return u;
				})
			}
		case set_Users:
			return{
				...state, 
				users:action.users
			}
		case current_Page:
			return{
				...state,
				currentPage:action.pageNumber
			}
			case set_fetching:
			return{
				...state,
				isFetching:action.statusLoading
			}
			case  following_In_Progress:
			return{
				...state,
				isAllowedFollow:action.changeFollow 
				? [...state.isAllowedFollow, action.userId] 
				: state.isAllowedFollow.filter(id => id != action.userId)
			}
		default:
			return state;
	}
}

export const followed = (usersId) =>({type:users_Followed, usersId});
export const unfollowed = (usersId) =>({type:users_Unfollowed, usersId});
export const setUsers = (users) =>({type: set_Users, users});
export const setCurrentPage = (pageNumber) =>({type: current_Page, pageNumber});
export const setIsFetching = (statusLoading) =>({type: set_fetching, statusLoading});
export const setUserFollowingProgress = (changeFollow, userId) =>({type: following_In_Progress, changeFollow, userId});

 export const getUsers = (pageNumber, pageSize) => {
	return async (dispatch)=>{
			dispatch(setIsFetching(true));
			let data = await userAPI.getUsers(pageNumber,pageSize);
			dispatch(setUsers(data.items));
			dispatch(setIsFetching(false));
		}
	}

const changingFollow = async (chooseAction, setAction, userId, dispatch) =>{
	 dispatch(setUserFollowingProgress(true, userId));
			let response = await chooseAction(userId);
			if (response.data.resultCode == 0){
					dispatch(setAction(userId));
				}
			dispatch(setUserFollowingProgress(false, userId));
		}

	export const usersFollow = (userId) => {
		return async (dispatch)=>{
		changingFollow(userAPI.follow.bind(userAPI),followed, userId, dispatch);
		}
	}

export const usersUnfollow = (userId) => {
	return async (dispatch)=>{
		changingFollow( userAPI.unfollow.bind(userAPI),unfollowed, userId, dispatch);
	}
}


export default usersReducer;