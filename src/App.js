import React from "react";
import "./App.css";
import Header from "./components/header";
import Routes from "./routes";
import ContactCard from "./components/contact-card";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <ContactCard />
    </div>
  );
}

export default App;
