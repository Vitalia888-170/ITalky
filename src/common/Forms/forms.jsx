import React from 'react';
import Classes from './forms.module.css';

export const FormControl = ({input, meta, ...props}) =>{
const hasError = meta.error && meta.touched 
	return(
		<div className={Classes.formControl + " " + (hasError ? Classes.error : " ")}>
				{props.children}
				<div>
				{hasError && <span>{meta.error}</span>
				}
				</div>
		</div>
	)
}

export const Textarea = (props) =>{
const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}


export const Input = (props) =>{
const {input, meta, child,  ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateFields = (placeholder, name, component , validators , type, text) => (<Field className={Classes.form}
 name={name} component={component}
validate={validators}  placeholder={placeholder} type={type}/> ,{text});
