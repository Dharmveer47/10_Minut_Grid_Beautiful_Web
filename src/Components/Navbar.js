import React, { useState } from "react";
import UserImg from "../Assets/Img/UserImg.png";
import "../Styles/Navbar.css";
import { FiMenu } from "react-icons/fi";
import Cross from "../Assets/Ico/cross.svg"

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="MainNav">
      <div className="NavHeading">
        <h1>ZUAN</h1>
      </div>

      <div className={`NavLink ${menu ?"NavLinkTrue": " "}`}>
        <div className="Links">
          <div>
            <button>Overview</button>
            <div></div>
          </div>
          <div>
            <button>Location</button>
          </div>
          <div>
            <button>Action Required</button>
          </div>
          <div>
            <button>Live</button>
          </div>
          <div>
            <button>My Drive</button>
          </div>
        </div>

        <div className="NavUser">
          <div className="">
            <div className="TeamZuan">
              <p>Hi Team Zuan</p>
            </div>
            <div>
              <img src={UserImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <FiMenu className={`${menu ? "hide" : ""} menuIn`} onClick={()=> setMenu(preState => !preState)} />
        <img src={Cross} alt=""  className={`${menu ? "" : "hide"}`}  onClick={()=> setMenu(preState => !preState)}/>
      </div>
    </div>
  );
};

export default Navbar;
