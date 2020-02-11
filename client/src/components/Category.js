import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'

class Category extends Component {

constructor(props) {
  super(props);

  this.state = {
    posts: [],
    category: []
 }
}

componentDidMount() {
  axios.get(`/api` + this.props.location.pathname)
    .then(res => {
      const posts = res.data.posts;
      const category = res.data.categories;
      this.setState({ posts, category });
    })
    .catch(() => {
      this.props.history.push('/')
    });
}

 render() {

   return (

     <ul>
     <div>
      <Header />
    </div>
    <h2>{this.state.category.title}</h2>
    { this.state.posts.map(post =>
       <li key={post._id} value={post.title}>
       {}
        <a href={'/post/' + post.title}>
          <h2 className="TITLE">{post.title}</h2>
          <img src={'http://localhost:4000' + post.image} alt="" />
        </a>

        <p>{new Date(post.createdAt).toLocaleString("en-gb", {month: "short", day: "numeric"})}</p>
       </li>
     )
    }
     </ul>

  )
 }
}
export default Category;
