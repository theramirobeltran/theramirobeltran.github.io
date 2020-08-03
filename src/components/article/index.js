import React from "react";
import "./article.css";

export default ({ article }) => (
  <main>
    {article.map(section => {
      return (
        <div className="paragraph">
          <div className="title">{section.title}</div>
          <div>
            {section.paragraphs.map(par => {
              return <p>{par}</p>;
            })}
          </div>
        </div>
      );
    })}
  </main>
);
