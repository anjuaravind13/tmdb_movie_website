import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import Search from "../Search/Search";

function Nav() {

  let navigate = useNavigate();
  function goToHome() {
    navigate("/movies");
  }
  return (
    <div className="nav">
      <div className="nav-one">
        <button className="home-button" onClick={goToHome}>check</button>
      </div>
      
     
       
      <div className="nav-two">
        
    
        <ul className="nav-list">
        <li>
        <Search/>
        </li>
          <li>
            <Link className="link1" to={"/"} exact activeClassName="active-link">HOME</Link>
          </li>
          <li>
            <Link className="link1" to={"/form"} exact activeClassName="active-link">FORM</Link>
          </li>
          <li>
            <Link className="link1" to={"/movies"} exact activeClassName="active-link">MOVIES</Link>
          </li>
          <li>
            <Link className="link1" to={"/counter"} exact activeClassName="active-link">COUNTER</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
