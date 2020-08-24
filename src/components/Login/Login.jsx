import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Classes from './Login.module.css';
import loginImage from './login1.svg';
import {required} from './../../common/Utils/Validators/validators.js';
import {connect} from "react-redux";
import {Input} from './../../common/Forms/forms.jsx';
import {Login} from './../../redux/auth-reducer.js';
import {Redirect} from 'react-router-dom';
import {CreateFields} from './../../common/Forms/forms.jsx';


const LoginForm = ({handleSubmit, error}) =>{
	return(
		<form onSubmit={handleSubmit} className={Classes.formList}>
			<div>
					{CreateFields("Email", "email", Input, [required])}
			</div>
			<div>
						{CreateFields("Password", "password", Input, [required]), {type:"password"}}
			</div>
			<div className={Classes.remember}>
				
						{CreateFields(null, "rememberMe", Input, null, {type:"checkbox"} )}
			</div>
			<div>
					{ error && <div className={Classes.commonError}>{error}</div>
					}
			</div>
			<div>
					<button  className={Classes.loginBtn}>Login</button>
			</div>
		</form>
	)
}

let LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const LoginPage =(props) => {

let onSubmit=(formData)=>{
	console.log("formData");
	props.Login(formData.email, formData.password, formData.rememberMe)
}

if(props.isAuth){
	return <Redirect to={"/main"}/>
}
	return(
		<div>
			<h4 className={Classes.title}>User Login</h4>
			<div className={Classes.block}>
					<LoginReduxForm onSubmit={onSubmit}/>
					<img className={Classes.image} src={loginImage}/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) =>({
 	isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {Login})(LoginPage);