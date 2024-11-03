import React from "react";

export const NavBar = () => {
  return (
    <div>
      <nav className="container">
        <img src="/brand_logo.png" alt="" />

        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button>LOGIN</button>
      </nav>
    </div>
  );
};
