import React ,{Component} from 'react'
import axios from 'axios'
import {API_URL} from '../constant/index'
import Modal from '../components/Modal/Modal'
class ArticleRemove extends Component{
    state = {
        modal: false
      };
    
      toggle = () => {
        this.setState(previous => ({
          modal: !previous.modal
        }));
      };
     deleteArticle =()=>{
         ///const articleID =this.props.match.params.articleID
         axios.delete(API_URL+ this.props.articleID)
         .then(() =>{this.props.resetEditState()})
     }
    render(){
        const {articleID} = this.props
    return (
        <div>
                    {/* <!-- Button trigger modal --> */}
                 <button type="button" className="btn btn-danger" onClick={this.toggle} data-toggle="modal" data-target="#exampleModalLong">
                Delete
                </button> 

                {/* <!-- Modal --> */}
                 <Modal deleteArticle={this.deleteArticle} articleID={this.props.articleID}/> 
        
        </div>
    )
    }
    
}

export default ArticleRemove
