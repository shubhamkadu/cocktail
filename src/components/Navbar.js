import React from "react";
import { Link } from "react-router-dom";

import { BiDrink } from "@react-icons/all-files/bi/BiDrink";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h1>
            <BiDrink className='logo'/>
          </h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
