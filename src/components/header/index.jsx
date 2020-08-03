import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">RAMIRO BELTRAN</Link>
      </nav>

      <section id="intro">
        <img
          src={require("../../assets/profile_pic.jpg")}
          alt="ramiro beltran"
        />
        <h1>Ramiro 'Ram' Beltran</h1>
        <h2>I dabble in code; Sometimes it works.</h2>
      </section>
    </header>
  );
};

export default Header;
