import React from 'react';

export const FollowUnfollow = (items, itemId, usersId, newObj) =>{
	return items.map(u =>{
	if(u[itemId] === usersId){
		return{...u, ...newObj}
	}
	return u;
	});
}