import React from 'react';
import {addMessageCreater, updateTextMessageBodyCreater} from './../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import {withAuthRedirect} from './../../hoc/hoc.js';
import {compose} from 'redux';
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
	return {
		stateDialogs:state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) =>{
	return{
		addMessage: (newDialogBody) =>{
			dispatch(addMessageCreater(newDialogBody))
		}
	}	
}

export default compose(
connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect
)(Dialogs);

