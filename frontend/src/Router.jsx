import React from 'react'
import {Route ,Switch} from 'react-router-dom';
import Layouts from './Articles/Layouts'
import ArticleListView from './Articles/ArticleListView'
import ArticleDetailView from './Articles/ArticleDetailView'
import Login from './Authenticate/Login'
import SignUp from './Authenticate/SignUp'
 const Router = () => {
    return (
        <div>
          <Switch>
              
            <Route path="/" exact strict component={Layouts}/>
            <Route  path="/articleslist/" component={ArticleListView}/>
            <Route  path="/articles/:articleID/" component={ArticleDetailView}/>
            <Route  path="/login/" component={Login}/>
            <Route exact path="/signup/" component={SignUp}/>

        </Switch>  
        </div>
    )
}
export default Router
