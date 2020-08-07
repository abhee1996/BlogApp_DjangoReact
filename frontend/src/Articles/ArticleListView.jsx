import React, {Component} from 'react'
import axios from 'axios';
import Form from '../components/Form/Form';
//import { Form } from 'semantic-ui-react';
import Modal from '../components/Modal/Modal'
import {API_URL} from '../constant/index'
class ArticlesListView extends Component {

    state ={
        articles :[]
    }

    componentDidMount () {
        
        
        this.resetState();
    }
    getArticles=()=>{
        axios.get(API_URL).then(res =>{this.setState({
                 articles : res.data,
             })
        }); 
    }
    resetState=()=>{
        this.getArticles()
    }

    render(){
        const  {articles} = this.state;
        return (
            <div className="container">

                    <div className="row">
                        {articles.map(article =>
                            (
                                <>
                                <div key={article.id} className="card m-2 col-12 col-md-12">
                                        <div className="card-header bg-warning ">
                                        <div className="card-title">
                                            <div className="col-md-5">
                                                <h3 className="card-text"><a className="text-dark " href={`/${article.id}/`}>{article.title}</a></h3>
                                                {/* <p className="card-text">{article.category}</p> */}
                                            </div>
                                            </div>
                                        </div>
                                        <div style={{backgroundColor:"#29333E"}}  className="card-body ">

                                            <p  className="card-text text-light">{article.content}</p>
                                        </div>

                                </div>
                                        {/* <Modal
                                        articleID={article.id}
                                        resetState={this.resetState}

                                        /> */}
                                </>
                            )
                        )}

                    </div>
                        

                        <br/>
                        <h5 className="text-justify">Create New Article</h5>
                        <hr/>
                        <Form
                            requestType="post"
                            articleID={null}
                            resetState={this.resetState}/>
            </div>
        )
    }
}

export default ArticlesListView
