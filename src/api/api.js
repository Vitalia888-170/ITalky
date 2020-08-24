import React from 'react';
import *as axios from 'axios';

const instance = axios.create({
	withCredentials:true,
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
	headers:{
		"API-KEY":"162900e5-fff0-48b7-90b6-52d512dcd331"
		 }
})

export const userAPI = {
	getUsers(currentPage, pageSize){
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response=>{
				return response.data
			})
		},
	follow(userId){
		return instance.post(`follow/${userId}`)
		},
	unfollow(userId){
		return instance.delete(`follow/${userId}`)
	}
}
		

export const  userMainAPI = (userId) => {
	return instance.get('profile/'+ userId)
}

export const profileAPI = {
	getStatus(userId){
		return instance.get('profile/status/' + userId)
	},
	updateStatus(status){
		return instance.put('profile/status' , {status:status});
	}
	
}


export const  authAPI = {
	auth(){
		return instance.get('auth/me');
	},
	login(email, password, rememberMe = false){
		return instance.post('auth/login', {email, password, rememberMe});
	},
	logout(){
		return instance.delete('auth/login');
	}
}