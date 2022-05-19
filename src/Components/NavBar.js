import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/Dashboard" className="text-class">
            Dashboard
          </Link>
          <Link to="/posts" className="text-class">
            Posts
          </Link>
          <Link to="/links" className="text-class">
            Links
          </Link>
        </ul>
      </nav>
      <br/><br/><br/>
    </div>
  );
};

export default NavBar;