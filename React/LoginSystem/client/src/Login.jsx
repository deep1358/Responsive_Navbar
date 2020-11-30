import React, { useState } from "react";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function formLogin(e) {
    e.preventDefault();
    if (loginEmail.length === 0) {
      setLoginEmailError(true);
    }
    if (loginPassword.length === 0) {
      setLoginPasswordError(true);
    }

    if (loginEmail.length > 0) {
      setLoginEmailError(false);
    }
    if (loginPassword.length > 0) {
      setLoginPasswordError(false);
    }
    if (!loginEmailError && !loginPasswordError) {
      console.log("Logged In");
    }
  }

  return (
    <div className="login">
      <div className="loginHeader">
        <h1>Login</h1>
      </div>
      <form onSubmit={(e) => formLogin(e)} className="loginForm">
        <div className="loginEmail">
          <label className="loginLabel" htmlFor="email">
            Email
          </label>
          <div className="loginEmailInput">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <input
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Type your Email"
            />
          </div>
          <p
            className="error"
            style={loginEmailError ? { display: "block" } : { display: "none" }}
          >
            Email must not be empty
          </p>
        </div>
        <div className="loginPassword">
          <label className="loginLabel" htmlFor="password">
            Password
          </label>
          <div className="loginPasswordInput">
            <i className="fa fa-unlock-alt" aria-hidden="true"></i>
            <input
              type={passwordShown ? "text" : "password"}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="Type your password"
            />
            <i
              className={passwordShown ? "fa fa-eye" : "fa fa-eye-slash"}
              onClick={togglePasswordVisiblity}
              aria-hidden="true"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <p
            className="error"
            style={
              loginPasswordError ? { display: "block" } : { display: "none" }
            }
          >
            Password must not be empty
          </p>
        </div>
        <div className="loginForgotPassword">
          <a href="/">Forgot Password?</a>
        </div>
        <div className="loginButton">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="loginOptions">
        <div className="loginWith">
          <p>Or LogIn Using</p>
        </div>
        <div className="loginSocialIcons">
          <img
            className="icons"
            src="https://img.icons8.com/fluent/2x/google-logo.png"
            alt=""
          />
          <img
            className="icons"
            src="https://img.icons8.com/fluent/2x/facebook-new.png"
            alt=""
          />
          <img
            className="icons"
            src="https://img.icons8.com/fluent/2x/github.png"
            alt=""
          />
        </div>
      </div>
      <div className="loginSignup">
        Not Have an Account? <a href="/">Register</a>
      </div>
    </div>
  );
};

export default Login;
