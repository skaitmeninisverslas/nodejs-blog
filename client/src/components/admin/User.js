import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

constructor(props) {
  super(props);

  this.state = {
    user: {},
    socials: {}
 }
}

 componentDidMount() {
   axios.get(`/api/user`)
     .then(res => {
       const user = res.data;
       const socials = res.data.socials
       this.setState({ user, socials });
     })
     .catch(() => {
       this.props.history.push('/login')
     });
 }

 render() {

   return (

     <div className="w-100">

      <h2 className="text-center">User Account</h2>


      <form className="mt-4" action="/api/user/edit" method="POST" encType="multipart/form-data">
        <div className="modal-header">
          <img className="rounded-circle" width="75" height="75" src={'http://localhost:4000/' + this.state.user.image} alt="" />
          <h5 className="modal-title text-center" id="exampleModalLabel">Edit user account</h5>
        </div>
        <div className="modal-body">

           <div className="form-group">
              <label>Title</label>
              <input className="form-control" type="text" name="username" defaultValue={this.state.user.username} placeholder="Title" />
           </div>

           <div className="form-group">
               <label>
                 Email
               </label>
               <input className="form-control" type="email" name="email" defaultValue={this.state.user.email} placeholder="Title" />
           </div>

           <div className="form-group">
              <label>Facebook</label>
              <input className="form-control" type="url" name="facebook" defaultValue={this.state.socials.facebook} placeholder="Description" />
            </div>

           <div className="form-group">
              <label>Instagram</label>
              <input className="form-control" type="url" name="instagram" defaultValue={this.state.socials.instagram} placeholder="Description" />
            </div>

           <div className="form-group">
              <label>About</label>
              <textarea className="form-control" name="about" defaultValue={this.state.user.about} placeholder="Content ..." cols="30" rows="10"></textarea>
            </div>

          <div className="form-group">
            <input className="form-control-file" type="file" name="image" />
          </div>

        </div>
        <div className="modal-footer">
          <button className="btn btn-success" type="submit">
           <i className='fas fa-save'></i> Post
          </button>
        </div>
        </form>


      </div>

   )
 }
}
export default User;
