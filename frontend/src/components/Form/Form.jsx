import React, { Component } from 'react'
import axios from 'axios';
import {API_URL} from '../../constant/index'
export default class Form extends Component {

    onChange = e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(event,requestType,articleID)=>{
        const title = event.target.elements.title.value;
        const category = event.target.elements.category.value;
        const content = event.target.elements.content.value;

        event.preventDefault();
        switch (requestType) {
            case 'post':
                    return axios.post(API_URL,{
                    title:title,
                    content:content,
                    category:category
                }).then(()=> {this.props.resetState()})
            case 'put':
                    return axios.put(`http://127.0.0.1:8000/api/articles/${articleID}/`,{
                    //return axios.put( API_URL+ articleID  ,{
                    title:title,
                    category:category,
                    content:content
                }).then(()=> {this.props.resetEditState()})
                case 'delete':
                    return axios.delete(`http://127.0.0.1:8000/api/articles/${articleID}/`,{
                    //return axios.put( API_URL+ articleID  ,{
                    title:title,
                    category:category,
                    content:content
                }).then(()=> {this.props.resetEditState()})
            default:
                break;
        }
    }
    render() {
        return (
            <>
                <form onSubmit={(event)=>this.onSubmit(event,
                    this.props.requestType,
                    this.props.articleID)}>
                    <div className="form-group">
                        <input id="title" type="text"
                        onChange={this.onChange}
                        className="form-control"  placeholder="Enter Title"/>
                    </div>
                    <div className="form-group">
                        <input id="category" type="text" onChange={this.onChange}
                        className="form-control" placeholder="Category"/>
                    </div>
                    <div className="form-group">
                    {/* <label > Content</label> */}
                    {/* <input id="content" type="text" onChange={this.onChange}
                        className="form-control" placeholder="content"/> */}
                    <textarea id="content" type="text" onChange={this.onChange}
                        className="form-control" placeholder="content"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}








// componentDidMount(){
//     if(this.state){
//         const{title,category,content}= this.state;
//         this.setState({title, category,content})
//     }
// }
// onSubmit=(event,requestType,articleID)=>{
//     //  const title = event.target.elements.title.value;
//     //  const category = event.target.elements.category.value;
//     //  const content = event.target.elements.content.value;

//     event.preventDefault();
//     switch (requestType) {
//         case 'post':
//             return axios.post(API_URL, this.state).then(() => {
//                 this.props.resetState();
                
//               }).then(res=>console.res('create data',res))
//             //.catch(error=>console.err(error))
//         case 'put':
//             return axios.put(API_URL + articleID ,this.state)
//             .then(()=>{this.props.resetState()})
//             .then(res=>console.res('update data',res))
//             .then(error=>console.err(error))
//         default:
//             break;
//     }
// }





