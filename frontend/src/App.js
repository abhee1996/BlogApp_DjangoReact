import React,{Component} from 'react';
import './App.css';
import Layouts from './Articles/Layouts';
import Router from './Router';
import {BrowserRouter ,Route,Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from './Store/action/auth'
import ArticleListView from './Articles/ArticleListView'
import ArticleDetailView from './Articles/ArticleDetailView'
import SignUp from './Authenticate/SignUp'

import Navbar from './components/Navbar/Navbar'
import Login from './Authenticate/Login';
class  App extends Component{

  componentDidMount(){
    //every time componentDidMount call onTryAutoSignup
    this.props.onTryAutoSignup();

  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          
          {/* <Layouts {...this.props}> */}
          <Navbar isAuthenticated={this.props.isAuthenticated}/> 
          <Router/> 
               
        
          {/* </Layouts> */}

        
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state =>{
   return{
    isAuthenticated: state.token !== null
  }
   }
const mapDispatchToProps = dispatch =>{
  return {
      onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
