import React from 'react';
import ReactDOM from 'react-dom';
import  mainReducer , {addPost, deletePost} from './main-reducer.js' ;


let state = {
		posts: [
				{id:1, message:'Hey, how are you?' },
				{id:2, message:'Penelope, where are you now? I miss you so much!!!'},
				{id:3, message:'Did you finish last projects? Can you tell me how you did it so quickly?'},
				{id:4, message:'Dear, I will wait for you and Melisa in my birthday party'}
				]
}

it('post length should be incremented', () =>{
	let action = addPost("Great job!");

	let newState = mainReducer(state, action);
	expect(newState.posts.length).toBe(5);

});

it('post length should be decremented', () =>{
	let action = deletePost(1);

	let newState = mainReducer(state, action);

	expect(newState.posts.length).toBe(3);

});



