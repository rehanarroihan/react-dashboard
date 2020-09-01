import React, { Component } from 'react';

import stislaLogo from '../avatar/stisla-fill.svg';
import unsplash from '../avatar/login-bg.jpg';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: ''
    };  
  }

  updateEmailData = (event) => {
    this.setState({emailInput: event.target.value});
  }

  updatePasswordData = (event) => {
    this.setState({passwordInput: event.target.value});
  }

  submitLoginForm = () => {
    if (this.state.emailInput === 'azril@gmail.com' 
          && this.state.passwordInput === 'azril') {
      this.props.history.push('/dashboard/home');
    } else {
      alert('Invalid')
    }
  };

  render() {
    return (
      <div className="section">
        <div className="d-flex flex-wrap align-items-stretch">
          <div className="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
            <div className="p-4 m-3">
              <img
                src={stislaLogo}
                alt="logo"
                width={80}
                className="shadow-light rounded-circle mb-5 mt-2"
              />
              <h4 className="text-dark font-weight-normal">
                Welcome to <span className="font-weight-bold">AisySaeExpress</span>
              </h4>
              <p className="text-muted">
                Before you get started, you must login or register if you don't
                already have an account.
              </p>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  tabIndex={1}
                  onChange={this.updateEmailData}
                  value={this.state.emailInput}
                  required
                />
                <div className="invalid-feedback">Please fill in your email</div>
              </div>
              <div className="form-group">
                <div className="d-block">
                  <label htmlFor="password" className="control-label">
                    Password
                  </label>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.updatePasswordData}
                  value={this.state.passwordInput}
                  onKeyPress={(ev) => {
                    console.log(`Pressed keyCode ${ev.key}`);
                    if (ev.key === 'Enter') {
                      this.submitLoginForm();
                    }
                  }}
                  tabIndex={2}
                  required
                />
                <div className="invalid-feedback">please fill in your password</div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    name="remember"
                    className="custom-control-input"
                    tabIndex={3}
                    id="remember-me"
                  />
                  <label className="custom-control-label" htmlFor="remember-me">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="form-group text-right">
                <a href="auth-forgot-password.html" className="float-left mt-3">
                  Forgot Password?
                </a>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-icon icon-right"
                  tabIndex={4}
                  onClick={this.submitLoginForm}
                >
                  Login
                </button>
              </div>
              <div className="mt-5 text-center">
                Don't have an account?{" "}
                <a href="auth-register.html">Create new one</a>
              </div>

              <div className="text-center mt-5 text-small">
                Copyright © Your Company. Made with 💙 by Stisla
                <div className="mt-2">
                  <a href="#">Privacy Policy</a>
                  <div className="bullet" />
                  <a href="#">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 background-walk-y position-relative overlay-gradient-bottom"
            data-background={unsplash}
          >
            <div className="absolute-bottom-left index-2">
              <div className="text-light p-5 pb-2">
                <div className="mb-5 pb-3">
                  <h1 className="mb-2 display-4 font-weight-bold">Good Morning</h1>
                  <h5 className="font-weight-normal text-muted-transparent">
                    Bali, Indonesia
                  </h5>
                </div>
                Photo by{" "}
                <a
                  className="text-light bb"
                  target="_blank"
                  href="https://unsplash.com/photos/a8lTjWJJgLA"
                >
                  Justin Kauffman
                </a>{" "}
                on{" "}
                <a
                  className="text-light bb"
                  target="_blank"
                  href="https://unsplash.com"
                >
                  Unsplash
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;