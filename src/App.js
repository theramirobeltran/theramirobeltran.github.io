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
  return (
    <>
      <Header phrase="I dabble in code; Sometimes it works." />
      <main>
        <Carousel
          data={articles}
          onChange={handleArticleChange}
          showThumbs={false}
        />
        <Article article={articles[articleIdx].article} />
      </main>
      <ContactCard />
    </>
  );
};

export default App;
