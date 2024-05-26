import React from "react";
import { Link } from "react-router-dom";

const NavbarBlogs = () => {
  return (
    <nav
      style={{ backgroundColor: "#333", padding: "10px 20px", color: "#fff" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none", fontSize: "24px" }}
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default NavbarBlogs;
