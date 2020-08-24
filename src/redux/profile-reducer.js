import {profileAPI} from './../api/api.js';
let set_Status = 'SET-STATUS';


let initialState={
	status:""
}

const profileReducer = (state = initialState, action) =>{
	switch(action.type){
		case set_Status:
		return{
			...state,
			status:action.status
		}
		default:
		return state;
	}
}


export const profileStatus = (status) =>({type:set_Status, status});

export const getStatusThunk =(userId)=>{
	return async (dispatch)=>{
		let response = await profileAPI.getStatus(userId);
		dispatch(profileStatus(response.data));
	}
}

export const updateStatusThunk =(status)=>{
	return async (dispatch)=>{
		let response = await profileAPI.updateStatus(status);
			if(response.data.resultCode === 0){
				dispatch(profileStatus(status));
			}
		}
	}


export default profileReducer;