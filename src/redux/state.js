import mainReducer from './main-reducer.js';
import dialogReducer from './dialogs-reducer.js';

let store = {

		 _state : {

			mainPage:{
				posts: [
				{id:1, message:'Hey, how are you?' },
				{id:2, message:'Penelope, where are you now? I miss you so much!!!'},
				{id:3, message:'Did you finish last projects? Can you tell me how you did it so quickly?'},
				{id:4, message:'Dear, I will wait for you and Melisa in my birthday party'}
				],
				currentText:'it-lessons-react'
			},
			dialogsPage:{
				dialogs:[
				{id:'user_Andrew', name:'Andrew'},
				{id:'user_Elli', name:'Elli'},
				{id:'user_Monik', name:'Monik'},
				{id:'user_John', name:'John'},
				{id:'user_Alex', name:'Alex'},
				{id:'user_Mia', name:'Mia'},
				{id:'user_Peter', name:'Peter'},
				{id:'user_Ben', name:'Ben'},
				{id:'user_Nessy', name:'Nessy'}
				],
			messages: [
				{id:1, message:"Hello, how are you?"},
				{id:2, message:"I have recently arrived to New York" },
				{id:3, message:"Wow! It's cool! Will you be all your rest there?" },
				{id:4, message:"Unfortunately... But you will be able to visit me. How you like that?"},
				{id:5, message:"I don't know if I have more free time. But I promise... I think about that."},
				{id:6, message:"Okay, but I have some surprizes for you. So, I will wait."},
				],
				newMessageBody:" "
			}
		},
		getState(){
			return this._state;
		},

		_callSubscriber(){
			console.log('state');
		},

		 subscribe(observer){
			this._callSubscriber = observer;
		}, 

		dispatch(action){

			this._state.mainPage = mainReducer(this._state.mainPage, action);
			this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
			this._callSubscriber(this._state);
			
		}
}


export default store;