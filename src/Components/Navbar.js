import React from "react";
import UserImg from "../Assets/Img/UserImg.png";
import "../Styles/Navbar.css";
import { FiMenu } from "react-icons/fi";


const Navbar = ({navShow = false }) => {
  return (
      
    <div className="MainNav">
      <div className="NavHeading">
        <h1>ZUAN</h1>
      </div>
      
      <div className="NavLink">
        <button>Overview</button>
        <button>Location</button>
        <button>Action Required</button>
        <button>Live</button>
        <button>My Drive</button>
      </div>
      <div className="NavUser">
        <div>
          <p>Hi Team Zuan</p>
        </div>
        <div>
          <img src={UserImg} />
        </div>
      </div>
      <div className="menu">
        <FiMenu className="menuIn" />
      </div>
    </div>
  );
};

export default Navbar;
