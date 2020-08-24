import {createStore, combineReducers, applyMiddleware} from "redux";
import mainReducer from './main-reducer.js';
import dialogReducer from './dialogs-reducer.js';
import usersReducer from './users-reducer.js';
import authReducer from './auth-reducer.js';
import profileReducer from './profile-reducer.js';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './app-reducer.js';


let reducers = combineReducers({
	mainPage : mainReducer,
	dialogsPage : dialogReducer,
	usersPage: usersReducer,
	auth: authReducer,
	profile:profileReducer,
	form:formReducer,
	app:appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;