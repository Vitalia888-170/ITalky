import React from 'react';
import *as axios from 'axios';
import Header from './Header.jsx';
import {connect} from "react-redux";
import {Logout} from './../../redux/auth-reducer.js';



class HeaderAPIContainer extends React.Component{	
	render(){
		return(
			<Header {...this.props}/>
		)
	}
}

let mapStateToProps = (state) =>{
	return{
		isAuth:state.auth.isAuth,
		login:state.auth.login,
		userId:state.auth.userId
	}
}
export default connect(mapStateToProps, {Logout})(HeaderAPIContainer);