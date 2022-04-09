import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
        <ReactMarkdown
          children={phrase}
          remarkPlugins={[remarkGfm]}
          className="phrase"
        />
      </section>
    </header>
  );
};

export default Header;
