



import React, {Component} from 'react'
import axios from 'axios';
import { Form } from 'semantic-ui-react';

class Article extends Component {
    // const [articles, setArticle] = useState([]);
    // const [query , setQuery] = useState("");
    state ={
        articles :[],
        query:""
    }
    
    searchUsers = (query)=> {
        // axios.get(`http://127.0.0.1:8000/api/?q=${query}`)
        //const url = `http://127.0.0.1:8000/api?q=${query}`;
        const url =`https://api.bigcommerce.com/stores/${query}/v3/catalog/products`;
        axios.get(url)
        
        .then(res =>{
             this.setState({
                 articles : res.data,
                 
             })

            console.log( "res:", res.data)
        });
        

        
    }
    handleChange= e =>{
        this.setState({query: e.target.value })
        console.log("query" ,e)
      }
    render(){
        const  {articles, query} = this.state;
        return (
            <div className="container">
               <Form onSubmit={e =>{this.searchUsers(query)}}>
                            <Form.Group>
                            <Form.Input onChange={this.handleChange} value={query} placeholder="search user" name="github user"/>
                            <Form.Button  type="submit" content="search"/>
                        </Form.Group>
                    </Form> 
                    <div className="row">
                        {articles.map(article =>
                            (
                                <div key={article.id} className="card mb-3">
                                <h1>Our Articles</h1>
                                
                                <div className="card-body">
                                    <div className="card-title">
                                        Name: {article.title}
                                    </div>
                                    <p className="card-text">ArticleName: {article.title}</p>
                                    <p className="card-text">followers:{article.content}</p>
                                    <p>{this.props.name}</p>
                                    {/* <p className="card-text"><img src={article.}  alt="Logo" /></p>     */}
                                </div>
                            </div>
                            )
                        )}
                    </div>
            </div>
        )
    }
}

export default Article
