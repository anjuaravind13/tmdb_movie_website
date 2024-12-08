import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import Search from "../Search/Search";

function Nav() {
  let navigate = useNavigate();
  
  function goToHome() {
    navigate("/");
  }
  return (
    <div className="nav">
      <div className="nav-one">
        <button className="home-button" onClick={goToHome}>
          Movies
        </button>
      </div>

      <div className="nav-two">
        <ul className="nav-list">
          <li>
            <Search />
          </li>
          <li>
            <Link
              className="link1"
              to={"/"}
              exact
              activeClassName="active-link"
            >
              HOME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
