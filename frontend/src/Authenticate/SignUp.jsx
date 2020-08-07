import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '.././Store/action/auth'
import {Link} from 'react-router-dom'

 class SignUp extends Component {

    state ={
        username:"",
        email:"",
        password1:"",
        password2:"",
        submitted:""
    }
    handleChange=(e)=> {
        e.preventDefault()
        
        this.setState({ [e.target.name]: e.target.value });
        console.log('object', e.target.value)
     }
    onSubmit=(e)=>{
        e.preventDefault();
        this.setState({ submitted: true });
        const { username,email, password1,password2} = this.state;
        if(username,email,password1,password2){
            this.props.onAuthSignUp(username,email,password1,password2)
        }
        this.props.history.push("/")

    }
    render() {
        let errorMessage = null;
        if(this.props.error){
            errorMessage =(
                <p>{this.props.error}</p>
            )
        }
        const {username,email, password1,password2,submitted} = this.state;
        return (
            <>
                {errorMessage}
                <div className="m-5 col-md-6">
                <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.onSubmit}>
                                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" 
                        value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password1 ? ' has-error' : '')}>
                        <label htmlFor="password1">password</label>
                        <input type="password" className="form-control" name="password1"
                         value={password1} onChange={this.handleChange} />
                        {submitted && !password1 &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !password2 ? ' has-error' : '')}>
                        <label htmlFor="password2">Comfirm Password</label>
                        <input type="password" className="form-control" name="password2"
                         value={password2} onChange={this.handleChange} />
                        {submitted && !password2 &&
                            <div className="help-block">Confirm Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                        
                        
                    </div>
                </form>
                <Link to="/login" className="btn nav-link">Login</Link>
            </div>    
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
        onAuthSignUp :(username,email,password1,password2) => dispatch(actions.authSignUp(username,email,password1,password2))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
