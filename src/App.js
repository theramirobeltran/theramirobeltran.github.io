import React, { useState } from "react";

import "./App.css";
import Header from "./components/header";
import ContactCard from "./components/contact-card";
import Article from "./components/article";
import Carousel from "./components/Carousel";
import articles from "./data/articles";

const App = () => {
  const [articleIdx, setArticleIdx] = useState(0);
  const handleArticleChange = (e) => {
    // console.log(e);
    setArticleIdx(e);
  };

  const post = articles[articleIdx];

  return (
    <>
      <Header phrase="I dabble in code; Sometimes it works." />
      <main>
        <Carousel
          data={articles}
          onChange={handleArticleChange}
          showThumbs={false}
        />
        <p style={{ opacity: 0.5, marginTop: 5, textAlign: "right" }}>
          {post.publishedDate}
        </p>
        <Article article={post.article} />
      </main>
      <ContactCard />
    </>
  );
};

export default App;
