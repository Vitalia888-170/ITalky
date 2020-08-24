import {getUserLogin} from './auth-reducer.js';
let user_Authorized = 'USER-AUTHORIZED';


let initialState = {
isAuthorized:false
}

let appReducer = (state = initialState, action) => {
	switch(action.type){
		case user_Authorized:
			return{
					...state,
					isAuthorized:true
			}
		default:
			return state
	}
}

export const userAuthorized = () =>({type: user_Authorized});

export const setUserAuthorized = () =>{
	return (dispatch)=>{
				let promise = dispatch(getUserLogin());
				Promise.all([promise]).then( () => {dispatch(userAuthorized())});				
	}
}





export default appReducer;