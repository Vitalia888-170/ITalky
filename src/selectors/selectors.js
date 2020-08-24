import React from 'react';

export const getTotalCountPage = (state) =>{
	return state.usersPage.totalCountPage
}

export const getTotalUsers = (state) =>{
	return state.usersPage.users
}

export const getPageSize = (state) =>{
	return state.usersPage.pageSize
}

export const getCurrentPage = (state) =>{
	return state.usersPage.currentPage
}

export const getIsFetching = (state) =>{
	return state.usersPage.isFetching
}

export const getIsAllowedFollow = (state) =>{
	return state.usersPage.isAllowedFollow
}