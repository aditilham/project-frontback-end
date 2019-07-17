import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
  state= {
    name:'',
    email:'',
    password:''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
    .post('https://prjct-mongoose.herokuapp.com/user', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
    .then(data => {
      console.log(data);
      if (data.status === 200){
        this.props.history.push('/')
      } else {
        alert("you are NOOOOOBBB")
      }
      
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <div>Name</div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div>Email</div>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div>Password</div>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp