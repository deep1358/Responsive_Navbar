import React, { useState } from "react";
import "./Navbar.css";
import Modal from "react-modal";

const Navbar = () => {
  const [modal1IsOpen, setModal1IsOpen] = React.useState(false);
  const [modal2IsOpen, setModal2IsOpen] = React.useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);
  const [registerUsernameError, setRegisterUsernameError] = useState(false);
  const [registerEmailError, setRegisterEmailError] = useState(false);
  const [registerPasswordError, setRegisterPasswordError] = useState(false);

  const login = () => {
    setModal1IsOpen(true);
  };
  const register = () => {
    setModal2IsOpen(true);
  };

  function closeModal1() {
    setModal1IsOpen(false);
  }
  function closeModal2() {
    setModal2IsOpen(false);
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function hamburger() {
    setHamburgerIsOpen(!hamburgerIsOpen);
    if (hamburgerIsOpen) {
      document.getElementById("navbar").style.left = "0%";
      document.getElementById("hamburger").className =
        "fa fa-bars fa-2x hamburger";
      document.getElementById("hamburger").className =
        "fa fa-times fa-2x hamburger";
    } else {
      document.getElementById("navbar").style.left = "80%";
      document.getElementById("hamburger").className =
        "fa fa-times fa-2x hamburger";
      document.getElementById("hamburger").className =
        "fa fa-bars fa-2x hamburger";
    }
  }

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

  function formRegister(e) {
    e.preventDefault();

    if (registerEmail.length === 0) {
      setRegisterEmailError(true);
    }

    if (registerPassword.length === 0) {
      setRegisterPasswordError(true);
    }

    if (registerUsername.length === 0) {
      setRegisterUsernameError(true);
    }

    if (registerEmail.length > 0) {
      setRegisterEmailError(false);
    }
    if (registerPassword.length > 0) {
      setRegisterPasswordError(false);
    }

    if (registerUsername.length > 0) {
      setRegisterUsernameError(false);
    }
    if (
      !registerEmailError &&
      !registerPasswordError &&
      !registerUsernameError
    ) {
      console.log("Registered");
    }
  }

  return (
    <div className="navbar">
      <div className="navbarLogo">
        <h1>Logo</h1>
      </div>
      <i
        className="fa fa-bars fa-2x hamburger"
        id="hamburger"
        onClick={hamburger}
      ></i>
      <div className="navbarContent" id="navbar">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li onClick={login}>LogIn</li>
          <li onClick={register}>Register</li>
        </ul>
      </div>

      <Modal
        className="loginModal"
        isOpen={modal1IsOpen}
        onRequestClose={closeModal1}
      >
        <div className="loginClose">
          <i
            className="fa fa-times fa-2x close"
            aria-hidden="true"
            onClick={closeModal1}
          ></i>
        </div>
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
                style={
                  loginEmailError ? { display: "block" } : { display: "none" }
                }
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
                  loginPasswordError
                    ? { display: "block" }
                    : { display: "none" }
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
      </Modal>

      <Modal
        className="loginModal"
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
      >
        <div className="loginClose">
          <i
            className="fa fa-times fa-2x close"
            aria-hidden="true"
            onClick={closeModal2}
          ></i>
        </div>
        <div className="login">
          <div className="loginHeader">
            <h1>Register</h1>
          </div>
          <form onSubmit={(e) => formRegister(e)} className="loginForm">
            <div className="loginUsername">
              <label className="loginLabel" htmlFor="username">
                Username
              </label>
              <div className="loginUsernameInput">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  name="username"
                  placeholder="Type your username"
                  pattern="[A-Za-z]{6,}"
                  title="Username length must be at least 6 characters long and Digits and special characters not allowed"
                />
              </div>
              <p
                className="error"
                style={
                  registerUsernameError
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                Username must not be empty
              </p>
            </div>
            <div className="loginEmail">
              <label className="loginLabel" htmlFor="email">
                Email
              </label>
              <div className="loginEmailInput">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  name="email"
                  placeholder="Type your Email"
                />
              </div>
              <p
                className="error"
                style={
                  registerEmailError
                    ? { display: "block" }
                    : { display: "none" }
                }
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
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="Type your password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Password at least consist of one Capital letter, one Small letter, one Digit"
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
                  registerPasswordError
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                Password must not be empty
              </p>
            </div>
            <div className="loginButton">
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="loginOptions">
            <div className="loginWith">
              <p>Or Register Using</p>
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
            Already Have an Account? <a href="/">LogIn</a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
