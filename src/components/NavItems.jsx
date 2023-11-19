import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //event Listeners
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header>
      {/* Header starts here */}
      <div>
        <div className="nav-header">
          <div className="nav-header-top-area">
            <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
