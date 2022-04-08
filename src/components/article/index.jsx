import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./article.css";

export default ({ article }) => (
  <article>
    <ReactMarkdown children={article} remarkPlugins={[remarkGfm]} />
  </article>
);
