import React from "react";
import NavBar from "./components/NavBar/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
}

export default App;
