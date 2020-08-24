let set_User_Auth = 'SET_USER_AUTH';
let set_User_Login_Data = 'SET_USER_LOGIN_DATA';
import {authAPI} from './../api/api.js';
import {stopSubmit} from 'redux-form';


let initialState = {
	userId:null,
	email:null,
	login:null,
	password:null,
	rememberMe:null,
	isAuth:false
}

let authReducer = (state = initialState, action) => {
	switch(action.type){
		case set_User_Auth:
			return{
					...state,
					...action.data
			}
		default:
			return state
	}
}

export const setUserLogged = (userId, email, login, isAuth) =>({type:set_User_Auth, data:{userId, email, login, isAuth}});

export const getUserLogin = () =>{
	return  async (dispatch)=>{
			let response = await authAPI.auth();
			if(response.data.resultCode === 0){
				let {id, email, login} = response.data.data;
					dispatch(setUserLogged(id, email, login, true));
				}
	}
}




export const Login = (email, password, rememberMe) =>{
	return async (dispatch) =>{
		let response = await authAPI.login(email, password, rememberMe);
			if(response.data.resultCode === 0){
				dispatch(getUserLogin());
			}else{
				let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
				dispatch(stopSubmit('login',{_error:message}));
			}
	}
}

export const Logout = () =>{
	return async (dispatch) => {
		let response = await authAPI.logout();
			if(response.data.resultCode === 0){
					dispatch(setUserLogged(null, null, null, false));
			}
	}
}
export default authReducer;