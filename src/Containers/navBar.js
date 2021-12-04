import React, {useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaInfinity } from "react-icons/fa";

export const NavBar = () => {
  const [isLogged] = useState(true)

  return (
    <nav>
      <div className="flex">
        <FaInfinity className="home-icon1" />
        {/* <img src="" alt="Our Brand" /> */}
        <span className="mx-4 font-medium">
          <a href="/">Home</a>
          <a href="sumn.com">About Us</a>
          {!isLogged && (
            <Link to="/Blog" href="sumn.com">
              Blog
            </Link>
          )}
        </span>
      </div>
      <FaInfinity className="home-icon2" />
      <div>
        <ul className="flex font-medium">
          <li>
            <Link to="/user/login" className="mx-3">
              {isLogged ? "Login" : "Download Materials"}
            </Link>
          </li>
          <li>
            <Link to="/user/student_register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
