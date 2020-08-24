import React from 'react';
import Main from './Main.jsx';
import {addPost,getUserProfile} from './../../redux/main-reducer.js';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import *as axios from 'axios';
import {withAuthRedirect} from './../../hoc/hoc.js';


class MainContainer extends React.Component{
		
		componentDidMount(){
			let userId = this.props.match.params.userId;
			if(!userId){
			userId=2;
			}
			this.props.getUserProfile(userId);
		}
	render(){
		return(
			<Main statePosts={this.props.statePosts}
			{...this.props}
			profile={this.props.profile}
		/>
		)
	}
}

let mapStateToProps = (state) =>{
	return {
		statePosts: state.mainPage,
		profile:state.mainPage.profile
	}
};
  export default compose(
 		connect(mapStateToProps,{addPost, getUserProfile}),
		withRouter,
		withAuthRedirect
 )(MainContainer);
