import React from "react";
import "./header.css";

const Header = ({ phrase }) => {
  return (
    <header>
      <section id="intro">
        <img
          src={require("../../assets/profile_pic.jpg")}
          alt="ramiro beltran"
        />
        <h1>Ramiro 'Ram' Beltran</h1>
        <h3>{phrase}</h3>
      </section>
    </header>
  );
};

export default Header;
