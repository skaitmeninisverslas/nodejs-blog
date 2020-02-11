import React, { Component } from 'react';
import Categories from './Categories';
import Posts from './Posts';
import User from './User';
import axios from 'axios';

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper.min.js'

class Admin extends Component {

  constructor(props) {
      super(props);
      this.state = {
        showComponent:'posts',
        isSigned: false
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }

    componentDidMount() {
      axios.get(`/api/posts/new`)
      .then(res => {
           if (res.status === 200) {
             this.setState({isSigned: true});
           }
         })
        .catch(() => {
          this.props.history.push('/login')
        })
    }

    _onButtonClick = (event) => {
      this.setState({
        showComponent: event.target.name
      });
    }

    render() {

      return (
        <div className="h-100 container-fluid">

          <div className="row h-100">
          <ul className="p-3 col-md-2 h-100 bg-dark d-flex flex-column justify-content-center mb-0" style={{listStyleType: "none"}}>
            <h2 className="text-white mt-4 text-center">Admin Panel</h2>
            <li className="mt-auto">
              <button className="btn btn-light w-100" onClick={this._onButtonClick} name="posts"><i className="fas fa-copy"></i> Posts</button>
            </li>
            <li className="mt-3">
              <button className="btn btn-light w-100" onClick={this._onButtonClick} name="categories"><i className="fas fa-folder"></i> Categories</button>
            </li>
            <li className="mt-3">
              <button className="btn btn-light w-100" onClick={this._onButtonClick} name="user"><i className="fas fa-user"></i> User Account</button>
            </li>
            <li className="mt-auto align-self-end">
             <a className="btn btn-danger" href="/api/auth/logout">Logout <i className="fas fa-sign-out-alt"></i></a>
            </li>
          </ul>
          <div className="col-md-10 p-4 h-100 overflow-auto">
            {this.state.showComponent === "posts" && this.state.isSigned === true ?
               <Posts /> :
               null
            }
            {this.state.showComponent === "categories" && this.state.isSigned === true ?
                <Categories />
               :
               null
            }
            {this.state.showComponent === "user" && this.state.isSigned === true ?
                <User />
               :
               null
            }
          </div>
         </div>
        </div>
      );
    }
}
export default Admin;
