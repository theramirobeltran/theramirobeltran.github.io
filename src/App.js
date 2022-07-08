import React from "react";

import "./App.css";
import Header from "./components/header";
import ContactCard from "./components/contact-card";
import Article from "./components/article";
import Carousel from "./components/Carousel";
import { useArticle, usePhrase } from "./hooks";

const App = () => {
  const { article, articles, setArticleIdx } = useArticle();
  const phrase = usePhrase();

  return (
    <>
      <Header phrase={phrase} />
      <main>
        <Carousel data={articles} onChange={setArticleIdx} showThumbs={false} />
        <p style={{ opacity: 0.5, marginTop: 5, textAlign: "right" }}>
          {article.publishedDate}
        </p>
        <Article article={article.body} />
      </main>
      <ContactCard />
    </>
  );
};

export default App;
