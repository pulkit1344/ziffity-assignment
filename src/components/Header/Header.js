import React from "react";
import './Header.css'

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <header>
        <Link to="/">Home</Link>{" "}
      </header>
    </nav>
  );
};

export default Header;
