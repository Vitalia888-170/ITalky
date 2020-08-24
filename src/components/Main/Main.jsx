import React from 'react';
import Post from './Post/Post.jsx';
import  './Post/Post.css';
import Classes from './Main.module.css';
import Preloader from './../../common/Preloader/Preloader.jsx';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthMessage} from './../../common/Utils/Validators/validators.js';
import {Textarea} from './../../common/Forms/forms.jsx';


let maxLength = maxLengthMessage(100);
const PostForm = (props) =>{
	return(
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name="newMessageBody" placeholder="Enter Message"
			validate={[required, maxLength]}/>
			<button >Send</button>
		</form>
	)
}

let PostFormRedux = reduxForm({form:'post'})(PostForm);


const Main = (props) => {

let postsElem = props.statePosts.posts.map( post => <Post message = {post.message}/>);

if (!props.profile){
	return <Preloader/>
}

let addNewPost =(values)=>{
props.addPost(values.newMessageBody);
}


return(
	<div className={Classes.main}>
		<div className={Classes.userData}>
			<img src = {props.profile.photos.small}/>
			<p>{props.profile.fullName}</p>
			<p>{props.profile.aboutMe}</p>
		</div>
		<div className={Classes.enteredField}>
		<PostFormRedux onSubmit={addNewPost}/>
		</div>
		<div className="posts">
			{postsElem}
		</div>
	</div>
);
}


export default Main;