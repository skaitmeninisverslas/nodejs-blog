import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class Homepage extends Component {

constructor(props) {
  super(props);

  this.state = {
    posts: [],
    category: [],
    user: {}
 }
}

 componentDidMount() {
   axios.get(`/api/homepage`)
     .then(res => {
       const posts = res.data.post;
       const category = res.data.categories;
       const user = res.data.user;
       this.setState({ posts, category, user });
     })
     .catch(() => {
       this.props.history.push('/')
     });
 }

 render() {
console.log(this.state.user.email)
   return (
    <div className="">
    <Header user={this.state.user} />
     <ul className="">
    { this.state.posts.map(post =>
       <li className="" key={post._id} value={post.title}>
        <a href={'/post/' + post.title}>
          <h2 className="TITLE">{post.title}</h2>
          <img src={'http://localhost:4000' + post.image} alt="" />
        </a>
        {this.state.category.map(category =>
          <a href={post.category === category._id ? "/categories/" + category.title : null} key={category._id}>{post.category === category._id ? category.title : null}</a>
        )}

        <p>{new Date(post.createdAt).toLocaleString("en-gb", {month: "short", day: "numeric"})}</p>
       </li>
     )
    }
     </ul>
   </div>
  )
 }
}
export default Homepage;
