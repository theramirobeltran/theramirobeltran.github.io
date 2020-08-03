import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../../App';
import "./header.css";

const Header = () => {

  let app = useContext(AppContext);

  return (
    <header>
      <nav>
        <Link to="/">RAMIRO BELTRAN</Link>
        {/* <ul id="navigation">
          <Link to='/words'>Words</Link>
          <Link to='/canvas'>Canvas</Link>
        </ul> */}
      </nav>

      <section id="intro">
        <img
          src={require("../../assets/profile_pic.jpg")}
          alt="ramiro beltran"
        />
        <h1>Ramiro 'Ram' Beltran</h1>
        <h2>{app.phrase}</h2>
      </section>
    </header>
  );
};

export default Header;
