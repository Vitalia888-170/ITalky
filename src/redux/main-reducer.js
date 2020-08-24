const add_Post = 'ADD-POST';
const delete_Post = 'DELETE-POST';
const total_User_Profile = 'TOTAL-USER-PROFILE';
import { userMainAPI} from './../api/api.js';

let initialState = {
			posts: [
				{id:1, message:'Hey, how are you?' },
				{id:2, message:'Penelope, where are you now? I miss you so much!!!'},
				{id:3, message:'Did you finish last projects? Can you tell me how you did it so quickly?'},
				{id:4, message:'Dear, I will wait for you and Melisa in my birthday party'}
				],
			profile:null,
			newPostMessage:""
}

let mainReducer = (state = initialState ,action) => {

	switch (action.type){

		case add_Post:
			let newPost = action.textPost;
			return{
				...state,
				posts:[...state.posts,{id:5, message:newPost}],
				newPostMessage:""
			}; 
 		case total_User_Profile:
 			return{
 				...state,
 				profile:action.profile
 			};
 			case delete_Post:
 			return{
 				...state, posts:state.posts.filter(p=> p.id != action.userId)
 			};
		default:
			return state;
			}
}

export const addPost = (textPost) =>({type:add_Post, textPost});
export const deletePost = (userId) =>({type:delete_Post, userId});
export const userProfile = (profile) =>({type:total_User_Profile, profile});


export const getUserProfile = (userId) => {
	return async (dispatch)=>{
			let response = await userMainAPI(userId);
			dispatch(userProfile(response.data));
		}
	}


export default mainReducer;
