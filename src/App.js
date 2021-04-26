import React from "react";
import NavBarComponents from "./Components/NavBarComponents";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBarComponents />
    </Router>
  );
}

export default App;
