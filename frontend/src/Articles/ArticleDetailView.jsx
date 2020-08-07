import React, {Component} from 'react'
import axios from 'axios';
import Form from '../components/Form/Form';
import ArticleRemove from './ArticleRemove'
class ArticleDetailView extends Component {
     state ={
        article:{}
    }
    
    componentDidMount() {
        this.resetEditState();
        
    }
    getArticles =()=>{
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/articles/${articleID}/`)
        .then(res =>{
             this.setState({
                 article : res.data
             })

            console.log( "singlearticle1:", res.data)
        });
        
        console.log( "singlearticle:", articleID)
    }
    
    resetEditState=() =>{
        this.getArticles();
    }
    render(){
        const  {article} = this.state;
        return (
            <>
            <main className="container ">
               
               
                    <h1 className="mt-5">{article.title}</h1>
                    <p className="lead ">{article.content}</p>
                    <div className="col-md-5">
                           
                            <ArticleRemove
                           articleID={this.props.match.params.articleID}
                           resetEditState={this.resetEditState}
                           /> 
                       </div>
            </main>
            <br/>
            <hr/>
            <br/>
            <h5>update Article </h5>
            <Form requestType="put"
                articleID={this.props.match.params.articleID}
                resetEditState={this.resetEditState}/>
            </>

        )
    }
}

export default ArticleDetailView
