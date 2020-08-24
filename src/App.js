import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import ProfileContainer from  './components/Profile/ProfileContainer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import Login from './components/Login/Login.jsx';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader.jsx";
import {setUserAuthorized} from "./redux/app-reducer.js";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from './redux/redux-state.js';


class App extends React.Component{

  componentDidMount = () =>{
      this.props.setUserAuthorized();    
   }

  render(){
      if(!this.props.authorized){
        return <Preloader/>
      }
      return (
     <div className="app-wrapper">
          <HeaderContainer/>
          <div className="content">
              <div className="content-image"></div>
                   <NavBar/>
                   <div className="information">
                        <ProfileContainer/>
                        <div className="container">
                            <Route path="/dialogs"
                                 render={ () => <DialogsContainer/>}/>
                            <Route path="/main/:userId?" 
                                  render={ () => <MainContainer/>}/>
                            <Route path='/searching' render={ () =><UsersContainer/>}/>
                            <Route path="/music" render={ () => <Music/>}/>
                            <Route path="/news" render={ () => <News/>}/>
                            <Route path="/settings" render={ () => <Settings/>}/>
                            <Route path="/login" render={ () => <Login/>}/>
                      </div>
                      
                </div>
           </div>
   </div>
  )
}

}

const mapStateToProps =(state)=>({
 authorized:state.app.isAuthorized
});

let AppContainer = compose(
withRouter,
connect(mapStateToProps,{setUserAuthorized})
)(App);


let SamuraiJSContainer = (props) =>{  
    return <BrowserRouter>
    <Provider store={store}>
      < AppContainer/>
    </Provider>
    </BrowserRouter>
}

export default SamuraiJSContainer;