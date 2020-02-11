import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

constructor(props) {
  super(props);

  this.state = {
    post: [],
    category: []
 }
}

 componentDidMount() {
  axios.get(`/api` + this.props.location.pathname)
  .then(posts => {
    const post = posts.data.post;
    const category = posts.data.category
    this.setState({ post, category });
  })
  .catch()
 }

 render() {


   return (
    <div>
      <h2>{this.state.post.title}</h2>
      <p>{this.state.post.description}</p>
      <p>{this.state.post.content}</p>
      <p>{this.state.post.author}</p>
      <a href={"/categories/" + this.state.category.title}>{this.state.category.title}</a>
      <p>{new Date(this.state.post.createdAt).toLocaleString("en-gb", {month: "short", day: "numeric"})}</p>
      <img src={'http://localhost:4000' + this.state.post.image} alt="" />
    </div>
   )
 }
}
export default Post;
