import React, { Component } from 'react'
import {Link ,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/action/auth'
 class Navbar extends Component {
    render() {
      const {logout,isAuthenticated} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">BLOG</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
           <Link className="nav-link" to="/articleslist/">ArticleList</Link> 
           </li>
           <li>
           {isAuthenticated ? (
        <>
          <Link className="nav-link" to="/">Profile</Link>
          {" | "}
          <Link className="nav-link" to="/logout" onClick={logout}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className="nav-link" to="/login/">Login</Link>
          {" | "}
          <Link className="nav-link" to="/signup/">SignUp</Link>
        </>
      )}
            </li>
      
      
    </ul>
  </div>
</nav>
        )
    }
}

const mapDispatchToProps=(dispatch) =>{
  return {
    logout :() => dispatch(actions.logout())
  }
}
export default connect(null, mapDispatchToProps)(Navbar)