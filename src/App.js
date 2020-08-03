import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Routes from "./routes";
import ContactCard from "./components/contact-card";

const AppContext = React.createContext();

export { AppContext };

const App = () => {

  const [phrase, setPhrase] = useState('I dabble in code; Sometimes it works.')
  
  return (
    <AppContext.Provider value={{ phrase, setPhrase }}>
      <Header />
      <Routes />
      <ContactCard />
    </AppContext.Provider>
  );
}

export default App;
