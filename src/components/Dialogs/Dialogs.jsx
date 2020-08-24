import React from 'react';
import  Classes from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import {NavLink, Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthMessage} from './../../common/Utils/Validators/validators.js';
import {Textarea} from './../../common/Forms/forms.jsx';

let maxLength = maxLengthMessage(50);
const DialogForm = (props) =>{
	return(
			<form onSubmit={props.handleSubmit}>
				<Field className={Classes.field} component={Textarea}  name="newDialogBody"
				 placeolder="Enter New Message" validate={[required, maxLength]}
				/>
				<button>Send</button>
			</form>
	)
}

let DialogFormRedux = reduxForm({form: 'dialogMessage'})(DialogForm);



const Dialogs = (props) => {

let dialogsElem = props.stateDialogs.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

let messagesElem = props.stateDialogs.messages.map( letter =><MessageItem message = {letter.message}/>);


let addMessage = (values) =>{
	props.addMessage(values.newDialogBody);
}


	return(
	<div className={Classes.wrap}>
		<div className={Classes.user}>
				{dialogsElem}
		</div>
			
		<div className={Classes.messages}>
			<div className={Classes.enter}>
						<DialogFormRedux onSubmit={addMessage}/>
				</div>
				<div>{messagesElem}</div>
		</div>
	</div>

	)
}

export default Dialogs;