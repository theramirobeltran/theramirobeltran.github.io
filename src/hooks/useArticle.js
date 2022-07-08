import { useEffect, useState } from "react";
import { articles } from "../data";

export const useArticle = () => {
  const [articleIdx, setArticleIdx] = useState(0);
  const [article, setArticle] = useState(articles[articleIdx]);

  const getArticleBody = (fileName) => {
    const filePath = require(`../data/articles/${fileName}`);

    return fetch(filePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        return text;
      });
  };

  useEffect(() => {
    const newArticle = articles[articleIdx];

    getArticleBody(newArticle.fileName).then((body) => {
      setArticle({ ...newArticle, body });
    });
  }, [articleIdx]);

  return { article, articles, setArticleIdx };
};
