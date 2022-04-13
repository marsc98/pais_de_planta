import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import Routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
