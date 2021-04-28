import React from "react";
import NavBarComponents from "./Components/NavBarComponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Services from "./pages/ServicesPage/Services";

function App() {
  return (
    <Router>
      <NavBarComponents />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
