import React, { useState } from "react";
import logo from "../assets/images/sq.png";

import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("overview");

  return (
    <Styling>
      <div className="containers">
        <div>
          <img src={logo} alt="logo" className="logo" height="50px" />
        </div>
        <div className="links sm-hide">
          <div
            className={active === "home" ? "activeLink" : "navlink"}
            onClick={() => {
              setActive("home");
            }}
          >
            Home
          </div>
          <div
            className={active === "overview" ? "activeLink" : "navlink"}
            onClick={() => {
              setActive("overview");
            }}
          >
            Overview
          </div>
        </div>
        <div>
          <FaRegUserCircle color="white" size="1.4em" />
        </div>
      </div>
      <div className="bg-white">
        <div className="link">
          <div className="home">Home</div>
          <div className="overview">Overview</div>
        </div>
      </div>
    </Styling>
  );
};

export default Navbar;

const Styling = styled.div`
  min-width: 100vw;
  font-family: SFProText;
  .containers {
    max-width: 100vw;
    background: #2d2d2d;
    padding-left: 40px;
    padding-right: 40px;
    color: white;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bg-white {
    display: none;
  }
  .activeLink {
    cursor: pointer;
    border-bottom: 2px solid #ff6600;
    padding-bottom: 23px;
  }
  .navlink {
    cursor: pointer;
  }

  .links {
    display: flex;
    justify-content: space-around;
    padding-top: 25px;
    width: 20rem;
  }
  .link {
    display: flex;
    justify-content: space-around;
    padding-top: 18px;
    width: 15rem;
  }

  @media screen and (max-width: 900px) {
    min-width: 100vw !important;
    .bg-white {
      background-color: #ffffff;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 100%;
    }
    .sm-hide {
      display: none;
    }
    .containers {
      min-width: 100;
    }
  }
`;
