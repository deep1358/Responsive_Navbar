import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Modal from "react-modal";
import Register from "./Register";
import Login from "./Login";

const Navbar = () => {
  const [modal1IsOpen, setModal1IsOpen] = React.useState(false);
  const [modal2IsOpen, setModal2IsOpen] = React.useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

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

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

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
        <Register />
      </Modal>

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
          <Login />
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
