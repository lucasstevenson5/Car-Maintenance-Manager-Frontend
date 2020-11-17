import React, { Component } from 'react';
import './App.css';
import Header from './components/Home/Header';
import Homepage from './components/Home/Homepage';
import Login from './components/Login-Signup/Login';
import Signup from './components/Login-Signup/Signup';
import Profile from './components/Profile/Profile';

import { registerUser, loginUser, verifyUser } from './services/api_helper';

import { Route, withRouter } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      error: false,
      errorLogin: false,
      errorMsg: "",
      errorMsgLogin: ""
    }
  }

  handleSignup = async (e, registerData) => {
    e.preventDefault();
    try {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser: currentUser,
        error: false,
        errorLogin: false,
        errorMsg: "",
        errorMsgLogin: ""
      })
      this.props.history.push('/profile');
    }
    catch (error) {
      if (error.response.data.error.errors[0].message == "username must be unique") {
        let errorMsg = error.response.data.error.errors[0].instance.username
        this.setState({
          error: true,
          errorMsg
        })
      }
    }
  }

  handleLogin = async (e, registerData) => {
    e.preventDefault();
    try {
      const currentUser = await loginUser(registerData);
      this.setState({
        currentUser: currentUser,
        error: false,
        errorLogin: false,
        errorMsg: "",
        errorMsgLogin: ""
      })
      this.props.history.push('/profile');
    }
    catch (error) {
      if (error.response.data == "ERROR: Incorrect Username/Password") {
        let errorMsgLogin = "Incorrect Credentials"
        this.setState({
          errorLogin: true,
          errorMsgLogin
        })
      }
    }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser: currentUser
      })
    } else {
      this.setState({
        currentUser: null
      })
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null
    })
    this.props.history.push('/')
  }



  componentDidMount() {
    this.handleVerify();
  }

  render() {
    return (
      <div>
        
        <Header handleLogout={this.handleLogout} {...this.state} />
        <main>
          <Route exact path="/"
            render={ (props) => {
              return <Homepage />
            }} 
          />
          <Route path="/login"
            render={ (props) => {
              return  <Login 
                        handleLogin={this.handleLogin}
                        {...this.state}
                      />
            }} 
          />
          <Route path="/signup"
            render={ (props) => {
              return  <Signup
                        handleSignup={this.handleSignup}
                        {...this.state}
                      />
            }} 
          />
          <Route path="/profile"
            render={ (props) => {
              return  <Profile
                        handleEditProfile={this.handleEditProfile}
                        deleteProfile={this.deleteProfile}
                        handleVerify={this.handleVerify}
                        {...this.state}
                      />
            }} 
          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
