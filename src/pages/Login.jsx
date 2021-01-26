import React, { Component } from 'react';
import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import MainLogin from '../components/MainLogin'

class Login extends Component {
  render() {
    return (
      <>
        
        <MainLogin/>
        <Footer/>        
      </>
    );
  }
}

export default Login
