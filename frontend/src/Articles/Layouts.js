import React, {Component} from 'react'
import ArticleListView from './ArticleListView'
import Navbar from '../components/Navbar/Navbar'
import {connect} from 'react-redux'
import * as actions from '.././Store/action/auth'

import {Link,withRouter} from 'react-router-dom'
class Layouts extends Component {
    
  
    render(){
        return (
            <>
                  {/* <Navbar /> */}
                   {/* <Navbar {...this.props}/>    */}
                  {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
           {
              this.props.isAuthenticated ?
           <Link className="nav-link" to="/logout/" onClick={this.props.logout}>Logout</Link>
           :
           <Link className="nav-link" to="/login/">login</Link>
  
           }
            </li>
      
      
    </ul>
  </div>
</nav> */}
            <div className="container">
                    <h1 > Current Articles</h1>
                    <div className="row">
                    <nav className="breadcrumb">
                        <Link className="breadcrumb-item" to="/">Feed</Link>
                        <Link className="breadcrumb-item" to="/articleslist/">List</Link>
                        <span className="breadcrumb-item active"></span>
                    </nav>
                    <hr/>
                    <ArticleListView  /> 
                    {/* <ArticleListView ArticleId={article.id} />  */}
                    <br/>
                    <hr/>
                    </div>
            </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        logout :() => dispatch(actions.logout())
    }
}
export default withRouter(connect(null, mapDispatchToProps)(Layouts))