import React from "react";
import "./article.css";

export default ({ article }) => (
  <>
    {article.map(section => {
      return (
        <article className="paragraph" key={section.title}>
          <h2 className="title">{section.title}</h2>
          <section>
            {section.paragraphs.map(par => {
              return <p key={par.substring(0, 5)}>{par}</p>;
            })}
          </section>
        </article>
      );
    })}
  </>
);
