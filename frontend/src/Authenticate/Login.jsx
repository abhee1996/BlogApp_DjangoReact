
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actions from '.././Store/action/auth'
const Spinner =()=>{
    return(
        <div class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}
class Login extends Component {
     state={
         username:"",
         password:"",
         submitted:false
     }
    handleChange=(e)=> {
        e.preventDefault()

        this.setState({ [e.target.name]: e.target.value });
        console.log('object', e.target.value)
     }
     onSubmit = (e)=>{
         e.preventDefault()
        this.setState({ submitted: true });
        //const {data} = this.state;
        const { username, password } = this.state;
            if (username && password) {
            this.props.onAuth(username, password)
            }
        this.props.history.push("/");
    }
    render() {
        let errorMessage = null;
        if(this.props.error){
            errorMessage =(
                <p>{this.props.error}</p>
            )
        }
        const {username, password,submitted} = this.state;
        return (
            <>

            <div>
                {errorMessage}
            {
                 this.props.loading?
                 <Spinner/>
                 :
                 
               <div className="col-md-3">
                     <form name="form" onSubmit={this.onSubmit}>
                     <br/>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <input type="password" className="form-control" placeholder="password" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        
                        <Link to="/signup" className="btn btn-link">Register</Link>
                    </div>
                </form>
         
               </div>
             }
            </div>
            </>
        
        )
    }
}
const mapStateToProps = state =>{
    return{
        loading: state.loading,
        error: state.error  
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAuth :(username,password) => dispatch(actions.authLogin(username,password)),
        //authLogin: actions.authLogin
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)