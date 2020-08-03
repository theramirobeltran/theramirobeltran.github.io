import React, { useContext } from "react";
import { AppContext } from '../App';
import Article from "../components/article";
import bio from '../mock/bio';

export default () => {
  const app = useContext(AppContext);
  
  document.title = 'Ram Beltran';
  app.setPhrase('I dabble in code; Sometimes it works.')

  return (
    <main>
      <Article article={bio} />
    </main>
  );
};
